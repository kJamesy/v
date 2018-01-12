<?php

/**
 * Rearrange the menu
 * @param $menu_ord
 * @return array|bool
 */
function custom_menu_order($menu_ord) {
	if ( !$menu_ord )
	    return true;

	return [
		'index.php', // Dashboard
		'separator1',
		'edit.php?post_type=blog_posts',
        'separator2',
        'edit.php?post_type=page', // Pages
        'edit.php', // Posts
        'upload.php', // Media
        'edit-comments.php', // Comments
        'separator-last',
		'v-options-forms',
		'themes.php', // Appearance
		'plugins.php', // Plugins
		'users.php', // Users
		'profile.php', // Profile
		'tools.php', // Tools
		'options-general.php', // Settings
	];
}

add_filter('custom_menu_order', 'custom_menu_order'); // Activate custom_menu_order
add_filter('menu_order', 'custom_menu_order');

/**
 * Remove some menu items
 */
function remove_menu_items() {
	remove_menu_page( 'edit.php' );
	remove_menu_page( 'edit-comments.php' );
	remove_menu_page( 'tools.php' );
}

add_action( 'admin_init', 'remove_menu_items', 99 );

/**
 * Set default admin color scheme and disable picking of admin color scheme
 * @param $user_id
 */
function set_default_admin_color_scheme($user_id) {
	$args = array(
		'ID' => $user_id,
		'admin_color' => 'default'
	);
	wp_update_user( $args );
}

add_action('user_register', 'set_default_admin_color_scheme');
remove_action( 'admin_color_scheme_picker', 'admin_color_scheme_picker' );


/**
 * Remove Admin bar
 */
function remove_admin_bar() {
//    if ( ! current_user_can('administrator') && ! is_admin()) {
        show_admin_bar(false);
//    }
}
add_action('after_setup_theme', 'remove_admin_bar');

/**
 * Remove some stuff from the admin top menu
 */
function remove_admin_nodes() {
	global $wp_admin_bar;
	$wp_admin_bar->remove_menu('wp-logo');
	$wp_admin_bar->remove_menu('new-content');
	$wp_admin_bar->remove_menu('comments');
	$wp_admin_bar->remove_menu('archive');
	$wp_admin_bar->remove_menu('view');
}

add_action('wp_before_admin_bar_render', 'remove_admin_nodes', 0);


/**
 * Add some admin toolbar items
 */
function add_admin_nodes() {
    global $wp_admin_bar;
    $args = [
        'id' => 'kjamesy_support',
        'title' => "Email Support",
        'parent' => "my-account",
        'href' => 'mailto:mr@kjamesy.london&subject=Website Support',
    ];

    $wp_admin_bar->add_node($args);
}

add_action('wp_before_admin_bar_render', 'add_admin_nodes', 0);


/**
 * Change some admin toolbar items
 */
function change_admin_nodes($wp_admin_bar) {
	function replace_first($find, $replace, $subject) {
		return implode($replace, explode($find, $subject, 2));
	}

	$account = $wp_admin_bar->get_node('my-account');
	$old_salute = $account->title;
	$new_title = str_replace( 'How are you, ', '', $old_salute );
	$new_title = str_replace( 'Howdy, ', '', $new_title );
	$new_title = replace_first('?', '', $new_title);

	$wp_admin_bar->add_node( [
		'id' => 'my-account',
		'title' => $new_title,
	]);

	$wp_admin_bar->add_node( [
		'id' => 'site-name',
		'title' => "Vivian Onano",
	]);
}

add_action('admin_bar_menu', 'change_admin_nodes', 999);


/**
 * Hide update message for non admins; Remove Help menu; Remove Screen options for Contributors
 */
function hide_update_msg_non_admins(){
    if ( ! current_user_can( 'administrator' ) ) {
        echo '<style>.update-nag, .updated, .error { display: none; }</style>';
    }
    $screen = get_current_screen();
    $screen->remove_help_tabs();


    function remove_screen_options_tab() {
        return ! current_user_can('site_contributor' );
    }

    add_filter('screen_options_show_screen', 'remove_screen_options_tab');
}
add_action( 'admin_head', 'hide_update_msg_non_admins');

/**
 * Remove custom taxonomy meta boxes so they can solely be handled by ACF
 */
function remove_custom_tax_meta_boxes() {
    remove_meta_box('media_typesdiv', 'mpp_media','normal');
    remove_meta_box('resource_typesdiv', 'resources','normal');
    remove_meta_box('tagsdiv-diseases', 'licences','normal');
    remove_meta_box('tagsdiv-diseases', 'resources','normal');
}
//add_action('admin_menu', 'remove_custom_tax_meta_boxes');