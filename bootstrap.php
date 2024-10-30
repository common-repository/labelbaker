<?php
defined('ABSPATH') || exit;

class LabelBaker_Bootstrap
{
    private static $instance;

    public static function get_instance()
    {
        if (!self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }

    private $required_files = [
        "helper", "trait", "assets",
        "api", "cleanup", "menu",
        "banner", "popup", "woo", "featured-image"

    ];

    public function __construct()
    {
        $this->init()->import_core();
    }

    public function init()
    {
        add_action('init', [$this, 'create_user_data_folder']);
        add_action('activated_plugin', [$this, 'activation_redirect']);
        return $this;
    }

    public function activation_redirect($plugin)
    {
        if ($plugin == plugin_basename(LABELBAKER_PLUGIN_FILE)) {
            $admin_role = get_role("administrator");
            $admin_role->add_cap('labelbaker_user', true);
            exit(wp_redirect(admin_url('admin.php?page=labelbaker')));
        }
    }



    public function create_user_data_folder()
    {
        $user_path = labelbaker_get_templates_dir();
        $template_path = labelbaker_get_templates_dir();
        wp_mkdir_p($user_path);
        wp_mkdir_p($template_path);
    }


    private function import_core()
    {
        foreach ($this->required_files as $cf) {
            $required_file = plugin_dir_path(__FILE__) . '//includes/' . $cf . '.php';
            if (file_exists($required_file)) {
                require_once $required_file;
            }
        }

        return $this;
    }
}

global $label_baker;
$label_baker = LabelBaker_Bootstrap::get_instance();
