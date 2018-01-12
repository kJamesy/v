<?php

/**
 * Change Wordpress Mail Sender Email
 * @param $original_email_address
 * @return string
 */
function mail_sender_email( $original_email_address ) {
    return 'website@vivianonano.com';
}

add_filter( 'wp_mail_from', 'mail_sender_email' );

/**
 * Change Wordpress Mail Sender Name
 * @param $original_email_from
 * @return string
 */
function mail_sender_name( $original_email_from ) {
    return 'Vivian Onano Website';
}
add_filter( 'wp_mail_from_name', 'mail_sender_name' );

/**
 * Allow Contributors to delete their own media.
 * This method actually just allows them to see only their own media
 * To delete, use the delete_posts capability (and with this, they can only delete what they see - i.e. their own)
 */
function attachments_wp_query_where( $where ){
    global $current_user;
    if( is_user_logged_in() ){
        if( isset( $_POST['action'] ) ){
            // media libary query
            if( $_POST['action'] == 'query-attachments' && in_array('site_contributor', (array) $current_user->roles) ){
                $where .= ' AND post_author=' . $current_user->data->ID;
            }
        }
    }
    return $where;
}
add_filter( 'posts_where', 'attachments_wp_query_where' );

/**
 * Add left join for including custom fields in searches
 * @param $join
 * @return string
 */
function cf_search_join( $join ) {
	global $wpdb;

	if ( is_search() )
		$join .=' LEFT JOIN '.$wpdb->postmeta. ' ON '. $wpdb->posts . '.ID = ' . $wpdb->postmeta . '.post_id ';

	return $join;
}
add_filter('posts_join', 'cf_search_join' );

/**
 * Modify the search query with posts_where whilst including custom fields in searches
 * @param $where
 * @return mixed
 */
function cf_search_where( $where ) {
	global $wpdb;

	if ( is_search() ) {
		$where = preg_replace(
			"/\(\s*".$wpdb->posts.".post_title\s+LIKE\s*(\'[^\']+\')\s*\)/",
			"(".$wpdb->posts.".post_title LIKE $1) OR (".$wpdb->postmeta.".meta_value LIKE $1)", $where );
	}

	return $where;
}
add_filter( 'posts_where', 'cf_search_where' );

/**
 * Prevent duplicates whilst including custom fields in searches
 * @param $where
 * @return string
 */
function cf_search_distinct( $where ) {
	global $wpdb;

	if ( is_search() ) {
		return "DISTINCT";
	}

	return $where;
}
add_filter( 'posts_distinct', 'cf_search_distinct' );


/**
 * Define the post types to include in general search
 * @param $query
 * @return mixed
 */
function search_post_types( $query ) {

    if ( $query->is_search && ! is_admin() ) {
        $is_general_search = ( array_key_exists('search_type', $_REQUEST) && $_REQUEST['search_type'] );

        if ( $is_general_search ) {
            $query->set('post_type', ['blog_posts', 'page', 'attachment']);
            $query->set('post_status', ['publish', 'inherit']);
        }
    }

    return $query;
}

add_filter( 'pre_get_posts', 'search_post_types' );