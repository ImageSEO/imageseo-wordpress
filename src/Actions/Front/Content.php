<?php

namespace ImageSeoWP\Actions\Front;

if (! defined('ABSPATH')) {
    exit;
}

class Content
{
    public function __construct()
    {
        $this->reportImageServices = imageseo_get_service('ReportImage');
        $this->optionServices = imageseo_get_service('Option');
        $this->pinterestServices = imageseo_get_service('Pinterest');
    }

    /**
     * @return void
     */
    public function hooks()
    {
        if (!imageseo_allowed()) {
            return;
        }

        if (! apply_filters('imageseo_active_alt_rewrite', true)) {
            return;
        }

        add_filter('the_content', [ $this, 'contentImagesAttribute' ], 1);
        add_filter('wp_get_attachment_image_attributes', [$this, 'postThumbnailAttributes'], 10, 2);
    }

    /**
     *
     * @param string $content
     * @param int $attachmentId
     * @return string
     */
    protected function updatePinterestContent($content, $attachmentId)
    {
        $pinterest = $this->pinterestServices->getDataPinterestByAttachmentId($attachmentId);

        $strDataPinterest = '';
        foreach ($pinterest as $key => $metaPinterest) {
            if (empty($metaPinterest)) {
                continue;
            }

            $strDataPinterest .= sprintf("%s='%s' ", $key, esc_attr($metaPinterest));
        }

        if (!empty($strDataPinterest)) {
            $content = str_replace('<img', '<img ' . $strDataPinterest, $content);
        }

        return $content;
    }

    /**
     *
     * @param string $content
     * @param int $attachmentId
     * @return string
     */
    protected function updateAltContent($content, $attachmentId)
    {
        $altSave = $this->reportImageServices->getAlt($attachmentId);

        if (!empty($altSave)) {
            $content = str_replace('alt=""', 'alt="' . $altSave . '"', $content);
        }

        return $content;
    }

    /**
     * @param string $contentFilter
     * @return string
     */
    public function contentImagesAttribute($contentFilter)
    {
        $regex = "#<!-- wp:image([^\>]+?)?id\":(.*?)} -->([\s\S]*)<!-- \/wp:image#mU";
        preg_match_all($regex, $contentFilter, $matches);

        if (empty($matches[0])) {
            return $contentFilter;
        }

        $ids = $matches[2];
        $contents = $matches[3];

        $regexImg = "#<img([^\>]+?)?alt=(\"|\')([\s\S]*)(\"|\')([^\>]+?)?>#U";

        foreach ($ids as $key => $id) {
            preg_match_all($regexImg, $contents[$key], $matches);
            $alt = $matches[3][0];

            $contentMatch = $matches[0][0];

            $contentReplace = $this->updatePinterestContent($contentMatch, $id);
            $contentReplace = $this->updateAltContent($contentReplace, $id);

            if ($contentMatch !== $contentReplace) {
                $contentFilter = str_replace($contentMatch, $contentReplace, $contentFilter);
            }
        }

        return apply_filters('imageseo_the_content_alt', $contentFilter);
    }

    /**
     *
     * @param array $attrs
     * @param object $attachment
     * @return array
     */
    public function postThumbnailAttributes($attrs, $attachment)
    {
        $pinterest = $this->pinterestServices->getDataPinterestByAttachmentId($attachment->ID);
        $alt       = $this->reportImageServices->getAlt($attachment->ID);

        foreach ($pinterest as $key => $metaPinterest) {
            if (empty($metaPinterest)) {
                continue;
            }

            $attrs[$key] = $metaPinterest;
        }

        if (! array_key_exists('alt', $attrs) && empty($attrs['alt'])) {
            $attrs['alt'] = $alt;
        }

        return $attrs;
    }
}
