<?php

/**
 * Load the Login screen stylesheet, remove login shake
 */
function custom_login_screen_css() {
    remove_action('login_head', 'wp_shake_js', 12);
    echo '<link rel="stylesheet" type="text/css" href="' . mix('css/admin.css') . '" />';
}
add_action('login_head', 'custom_login_screen_css');

/**
 * Link for the Login Logo
 * @return string
 */
function custom_login_logo_url() {
    return get_bloginfo( 'url' );
}
add_filter('login_headerurl', 'custom_login_logo_url');

/**
 * Title of the Login Logo
 * @return string
 */
function custom_login_logo_url_title() {
    return '';
}
add_filter('login_headertitle', 'custom_login_logo_url_title');

/**
 * Custom login error message
 * @return string
 */
function custom_custom_error_message($error) {
    return ( strpos(strtolower($error), 'error') ) ? _x('The credentials you supplied are invalid', 'theme') : $error;
}
add_filter('login_errors', 'custom_custom_error_message');

/**
 * Define custom login messages
 * @param $message
 * @return string
 */
function custom_login_message($message) {
    if ( strpos(strtolower($message), 'register') )
        $message = '<p class="message">' . _x('Register for an Account', 'plugin', 'custom') . '</p>';
    elseif ( strpos(strtolower($message), 'enter your username') )
        $message = '<p class="message">' . _x('Reset your Password', 'plugin', 'custom') . '</p>';
    elseif ( ! strlen($message) )
        $message = '<p class="message">' . _x('Login to Proceed', 'plugin', 'custom') . '</p>';
    return $message;
}
add_filter('login_message', 'custom_login_message');


/**
 * Load the admin screen stylesheet
 */
function custom_admin_screen_css() {
    echo '<link rel="stylesheet" type="text/css" href="' . mix('css/admin.css') . '" />';
}
add_action('admin_head', 'custom_admin_screen_css');

/**
 * Remove some dashboard widgets
 */
function remove_dashboard_meta() {
    remove_meta_box( 'dashboard_incoming_links', 'dashboard', 'normal' );
    remove_meta_box( 'dashboard_plugins', 'dashboard', 'normal' );
    remove_meta_box( 'dashboard_primary', 'dashboard', 'normal' ); //Wordpress News
    remove_meta_box( 'dashboard_secondary', 'dashboard', 'normal' );
    remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' ); //Quick Draft
    remove_meta_box( 'dashboard_recent_drafts', 'dashboard', 'side' );
    remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' ); //Recent Comments
    remove_meta_box( 'dashboard_right_now', 'dashboard', 'normal' ); //At A Glance
    remove_meta_box( 'dashboard_activity', 'dashboard', 'normal'); //Activity
}
add_action( 'admin_init', 'remove_dashboard_meta' );

/**
 * Add custom dashboard widget
 */
function add_dashboard_widgets() {
    wp_add_dashboard_widget(
        'salute-dashboard-widget', //
        '<h2>Oh, hi!</h2>',
        'salute_dashboard_widget'
    );
}
add_action( 'wp_dashboard_setup', 'add_dashboard_widgets' );

/**
 * Content of the new widget
 */
function salute_dashboard_widget() {
    $name = wp_get_current_user() ? wp_get_current_user()->data->display_name : 'person';
    echo "<h3>Good to see you again, $name, now shall we...?</h3>";
}

/**
 * Footer credit
 */
function acw_credit () {
    echo '<span id="footer-thankyou">Developed by <a href="https://kjamesy.london" target="_blank">@kJamesy</a></span>';
}
add_filter( 'admin_footer_text', 'acw_credit' );