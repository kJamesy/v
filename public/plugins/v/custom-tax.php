<?php

/**
 * Countries
 */
function create_countries_taxonomy() {
    $countries_labels = [
        'name'                           => _x('Countries', 'plugin', 'mpp'),
        'singular_name'                  => _x('Country', 'plugin', 'mpp'),
        'search_items'                   => _x('Search Countries', 'plugin', 'mpp'),
        'all_items'                      => _x('All Countries', 'plugin', 'mpp'),
        'edit_item'                      => _x('Edit Country', 'plugin', 'mpp'),
        'update_item'                    => _x('Update Country', 'plugin', 'mpp'),
        'add_new_item'                   => _x('Add New Country', 'plugin', 'mpp'),
        'new_item_name'                  => _x('New Country', 'plugin', 'mpp'),
        'menu_name'                      => _x('Countries', 'plugin', 'mpp'),
        'view_item'                      => _x('View Country', 'plugin', 'mpp'),
        'popular_items'                  => _x('Popular Countries', 'plugin', 'mpp'),
        'separate_items_with_commas'     => _x('Separate countries with commas', 'plugin', 'mpp'),
        'add_or_remove_items'            => _x('Add or remove countries', 'plugin', 'mpp'),
        'choose_from_most_used'          => _x('Choose from the most used countries', 'plugin', 'mpp'),
        'parent_item'                    => _x('Parent Country', 'plugin', 'mpp'),
        'not_found'                      => _x('No Countries found', 'plugin', 'mpp'),
    ];
    $capabilities = [
        'manage_terms' => 'edit_mpp_posts',
        'edit_terms'   => 'edit_mpp_posts',
        'delete_terms' => 'delete_mpp_posts',
        'assign_terms' => 'edit_mpp_posts',
    ];
    register_taxonomy(
        'countries',
        ['licences'],
        [
            'label' => _x('Countries', 'plugin', 'mpp'),
            'rewrite' => ['slug' => 'countries'],
            'hierarchical' => false,
            'labels' => $countries_labels,
            'capabilities' => $capabilities,
        ]
    );
}
//add_action( 'init', 'create_countries_taxonomy' );
