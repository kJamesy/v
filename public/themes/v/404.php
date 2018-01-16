<?php

$uri = untrailingslashit(urldecode_deep($_SERVER['REQUEST_URI']));
$uriArr = explode('/', $uri);
$s = $uri;

if ( $uriArr ) {
    $newS = '';
    foreach ( $uriArr as $segment ) {
        if ( strlen(trim($segment)) )
            $newS .= "$segment ";
    }

    if ( strlen(trim($newS)) )
        $s = trim($newS);
}

$s = str_replace(['-', '_'], ' ', $s);

$postsPerPage = -1;
$inputs = compact('s');
$search = new \Theme\Search404($inputs, $postsPerPage);
$results = $search->getResults();

get_header(); ?>
    <section class="banner onload-image-fade-in onload-content-fade-left style1 fullscreen orient-center content-align-center image-position-center vbanner" id="top">
        <div class="content">
            <h1>Page not found</h1>
<!--            <form action="--><?//= get_home_url(); ?><!--" class="form-inline mt-5">-->
<!--                <div class="form-group">-->
<!--                    <input type="hidden" name="search_type" value="general" />-->
<!--                    <input type="search" name="s" class="form-control" placeholder="Keywords" value="--><?//= $s; ?><!--">-->
<!--                </div>-->
<!--                <button class="btn btn-mpp-search">Search</button>-->
<!--            </form>--><?php
	        if ( array_key_exists('posts', $results) && $results['posts'] ) : ?>
                <h2 class="mt-5 mb-4">
		        <?= _x('The page you are looking for cannot be found. Below are some suggestions:', 'theme', 'mpp'); ?>
                </h2><?php
		        foreach ( $results['posts'] as $result ) :
			        $post_type = $result->post_type;
			        $menuPage = strtolower($post_type) == 'page' ? $result : \Theme\Misc::getRepeaterFieldValue(get_field('posts_parent_page', 'options'), $post_type);
			        $mpp_post = new \Theme\Post($result, $menuPage);
			        $root = $menuPage ? $mpp_post->get_root() : null; ?>

                    <div class="result p-1 pl-2 pr-2">
                        <a href="<?= get_permalink($result->ID); ?>"><?= $result->post_title; ?></a> &mdash; <?= get_the_date('d F Y', $result->ID); ?> / <?php
				        if ( $root ) : ?>
                            <a href="<?= get_permalink($root->ID); ?>"><?= $root->post_title; ?></a> <?php
				        else : ?>
					        <?= _x('File Upload', 'theme', 'mpp'); ?> <?php
				        endif; ?>
                    </div> <?php
		        endforeach;
		        if ( array_key_exists('pagination', $results) && $results['pagination'] ) : ?>
                    <div>
			        <?= $results['pagination']; ?>
                    </div><?php
		        endif;
	        else : ?>
                <h2>The page you are looking for could not be found.</h2><?php
	        endif; ?>
        </div>
    </section><?php
wp_reset_query();
get_footer();
