<?php

if ( function_exists('acf_add_options_page') ) {
    acf_add_options_page([
        'page_title' => 'V Options',
        'menu_slug' => 'v-options',
        'capability' => 'publish_v_posts',
        'parent_slug' => '',
        'autoload' => true,
        'icon_url' => false,
    ]);
}
if ( function_exists('acf_add_options_sub_page') ) {
    acf_add_options_sub_page([
        'page_title' => 'Forms',
        'menu_slug' => 'v-options-forms',
        'parent_slug' => 'v-options',
        'capability' => 'publish_v_posts',
        'autoload' => true,
        'icon_url' => false,
    ]);

    acf_add_options_sub_page([
        'page_title' 	=> 'Site Links',
        'menu_slug' 	=> 'v-options-site-links',
        'parent_slug'   => 'v-options',
        'capability'	=> 'publish_v_posts',
        'autoload'      => true,
        'icon_url'      => false,
    ]);

    acf_add_options_sub_page([
        'page_title' 	=> 'Redirects',
        'menu_slug' 	=> 'v-redirects',
        'parent_slug'   => 'v-options',
        'capability'	=> 'publish_v_posts',
        'autoload'      => true,
        'icon_url'      => false,
    ]);
}
