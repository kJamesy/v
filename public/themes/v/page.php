<?php

global $post;

$bg_image = get_field('big_background_image');
$quick_link = get_field('quick_link');

get_header();

if ( have_posts() ) :
	while (have_posts()) : the_post(); ?>
        <section class="banner onload-image-fade-in onload-content-fade-left style2 fullscreen orient-center content-align-center image-position-center vbanner" id="top">
        <div class="content">
            <h1><?php the_title(); ?></h1><?php
			the_content();

			if ( $quick_link ) : ?>
                <ul class="actions vertical">
                    <li><a href="<?= get_permalink($quick_link->ID); ?>" class="button big wide">&raquo; <?= $quick_link->post_title; ?></a></li>
                </ul> <?php
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
