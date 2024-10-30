<?php

namespace LabelBaker;

class API
{

	use BaseTrait;

	public function init()
	{
		add_action('rest_api_init', array($this, 'user_data'));
		add_action('rest_api_init', array($this, 'user_data_save_route'));
		add_action('rest_api_init', array($this, 'register_user_template_route'));
		add_action('rest_api_init', array($this, 'labelbaker_register_get_templates_route'));
		add_action('rest_api_init', array($this, 'image_upload_rest_route'));
		add_action('rest_api_init', array($this, 'get_single_template_route'));
		add_action('rest_api_init', array($this, 'delete_template_route'));
		add_action('rest_api_init', array($this, 'update_template_name_init'));
		add_action('rest_api_init', array($this, 'register_get_attachment_endpoint'));
	}

	public function register_get_attachment_endpoint()
	{
		register_rest_route('labelbaker/v1', '/attachment-image', array(
			'methods' => 'GET',
			'callback' => [$this, 'get_attachment_image_url'],
			'permission_callback' => function () {
				return true;
			},
		));
		register_rest_route('labelbaker/v1', '/featured-image', array(
			'methods' => 'GET',
			'callback' => [$this, 'get_featured_image_url'],
			'permission_callback' => function () {
				return true;
			},
		));
	}

	public function get_featured_image_url($request)
	{
		$post_id = $request->get_param('post_id');

		if (!$post_id) {
			return new \WP_Error('missing_param', 'Post ID parameter is missing.', array('status' => 400));
		}

		$featured_image_id = get_post_thumbnail_id($post_id);

		if (!$featured_image_id) {
			return new \WP_Error('no_featured_image', 'No featured image found for the specified post.', array('status' => 404));
		}

		$image_url = wp_get_attachment_image_url($featured_image_id, 'full');

		if (!$image_url) {
			return new \WP_Error('image_url_error', 'Error retrieving image URL.', array('status' => 500));
		}

		return array('image_url' => $image_url);
	}

	public function get_attachment_image_url($request)
	{
		$post_id = $request->get_param('post_id');

		if (!$post_id) {
			return new \WP_Error('missing_param', 'Post ID parameter is missing.', array('status' => 400));
		}

		$attachments = get_attached_media('image', $post_id);

		if (empty($attachments)) {
			return new \WP_Error('no_attachments', 'No image attachments found for the specified post.', array('status' => 404));
		}

		$first_attachment = reset($attachments);
		$image_url = wp_get_attachment_image_url($first_attachment->ID, 'full');

		if (!$image_url) {
			return new \WP_Error('image_url_error', 'Error retrieving image URL.', array('status' => 500));
		}

		return array('image_url' => $image_url);
	}


	public function update_template_name_init()
	{
		register_rest_route('labelbaker/v1', '/modify-template-name', array(
			'methods'  => 'POST',
			'callback' => [$this, 'modify_template_name'],
			'permission_callback' => function () {
				return true;
			},
			'args'     => array(
				'template_id'   => array(
					'required' => true,
				),
				'template_name' => array(
					'required' => true,
				),
			),
		));
	}

	public function modify_template_name(\WP_REST_Request $request)
	{
		// Get the parameters
		$template_id = sanitize_text_field($request['template_id']);
		$template_name = sanitize_text_field($request['template_name']);

		// Define the file path based on the template_id
		$file_path = labelbaker_get_templates_dir() . "/{$template_id}.json";

		// Check if file exists
		if (!file_exists($file_path)) {
			return new \WP_Error('no_template', 'Template not found', array('status' => 404));
		}

		// Get the file contents and decode the JSON
		$file_content = file_get_contents($file_path);
		$json_data = json_decode($file_content, true);

		// Modify the 'name' key
		$json_data['name'] = $template_name;

		// Re-save the file with the new content
		file_put_contents($file_path, json_encode($json_data, JSON_PRETTY_PRINT));

		// Return a success response
		return new \WP_REST_Response(array('status' => 'success', 'message' => 'Template updated.'), 200);
	}



	public function delete_template_route()
	{
		register_rest_route(
			'labelbaker/v1',
			'/delete-template/(?P<template_id>[a-zA-Z0-9\-]+)',
			array(
				'methods'  => 'DELETE',
				'callback' => array($this, 'delete_template'),
				'args'     => array(
					'template_id' => array(
						'required' => true,

					),
				),

				'permission_callback' => function () {
					return true;
				},
			)
		);
	}

	public function delete_template($request)
	{
		$template_id = $request->get_param('template_id');

		// Build the file path for the template with the specified ID
		$file_path = labelbaker_get_templates_dir() . '/' . $template_id . '.json';

		// Check if the file exists and is writable
		if (file_exists($file_path) && is_writable($file_path)) {
			// Delete the file
			unlink($file_path);
			return new \WP_REST_Response(array('success' => true), 200);
		} else {
			return new \WP_Error('file_not_found', 'The specified file could not be found or is not writable.', array('status' => 404));
		}
	}

	public function get_single_template_route()
	{
		register_rest_route(
			'labelbaker/v1',
			'/template/(?P<template_id>[a-zA-Z0-9\-]+)',
			array(
				'methods'  => 'GET',
				'callback' => array($this, 'lablebaker_get_template'),
				'args'     => array(
					'template_id' => array(
						'required' => true,

					),
				),
				'permission_callback' => function () {
					return true;
				},
			)
		);
	}

	public function lablebaker_get_template($request)
	{
		$template_id = $request->get_param('template_id');

		$dir_path      = labelbaker_get_templates_dir();
		$template_path = $dir_path . '/' . $template_id . '.json';
		if (file_exists($template_path)) {
			$template_data = file_get_contents($template_path);
			$template_data = json_decode($template_data, true);
			return $template_data;
		}
		return array(
			'error'   => '404',
			'message' => 'Template not found',
		);
	}

	public function user_data()
	{
		register_rest_route(
			'labelbaker/v1',
			'/user-data',
			array(
				'methods'  => 'GET',
				'callback' => array($this, 'read_user_data'),
				'permission_callback' => function () {
					return true;
				},
			)
		);
	}

	public function read_user_data()
	{
		$filename    = LABELBAKER_USER_DATA_DIR . '/save.json';
		$upload_dir  = wp_upload_dir();
		$upload_path = trailingslashit($upload_dir['basedir']) . $filename;

		if (!file_exists($upload_path)) {
			return json_encode([
				'error' => true
			]);
		}

		$json_data = file_get_contents($upload_path);
		$json_data = json_decode($json_data, true);

		return $json_data;
	}


	public function user_data_save_route()
	{
		register_rest_route(
			'labelbaker/v1',
			'/user-data',
			array(
				'methods'             => 'POST',
				'callback'            => array($this, 'save_user_data'),
				'permission_callback' => function () {
					return true;
				},
			)
		);
	}

	public function save_user_data($request)
	{
		$json_data   = $request->get_json_params();
		$filename    = LABELBAKER_USER_DATA_DIR . '/' . 'save.json';
		$upload_dir  = wp_upload_dir();
		$upload_path = trailingslashit($upload_dir['basedir']) . $filename;

		$json_data = json_encode($json_data);

		if (!file_put_contents($upload_path, $json_data)) {
			return new \WP_Error('failed_upload', __('Failed to save file', 'text-domain'));
		}

		return array(
			'success'  => true,
			'filename' => $filename,
		);
	}

	public function register_user_template_route()
	{
		register_rest_route(
			'labelbaker/v1',
			'/template',
			array(
				'methods'             => 'POST',
				'callback'            => array($this, 'save_template_data'),
				'permission_callback' => function () {
					return true;
				},
			)
		);
	}

	public function save_template_data($request)
	{
		$json_data             = $request->get_json_params();

		$preview = labelbaker_image_upload($json_data['preview']);

		$template_id           = uniqid() . '-template';

		$template_id 		   = isset($json_data['id']) ? $json_data['id'] : $template_id;
		$json_data['id']       = $template_id;

		$filename              = '/' . $template_id . '.json';

		$upload_path           = trailingslashit(labelbaker_get_templates_dir()) . $filename;

		$json_data['category'] = 'my';
		if ($preview['success']) {
			$json_data['preview'] = $preview['imageUrl'];
		}
		$json_data             = json_encode($json_data);

		if (!file_put_contents($upload_path, $json_data)) {
			return new \WP_Error('failed_upload', __('Failed to save file', 'labelbaker'));
		}

		return array(
			'success'  => true,
			'filename' => $filename,
			'templateId' => $template_id
		);
	}

	public function labelbaker_register_get_templates_route()
	{
		register_rest_route(
			'labelbaker/v1',
			'/templates',
			array(
				'methods'  => 'GET',
				'callback' => array($this, 'get_templates'),
				'permission_callback' => function () {
					return true;
				},
			)
		);
	}

	public function get_templates()
	{

		$dir_path = labelbaker_get_templates_dir();
		$files    = labelbaker_get_files_in_directory($dir_path);
		$results  = array();
		foreach ($files as $file) {
			$template_path = $dir_path . '/' . $file;
			$json_data     = file_get_contents($template_path);
			$arr           = json_decode($json_data, true);

			array_push(
				$results,
				array(
					'name'     => isset($arr['name']) ? $arr['name'] : 'Name not found',
					'preview'  => $arr['preview'],
					'props'    => $arr['props'],
					'category' => $arr['category'],
					'templateTypes' => $arr['templateTypes'],
					'id'       => str_replace('.json', '', $file),
					'updatedAt' => isset($arr['updatedAt']) ? $arr['updatedAt'] : time(),
				)
			);
		}

		return $results;
	}

	public function image_upload_rest_route()
	{
		register_rest_route(
			'labelbaker/v1',
			'/image-upload',
			array(
				'methods'             => 'POST',
				'permission_callback' => function () {
					return true;
				},
				'callback'            => array($this, 'image_upload_callback'),
			)
		);
	}

	// Define the REST API route callback function
	public function image_upload_callback($request)
	{
		$image_data = $request->get_param('image_data');
		return labelbaker_image_upload($image_data);
	}
}
