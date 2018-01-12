<?php
/**
 ** Links Page Template
 *  Template Name: Page - Links Page
 */
global $post;

$bg_image = get_field('big_background_image');
$links = get_field('links');
$quick_link = get_field('quick_link');

get_header();

if ( have_posts() ) :
    while (have_posts()) : the_post(); ?>
        <section class="spotlight onload-image-fade-in onload-content-fade-right style1 image-position-center content-align-left orient-right">
            <div class="content">
                <h1><?php the_title(); ?></h1><?php
                the_content();

	            if ( $links ) : ?>
                    <p> <?php
                        foreach ( $links as $link ) : ?>
                            <i class="fas fa-external-link-alt"></i> <a href="<?= $link['url']; ?>" target="_blank"><?= $link['text']; ?></a><br /><?php
                        endforeach; ?>
                    </p> <?php
	            endif;
	            if ( $quick_link ) : ?>
                    <ul class="actions vertical">
                        <li><a href="<?= get_permalink($quick_link->ID); ?>" class="button big wide">&raquo; <?= $quick_link->post_title; ?></a></li>
                    </ul><?php
	            endif; ?>
            </div> <?php
            if ( $bg_image ) : ?>
                <div class="image">
                    <img src="<?= $bg_image; ?>" alt="<?php bloginfo('name'); ?>" />
                </div> <?php
            endif; ?>
        </section><?php
    endwhile;
else :
    get_template_part('template-parts/content', 'none');
endif;
get_footer(); ?>
