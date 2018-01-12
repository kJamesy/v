<?php
/**
 ** Gallery Page Template
 *  Template Name: Page - Gallery Page
 */
global $post;

$gallery = get_field('gallery');
$quick_link = get_field('quick_link');

get_header();

if ( have_posts() ) :
    while (have_posts()) : the_post(); ?>
        <section class="wrapper style1 align-center">
            <div class="inner">
                <h1><?php bloginfo('name'); ?> <?php the_title(); ?></h1>
                <?php the_content(); ?>
            </div> <?php
            if ( $gallery ) : ?>
                <div class="gallery lightbox onload-fade-in style1 small"><?php
                    foreach ( $gallery as $photo ) : ?>
                        <article>
                            <a href="<?= $photo['full_image']; ?>" class="image">
                                <img src="<?= $photo['thumbnail']; ?>" alt="">
                            </a><?php
                            if ( array_key_exists('caption', $photo) && $photo['caption'] ) : ?>
                                <div class="caption">
                                    <p><?= $photo['caption']; ?></p>
                                </div> <?php
                            endif; ?>
                        </article><?php
                    endforeach; ?>
                </div> <?php
            endif;
            if ( $quick_link ) : ?>
                <div class="content">
                    <p>&nbsp;</p>
                    <ul class="actions vertical">
                        <li><a href="<?= get_permalink($quick_link->ID); ?>" class="button big wide">&raquo; <?= $quick_link->post_title; ?></a></li>
                    </ul>
                </div><?php
		    endif; ?>
        </section><?php
    endwhile;
else :
    get_template_part('template-parts/content', 'none');
endif;
get_footer(); ?>
