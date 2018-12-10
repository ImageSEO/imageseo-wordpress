<?php

namespace SeoImageWP\Actions\Admin;

if (! defined('ABSPATH')) {
    exit;
}

use SeoImageWP\Helpers\TabsAdminSeoImage;

class Enqueue
{


    /**
     * @since 2.0
     * @return void
     */
    public function hooks()
    {
        add_action('admin_enqueue_scripts', [ $this, 'adminEnqueueScripts' ]);
    }



    /**
     * Register CSS and JS
     *
     * @see admin_enqueue_scripts
     * @param string $page
     * @return void
     */
    public function adminEnqueueScripts($page)
    {
        if (! in_array($page, [ 'toplevel_page_' . TabsAdminSeoImage::SETTINGS, 'upload.php', 'post.php' ], true)) {
            return;
        }

        wp_enqueue_style('seoimage-admin-css', SEOIMAGE_URL_DIST . '/css/admin-css.css', [], SEOIMAGE_VERSION);

        if (in_array($page, [ 'upload.php' ], true)) {
            wp_enqueue_script('seoimage-admin-js', SEOIMAGE_URL_DIST . '/admin-js.js', ['jquery']);
        }
    }
}
