<?php

namespace ImageSeoWP\Tags;

if (!defined('ABSPATH')) {
    exit;
}

class ProductTitle
{
    const NAME = 'product_title';

    public function getValue($params = null)
    {
        if (null === $params) {
            return '';
        }

        list($attachmentId) = $params;
        $id = imageseo_get_service('QueryImages')->getPostByAttachmentId($attachmentId);
        if (!$id) {
            return '';
        }

        $post = get_post($id);

        return $post->post_title;
    }
}
