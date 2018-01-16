<?php
/**
 ** Home Page Template
 *  Template Name: Page - Home Page
 */
global $post;

$bg_image = get_field('big_background_image');
$bg_images = get_field('big_background_images');

$links = get_pages(['sort_column' => 'menu_order', 'exclude' => [$post->ID]]);
$link_count = count($links);
$last_link_index = $link_count - 1;
$quick_link = null; //$links[0];

get_header();

if ( have_posts() ) :
    while (have_posts()) : the_post(); ?>
        <section class="banner onload-image-fade-in onload-content-fade-left style1 fullscreen orient-center content-align-center image-position-center vbanner" id="top">
            <div class="content">
                <h1><?php bloginfo('name'); ?></h1>
                <p class="major"><?php bloginfo('description'); ?></p><?php
                the_content();
                if ( $quick_link ) : ?>
                    <ul class="actions vertical">
                        <li><a href="<?= get_permalink($quick_link->ID); ?>" class="button big wide">&raquo; <?= $quick_link->post_title; ?></a></li>
                    </ul> <?php
                endif; ?>
            </div> <?php
            if ( $bg_image ) : ?>
                <div class="image" id="home-slideshow"> <?php
	                if ( $bg_images ) :
                        foreach ( $bg_images as $key => $a_bg_image ) : ?>
                            <div>
                                <img src="<?= $a_bg_image['image']; ?>" alt="<?php bloginfo('name'); ?>" class="image-slideshow-item" /> <?php
                                if ( ($key + 1) <= $link_count ) : ?>
                                    <a href="<?= get_permalink($links[$key]->ID); ?>" class="quicklink-button button"><?= $links[$key]->post_title; ?></a> <?php
                                else : ?>
	                                <a href="<?= get_permalink($links[$last_link_index]->ID); ?>" class="quicklink-button button"><?= $links[$last_link_index]->post_title; ?></a> <?php
                                endif; ?>
                            </div>
                            <?php
                        endforeach;
                    else : ?>
                        <img src="<?= $bg_image; ?>" alt="<?php bloginfo('name'); ?>" /> <?php
                    endif; ?>
                </div> <?php
            endif; ?>
        </section><?php
    endwhile;
else :
    get_template_part('template-parts/content', 'none');
endif;
get_footer(); ?>
