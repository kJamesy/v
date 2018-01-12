<?php

/**
 * Enqueue scripts and styles.
 */
function mpp_styles_and_scripts() {
    wp_enqueue_script( 'gp-recaptcha', 'https://www.google.com/recaptcha/api.js', [], '20180110', false);
}

//add_action( 'wp_enqueue_scripts', 'mpp_styles_and_scripts' );


/**
 * General Includes
 */
if ( is_file(__DIR__ . '/includes/housekeeping.php') )
    include( __DIR__ . '/includes/housekeeping.php' );
if ( is_file(__DIR__ . '/includes/shortcodes.php') )
    include( __DIR__ . '/includes/shortcodes.php' );
if ( is_file(__DIR__ . '/includes/utility-functions.php') )
    include( __DIR__ . '/includes/utility-functions.php' );
if ( is_file(__DIR__ . '/includes/admin-functions.php') )
    include( __DIR__ . '/includes/admin-functions.php' );
