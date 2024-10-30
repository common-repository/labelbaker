<?php

namespace LabelBaker;

class Featured_Image
{
    use BaseTrait;

    public function init()
    {
        add_action('rest_api_init', array($this, 'featured_image_upload_rest_route'));
        add_filter('admin_post_thumbnail_html', [$this, 'add_labelbaker_to_featured_image_metabox'], 10, 2);
    }

    public function add_labelbaker_to_featured_image_metabox($content, $post_id)
    {

        $labelbaker_url = esc_url(admin_url("admin.php?page=labelbaker#/editor/post_$post_id"));
        return $content . '<p><a href="' . $labelbaker_url . '" target="_blank">Edit with Labelbaker</a></p>';
    }

    public function featured_image_upload_rest_route()
    {
        register_rest_route(
            'labelbaker/v1',
            '/featured-image-upload',
            array(
                'methods'             => 'POST',
                'permission_callback' => function () {
                    return true;
                    // return current_user_can( 'edit_posts' );
                },
                'callback'            => array($this, 'featured_image_upload_callback'),
            )
        );
    }

    public function featured_image_upload_callback($request)
    {
        $image_data = $request->get_param('image_data');
        $additional_params = $request->get_param('additional_params');
        $post_id = json_decode($additional_params)->postId;


        $image_data    = str_replace('data:image/png;base64,', '', $image_data);
        $image_data    = str_replace(' ', '+', $image_data);
        $image_decoded = base64_decode($image_data);

        $fn        = 'featured_image.png';
        $file_name = md5($fn . microtime()) . '_' . $fn;

        $upload_dir  = wp_upload_dir();
        $upload_path = $upload_dir['path'];
        $upload_url  = $upload_dir['url'];
        $file_path   = $upload_path . '/' . $file_name;

        $file_written = file_put_contents($file_path, $image_decoded);

        if ($file_written) {
            $file_url = $upload_url . '/' . $file_name;

            // save to db

            // $filename should be the path to a file in the upload directory.
            $filename = $file_path;

            // The ID of the post this attachment is for.
            $parent_post_id = $post_id;

            // Check the type of file. We'll use this as the 'post_mime_type'.
            $filetype = wp_check_filetype(basename($filename), null);

            // Get the path to the upload directory.
            $wp_upload_dir = wp_upload_dir();

            // Prepare an array of post data for the attachment.
            $attachment = array(
                'guid'           => $wp_upload_dir['url'] . '/' . basename($filename),
                'post_mime_type' => $filetype['type'],
                'post_title'     => preg_replace('/\.[^.]+$/', '', basename($filename)),
                'post_content'   => '',
                'post_status'    => 'inherit',
            );

            // Insert the attachment.
            $attach_id = wp_insert_attachment($attachment, $filename, $parent_post_id);

            // Make sure that this file is included, as wp_generate_attachment_metadata() depends on it.
            require_once ABSPATH . 'wp-admin/includes/image.php';

            // Generate the metadata for the attachment, and update the database record.
            $attach_data = wp_generate_attachment_metadata($attach_id, $filename);
            wp_update_attachment_metadata($attach_id, $attach_data);

            set_post_thumbnail($post_id, $attach_id);
            return array(
                'success'  => true,
                'imageUrl' => $file_url,
            );
        } else {

            return array(
                'success' => false,
                'message' => 'Unable to save file',
            );
        }
    }
}
