<?php

/**
 * Do what? You guessed it! Redirects!!
 */
function performRedirects()
{
    $protocol = $_SERVER['REQUEST_SCHEME'] . '://';
    $requestUrl = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $request = strtolower(urldecode(rtrim(preg_replace('/^www\./i', '', parse_url($requestUrl, PHP_URL_HOST)) . parse_url($requestUrl, PHP_URL_PATH), '/')));

    if ( $_SERVER['QUERY_STRING'] )
        $request .= '?' . strtolower($_SERVER['QUERY_STRING']);

	add_filter('acf/settings/current_language', 'acf_set_current_language', 100);
    $redirects = function_exists('get_field') ? get_field('page_redirects', 'options') : null;
	remove_filter('acf/settings/current_language', 'acf_set_current_language', 100);

    if ( $redirects && is_array($redirects) ) {
        $final_destination = '';
	    
        foreach ( $redirects as $redirect ) {

	        $redirectFrom = strtolower(urldecode(rtrim(preg_replace('/^www\./i', '', parse_url($redirect['url'], PHP_URL_HOST)) . parse_url($redirect['url'], PHP_URL_PATH), '/')));

	        if ( $fromQueryString = parse_url($redirect['url'], PHP_URL_QUERY) )
	        	$redirectFrom .= '?' . strtolower($fromQueryString);

            if ( $request === $redirectFrom ) {
                $final_destination = $redirect['destination'];
                break;
            }
        }

        if ( strlen($final_destination) && rtrim($final_destination,'/') !== $request ) {
            header ('HTTP/1.1 301 Moved Permanently');
            header ('Location: ' . $final_destination);
            exit();
        }
    }
}

add_action('init', 'performRedirects', 1);


/**
 * Set the ACF Language
 * @return mixed|null
 */
function acf_set_current_language()
{
	return acf_get_setting('default_language');
}