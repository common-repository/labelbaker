<?php

/**
 * Plugin Name: Labelbaker
 * Description: Make labels easily.
 * Plugin URI:  https://wpcox.com/labelbaker
 * Version:     1.1.0
 * Author:      wpcox
 * Author URI:  https://wpcox.com/
 * Text Domain: labelbaker
 * Domain Path: /languages
 */


use LabelBaker\BaseTrait;

defined('ABSPATH') || exit;
define('LABELBAKER_PLUGIN_FILE', __FILE__);

require_once plugin_dir_path(__FILE__) . '/bootstrap.php';

final class LabelBaker
{

	use BaseTrait;

	public function __construct()
	{
		define('LABELBAKER_VERSION', '1.1.0');
		define('LABELBAKER_TEMPLATE_DIR', 'labelbaker-templates');
		define('LABELBAKER_USER_DATA_DIR', 'labelbaker-user-data');
		define('LABELBAKER_DIR', plugin_dir_path(__FILE__));
		define('LABELBAKER_URL', plugin_dir_url(__FILE__));
		define('LABELBAKER_ASSETS_URL', LABELBAKER_URL . '/assets');
	}

	/**
	 * ---------------------------------
	 *  Main execution point where the
	 *       plugin will fire up
	 * ---------------------------------
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function init()
	{
		// Init REST APIs
		\LabelBaker\API::get_instance()->init();
		\LabelBaker\Featured_Image::get_instance()->init();
		if (is_admin()) {

			\LabelBaker\Assets::get_instance()->init();
			\LabelBaker\Menu::get_instance()->init();
			\LabelBaker\Cleanup::get_instance()->init();
		}

		add_action('init', array($this, 'i18n'));
	}

	public function i18n()
	{
		load_plugin_textdomain('labelbaker', false, dirname(plugin_basename(__FILE__)) . '/languages/');
	}
}

function labelbaker()
{
	LabelBaker::get_instance()->init();
}

add_action('plugins_loaded', 'labelbaker');
