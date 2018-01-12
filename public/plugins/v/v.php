<?php
/**
 * Plugin Name: V 2018
 * Description: This plugin is handcrafted for the Vivian Onano Website 2018. It will add custom post types, custom roles and custom capabilities. Works with Custom Fields plugin
 * Version: 1
 * Author: James Ilaki
 * Author URI: https://kjamesy.london/
 **/

function custom_post_types()
{
    /**
     * Blog Posts
     */
    $blog_posts_labels = [
        'name' => _x('Blog Posts', 'plugin', 'v'),
        'singular_name' => _x('Blog Post', 'plugin', 'v'),
        'all_items' => _x('All Blog Posts', 'plugin', 'v'),
        'add_new' => _x('Add New', 'plugin', 'v'),
        'add_new_item' => _x('Add New Blog Post', 'plugin', 'v'),
        'edit_item' => _x('Edit Blog Post', 'plugin', 'v'),
        'new_item' => _x('New Blog Post', 'plugin', 'v'),
        'view_item' => _x('View Blog Posts', 'plugin', 'v'),
        'search_items' => _x('Search Blog Posts', 'plugin', 'v'),
        'not_found' => _x('No Blog Posts found', 'plugin', 'v'),
        'not_found_in_trash' => _x('No Blog Posts found in Trash', 'plugin', 'v'),
        'parent_item_colon' => _x('Parent Blog Post:', 'plugin', 'v'),
        'menu_name' => _x('Blog Posts', 'plugin', 'v'),
    ];
    $blog_posts_args = [
        'labels' => $blog_posts_labels,
        'public' => true,
        'has_archive' => false,
        'rewrite' => ['slug' => 'blog-post'],
        'menu_position' => 20,
        'menu_icon' => 'dashicons-media-text',
        'capability_type' => "v_post",
        'map_meta_cap' => true,
        'supports' => ['title', 'editor', 'author', 'thumbnail', 'revisions'],
    ];

    register_post_type('blog_posts', $blog_posts_args);

}

add_action('init', 'custom_post_types', 900);

/**
 * Custom Roles
 */
function custom_roles()
{
	/**
	 * Add Admin Role
	 */
	$capabilities = [
		'read' => true,
		'edit_posts' => true,
		'delete_posts' => true,
		'publish_posts' => true,
		'upload_files' => true,
	];

	add_role('site_admin', 'Site Admin', $capabilities);

	/**
	* Add Contributor Role
	*/
	$capabilities = [
        'read' => true,
        'edit_posts' => false,
        'delete_posts' => true, //Useful for media - See Miscellaneous for deleting media
        'publish_posts' => false,
        'upload_files' => true,
	];

	add_role('site_contributor', 'Site Contributor', $capabilities);

	/**
	 * Remove the inbuilt roles that won't be used
	 */
	remove_role('subscriber');
	remove_role('author');
	remove_role('contributor');
	remove_role('editor');
}

add_action('init', 'custom_roles', 999);

/**
 * Custom Capabilities
 */
function add_admin_capabilities()
{

	$roles = [
		'administrator'
	];

	foreach ($roles as $the_role) {
		$role = get_role($the_role);

		$role->add_cap('read_v_posts');
		$role->add_cap('read_private_v_posts');
		$role->add_cap('edit_v_posts');
		$role->add_cap('edit_others_v_posts');
		$role->add_cap('edit_private_v_posts');
		$role->add_cap('edit_published_v_posts');
		$role->add_cap('publish_v_posts');
		$role->add_cap('delete_v_posts');
		$role->add_cap('delete_others_v_posts');
		$role->add_cap('delete_private_v_posts');
		$role->add_cap('delete_published_v_posts');
	}

	$roles = [
		'site_admin'
	];

    foreach ($roles as $val) {
        $role = get_role($val);
        $role->add_cap('read');
        $role->add_cap('read_private_pages');
        $role->add_cap('edit_pages');
        $role->add_cap('edit_others_pages');
        $role->add_cap('edit_published_pages');
        $role->add_cap('publish_pages');
        $role->add_cap('delete_pages'); //Ok allow them to delete pages
        $role->add_cap('delete_private_pages'); //Delete private pages
        $role->add_cap('delete_published_pages'); //Delete published pages
        $role->add_cap('delete_others_pages'); //Delete other people's pages

        $role->add_cap('read_v_posts');
        $role->add_cap('read_private_v_posts');
        $role->add_cap('edit_v_posts');
        $role->add_cap('edit_others_v_posts');
        $role->add_cap('edit_private_v_posts');
        $role->add_cap('edit_published_v_posts');
        $role->add_cap('publish_v_posts');
        $role->add_cap('delete_v_posts');
        $role->add_cap('delete_others_v_posts');
        $role->add_cap('delete_private_v_posts');
        $role->add_cap('delete_published_v_posts');

        $role->add_cap('edit_users');
        $role->add_cap('list_users');
        $role->add_cap('promote_users');
        $role->add_cap('create_users');
        $role->add_cap('add_users');
        $role->add_cap('delete_users');

	    /**
	     * Fix Wordpress bug
	     */
	    $role->add_cap('level_1');

        /**
         * For Media
         */
        $role->add_cap('edit_others_posts');
        $role->add_cap('delete_others_posts');
    }

	$roles = [
		'site_contributor',
	];

	foreach ($roles as $the_role) {
        $role = get_role($the_role);

        $role->add_cap('read_v_posts');
        $role->add_cap('edit_v_posts');
        $role->add_cap('edit_others_v_posts');
        $role->add_cap('edit_published_v_posts');
        $role->add_cap('delete_v_posts');
        $role->add_cap('delete_published_v_posts');

        $role->add_cap('read');
        $role->add_cap('edit_pages');
        $role->add_cap('edit_others_pages');
        $role->add_cap('edit_published_pages');
        $role->add_cap('delete_pages'); //Ok allow them to delete pages
        $role->add_cap('delete_published_pages'); //Delete published pages

		/**
		 * Fix Wordpress bug
		 */
		$role->add_cap('level_1');
	}
}

add_action('init', 'add_admin_capabilities', 999);

/**
 * Now handle all the housekeeping on Activation
 */
function do_housekeeping() {
	flush_rewrite_rules();
}

register_activation_hook(__FILE__, 'do_housekeeping');

/*
 * Now reverse the housekeeping on Deactivation
 */
function undo_housekeeping() {
	$roles = ['administrator', 'site_admin', 'site_contributor'];

	foreach( $roles as $val ) {
		$role = get_role($val);
		foreach ($role->capabilities as $cap => $bool) {
			if (0 === strpos($cap, 'v_'))
				$role->remove_cap($cap);
		}
	}

	flush_rewrite_rules();
}

register_deactivation_hook(__FILE__, 'undo_housekeeping');

include_once (__DIR__ . '/backend-appearance.php');
include_once (__DIR__ . '/user-capabilities.php');
include_once (__DIR__.'/miscellaneous-functions.php');
include_once (__DIR__.'/options-screen.php');
include_once (__DIR__.'/redirects.php');
include_once (__DIR__.'/custom-tax.php');