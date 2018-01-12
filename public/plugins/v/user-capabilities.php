<?php

/**
 * Class ISA_User_Caps
 * Prevent non admins from deleting, editing, or creating an administrator
 */

class ISA_User_Caps {

	public function __construct(){
		add_filter( 'editable_roles', array(&$this, 'editable_roles'));
		add_filter( 'map_meta_cap', array(&$this, 'map_meta_cap'),10,4);
	}

	// Remove 'Administrator' from the list of roles if the current user is not an admin
	function editable_roles( $roles ){
		if( isset( $roles['administrator'] ) && ! current_user_can('administrator') ){
			unset( $roles['administrator']);
		}
		return $roles;
	}

	// If someone is trying to edit or delete an
	// admin and that user isn't an admin, don't allow it
	function map_meta_cap( $caps, $cap, $user_id, $args ) {
		switch( $cap ){
			case 'edit_user':
			case 'remove_user':
			case 'promote_user':
				if( isset($args[0]) && $args[0] == $user_id )
					break;
				elseif( !isset($args[0]) )
					$caps[] = 'do_not_allow';
				$other = new WP_User( absint($args[0]) );
				if( $other->has_cap( 'administrator' ) ){
					if( ! current_user_can('administrator') ){
						$caps[] = 'do_not_allow';
					}
				}
				break;
			case 'delete_user':
			case 'delete_users':
				if( !isset($args[0]) )
					break;
				$other = new WP_User( absint($args[0]) );
				if( $other->has_cap( 'administrator' ) ){
					if( ! current_user_can('administrator') ){
						$caps[] = 'do_not_allow';
					}
				}
				break;
			default:
				break;
		}
		return $caps;
	}

}

$isa_user_caps = new ISA_User_Caps();


/**
 * Hide admin from user list
 * @param $user_search
 */
function isa_pre_user_query($user_search) {
	$user = wp_get_current_user();
	if ( ! current_user_can('administrator') ) {
		global $wpdb;

        $user_search->query_where = str_replace('WHERE 1=1',
                "INNER JOIN {$wpdb->usermeta} meta ON meta.user_id = {$wpdb->users}.ID 
                WHERE meta.meta_key = '{$wpdb->prefix}capabilities' AND meta.meta_value NOT LIKE '%administrator%'",
                $user_search->query_where);
	}
}

add_action('pre_user_query','isa_pre_user_query');


/**
 * Now hide the count
 */
function hide_user_count(){
	if ( ! current_user_can('administrator') ) { ?>
		<style>
			li.administrator { display: none; }
		</style> <?php
	}
}

add_action('admin_head','hide_user_count');