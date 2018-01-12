<?php

namespace Theme;

use Helpers\Str;

class Misc
{
    /**
     * @param $fieldArr
     * @param $key
     * @return null|object
     */
    public static function getRepeaterFieldValue($fieldArr, $key)
    {
        $value = null;

        if ( is_array($fieldArr) ) {
            if ( array_key_exists($key, $fieldArr) )
                $value = $fieldArr[$key];
            else {
                foreach ( $fieldArr as $field ) {
                    if ( is_array($field) && array_key_exists($key, $field) ) {
                        $value = $field[$key];
                        break;
                    }
                }
            }

        }
        return $value;
    }

    /**
     * Compute page summary
     * @param $content
     * @param $charsNum
     * @return string
     */
    public static function computeSummary($content, $charsNum)
    {
        return Str::limit(wp_strip_all_tags($content), $charsNum);
    }
    
    /**
     * Get Root page Id
     * @param $post
     * @return mixed
     */
    public static function getRootPageId($post)
    {
        $rootPageId = $post ? $post->ID : null;

        if ( $post && $post->post_parent ) {
            $ancestors = static::getPostAncestors($post->ID);
            $rootPageId = $ancestors[count($ancestors) - 1];
        }

        return $rootPageId;
    }


    /**
     * Get array of post ancestor Ids
     * @param $postId
     * @return array
     */
    public static function getPostAncestors($postId)
    {
        return get_post_ancestors($postId);
    }

    /**
     * Get the page a given post belongs to
     * @param $post
     * @return null|object
     */
    public static function getMenuPage($post)
    {
        if ( ! $post )
            return null;
        if ( $post->post_type == 'page' )
            return $post;
        else
            return static::getRepeaterFieldValue(get_field('posts_parent_page', 'options'), $post->post_type) ?: $post;
    }

    /**
     * Get default featured image url
     * @return string
     */
    public static function getDefaultFeaturedImageUrl()
    {
        return get_stylesheet_directory_uri() . "/assets/images/media-default-dark.jpg";
    }

    /**
     * Get default featured image url for video
     * @return string
     */
    public static function getVideoDefaultFeaturedImageUrl()
    {
        return get_stylesheet_directory_uri() . "/assets/images/video-default.jpg";
    }

}