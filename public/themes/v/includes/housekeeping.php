<?php

/**
 * Autoload, baby!
 */
spl_autoload_register(function ($class_name) {
    $file = get_stylesheet_directory() . '/classes/' . $class_name . '.php';
    $file = str_replace('\\', '/', $file);
    if( is_file($file) && ! class_exists($class_name) )
        include $file;
});

/**
 * Some setup housekeeping
 */
if ( ! function_exists( 'our_theme_setup' ) ) {
    function our_theme_setup() {
        add_theme_support('automatic-feed-links');
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        register_nav_menus(['primary' => esc_html__('Primary', '_s')]);
    }
}
add_action( 'after_setup_theme', 'our_theme_setup' );

/**
 * Allow Custom post types in feeds
 * @param $qv
 * @return mixed
 */
function our_theme_feed_request($qv) {
    if (isset($qv['feed']))
        $qv['post_type'] = get_post_types();
    return $qv;
}
add_filter('request', 'our_theme_feed_request');

/**
 * Show current template to super admins
 */
function our_theme_show_template() {
    if( current_user_can('administrator') ){
        global $template;
        print_r($template);
    }
}
add_action('wp_footer', 'our_theme_show_template');

/**
 * Google Recaptcha Site key
 * @return string
 */
function our_theme_get_google_recaptcha_site_key() {
    return '6LcIG0MUAAAAAO7dbxgtB7Ki5oa1ZS8vOJJDNZKq';
}

/**
 * Google Recaptcha secret key
 * @return string
 */
function our_theme_get_google_recaptcha_secret_key() {
    return '6LcIG0MUAAAAAFTjNEXFDGhF-upQ4gehkNipPLgw';
}