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
    <div id="content-section" class="pb-lg-3">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-11 push-md-1">
                    <h1 class="page-title text-uppercase mt-5 pt-5">
                        <?= _x('Page not found', 'theme', 'mpp'); ?>
                    </h1>
                </div>
            </div>
        </div>
    </div>
    </div> </div> <!-- #custom-section (started in header) -->
    <div id="error404-content-section">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-11 push-md-1">
                    <form action="<?= get_home_url(); ?>" class="form-inline mt-5">
                        <div class="form-group">
                            <input type="hidden" name="search_type" value="general" />
                            <input type="search" name="s" class="form-control" placeholder="<?= _x('Keywords', 'theme', 'mpp'); ?>" value="<?= $s; ?>">
                        </div>
                        <button class="btn btn-mpp-search"><?= _x('Search', 'theme', 'mpp'); ?></button>
                    </form><?php
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
                            <div class="mt-5 mb-5">
                                <?= $results['pagination']; ?>
                            </div><?php
                        endif;
                    else : ?>
                        <h2 class="mt-5">
                            <?= _x('The page you are looking for cannot be found. Please try searching for it.', 'theme', 'mpp'); ?>
                        </h2><?php
                    endif; ?>
                </div>
            </div>
        </div>
    </div><?php
wp_reset_query();
get_footer();
