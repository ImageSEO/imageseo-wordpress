<?php

namespace ImageSeoWP\Services;

if (!defined('ABSPATH')) {
    exit;
}

use ImageSeoWP\Helpers\SocialMedia;

class GenerateImageSocial
{
    public function __construct()
    {
        $this->clientApiService = imageseo_get_service('ClientApi');
    }

    /**
     * @param string $filename
     * @param array  $data
     *
     * @example [
     *      "title" => "Post title",
     *      "media" => "open-graph"
     *      "layout" => "CARD_LEFT"
     *      "bgImgUrl" => "https://example.com/image.jpg"
     *      "bgColor" => "FFFFFF"
     *      "txtColor" => "000000"
     * ]
     */
    public function generate($filename, $data)
    {
        if (empty($filename) || empty($data)) {
            return;
        }

        if (!array_key_exists('media', $data)) {
            $data['media'] = SocialMedia::OPEN_GRAPH['name'];
        }

        if (apply_filters('imageseo_generate_social_mute_report_on_upload', true)) {
            imageseo_get_action('\ImageSeoWP\Actions\Admin\MediaLibrary')->muteOnUpload();
        }

        $image = $this->clientApiService->generateSocialMediaImage($data);

        $filenameWithExtension = $filename . '.jpg';
        $result = wp_upload_bits($filenameWithExtension, null, $image);

        $attachment = [
            'post_mime_type' => 'image/jpeg',
            'post_title'     => $filename,
            'post_content'   => '',
            'post_status'    => 'inherit',
            'guid'           => $result['url'],
        ];

        $attachmentId = wp_insert_attachment($attachment, $result['file']);

        require_once ABSPATH . 'wp-admin/includes/image.php';

        $attachmentData = wp_generate_attachment_metadata($attachmentId, $result['file']);

        $now = new \DateTime('now');
        wp_update_attachment_metadata($attachmentId, array_merge($attachmentData, ['is_social' => true, 'last_updated' => $now->getTimestamp()]));

        return [
            'file_infos'    => $result,
            'attachment_id' => $attachmentId,
        ];
    }
}
