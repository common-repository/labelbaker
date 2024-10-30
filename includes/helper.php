<?php

function labelbaker_get_files_in_directory($dir)
{
    $files = array();
    if (is_dir($dir)) {
        if ($handle = opendir($dir)) {
            while (($file = readdir($handle)) !== false) {
                if (!in_array($file, array('.', '..')) && !is_dir($dir . DIRECTORY_SEPARATOR . $file)) {
                    $files[] = $file;
                }
            }
            closedir($handle);
        }
    }
    return $files;
}

function labelbaker_image_upload($image_data, $post_id = 99999)
{
    $image_data    = str_replace('data:image/png;base64,', '', $image_data);
    $image_data    = str_replace(' ', '+', $image_data);
    $image_decoded = base64_decode($image_data);

    $fn        = 'labelbaker.png';
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
        $attach_id = wp_insert_attachment($attachment, $filename, $post_id);

        // Make sure that this file is included, as wp_generate_attachment_metadata() depends on it.
        require_once ABSPATH . 'wp-admin/includes/image.php';

        // Generate the metadata for the attachment, and update the database record.
        $attach_data = wp_generate_attachment_metadata($attach_id, $filename);
        wp_update_attachment_metadata($attach_id, $attach_data);

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


function labelbaker_get_email_api()
{
    if (function_exists('labelbaker_email_api')) {
        return labelbaker_email_api();
    }
    return null;
}



function labelbaker_get_user_id()
{
    $user_id = 1;
    if (is_user_logged_in()) {
        $user_id = get_current_user_id();
    }

    return $user_id;
}

function labelbaker_get_templates_dir()
{
    return WP_CONTENT_DIR . '/uploads/' . labelbaker_get_user_id() . '/' . LABELBAKER_TEMPLATE_DIR;
}
function labelbaker_get_user_dir()
{
    return  WP_CONTENT_DIR . '/uploads/' . labelbaker_get_user_id() . '/' . LABELBAKER_USER_DATA_DIR;
}
