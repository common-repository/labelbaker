<?php

namespace LabelBaker;

class Assets
{
    use BaseTrait;

    public function init()
    {
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts_and_styles']);
        add_filter('script_loader_tag', [$this, 'add_type_attribute'], 10, 3);
    }

    public function enqueue_scripts_and_styles($hook_suffix)
    {

        if ('toplevel_page_labelbaker' !== $hook_suffix) {
            return;
        }

        wp_enqueue_script('labelbaker-cleanup-script', LABELBAKER_ASSETS_URL . '/scripts/script.js', array('jquery'), LABELBAKER_VERSION, false);
        wp_enqueue_style('labelbaker-cleanup-style', LABELBAKER_ASSETS_URL . '/styles/style.css', array());


        wp_enqueue_script('xls',  LABELBAKER_ASSETS_URL .  '/vendor/js/xlsx.full.min.js', array(), LABELBAKER_VERSION, false);
        wp_enqueue_style('gf-css', LABELBAKER_ASSETS_URL .  '/vendor/css/gf.css', array(), LABELBAKER_VERSION);


        wp_enqueue_script('jspdf', LABELBAKER_ASSETS_URL .  '/vendor/js/jspdf.umd.min.js', array(), LABELBAKER_VERSION, false);


        $script_file = 'dist/index.d2b5948f.js';
        $style_file = 'dist/index.cfbf16fc.css';
        // $script_url = defined('LABELBAKER_DEV') ? 'http://localhost:5173/app/main.js' : LABELBAKER_ASSETS_URL . '/' . $script_file;
        $script_url = defined('LABELBAKER_DEV') ? 'http://localhost:5173/app/main.js' : LABELBAKER_ASSETS_URL . '/' . $script_file;

        $current_user = wp_get_current_user();

        $localized_data = array(
            'serverEndpoint' => get_rest_url(null, '/labelbaker/v1'),
            'shareURL' => site_url('/labelbaker-share'),
            'exportURL' => '',
            'emailSendingApi' => labelbaker_get_email_api(),
            'userEmail' => $current_user->user_email,
            'pluginUrl' => admin_url('/admin.php?page=labelbaker')
        );

        if (!did_action('wp_enqueue_media')) {
            wp_enqueue_media();
        }

        wp_enqueue_script('labelbaker-script', $script_url, array(), LABELBAKER_VERSION, false);

        wp_localize_script('labelbaker-script', 'labelbaker', $localized_data);
        if (!defined('LABELBAKER_DEV')) {
            wp_enqueue_style('labelbaker-style', LABELBAKER_ASSETS_URL . '/' . $style_file, array(), false);
        }
    }

    public function add_type_attribute($tag, $handle, $src)
    {
        // if not your script, do nothing and return original $tag
        if ('labelbaker-script' !== $handle) {
            return $tag;
        }
        // change the script tag by adding type="module" and return it.
        $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
        return $tag;
    }
}
