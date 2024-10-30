<?php

namespace LabelBaker;

class Cleanup
{
    use BaseTrait;

    public function init()
    {
        add_action('current_screen', [$this, 'get_plugin_screen']);
    }
    public function remove_admin_footer_text()
    {
        return '';
    }

    public function hide_notices()
    {
        $labelbaker_screens = ['toplevel_page_labelbaker'];
        if (in_array(get_current_screen()->id, $labelbaker_screens)) {
            remove_all_actions('user_admin_notices');
            remove_all_actions('admin_notices');
            add_filter('admin_footer_text', [$this, 'remove_admin_footer_text']);
        }
    }

    public function get_plugin_screen()
    {
        $current_screen = get_current_screen();

        if ($current_screen->id == 'toplevel_page_labelbaker') {
            // remove admin notice
            add_action('in_admin_header', [$this, 'hide_notices'], 99);
            add_action('admin_print_styles', [$this, 'clear_styles'], 100);
            add_action('admin_enqueue_scripts', [$this, 'clear_scripts'], 100);
        }
    }

    public function clear_styles()
    {
        global $wp_styles;
        $styles_to_keep = array("labelbaker-style", "labelbaker-cleanup-style", "gf-css","grapesjs-css", "admin-bar", "wp-auth-check", "plugin-installer-style", "colors");

        foreach ($wp_styles->queue as $handle) {

            if (in_array($handle, $styles_to_keep)) {
                continue;
            }
            wp_dequeue_style($handle);
            wp_deregister_style($handle);
        }
    }

    public function clear_scripts()
    {
        global $wp_scripts;

        $scripts_to_keep = array(
            'labelbaker-script',
            'labelbaker-cleanup-script',
            'wp-theme-plugin-editor',
            'common',
            'wp-auth-check',
            'monaco-editor-core',
            'xls',
            'jspdf',
            'utils',
            'media-editor',
            'media-audiovideo',
            'image-edit',
            'labelbaker-bgremover-script',
            'grapesjs',
            'grapesjs-forms'
        );
        foreach ($wp_scripts->queue as $handle) {

            if (in_array($handle, $scripts_to_keep)) {
                continue;
            }

            wp_dequeue_script($handle);
        }
    }
}
