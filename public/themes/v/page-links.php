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
        <section class="spotlight onload-image-fade-in onload-content-fade-right style2 image-position-center content-align-left orient-right" id="section-1">
            <div class="content">
                <h1><?php the_title(); ?></h1><?php
                the_content(); ?>
            </div> <?php
            if ( $bg_image ) : ?>
                <div class="image">
                    <img src="<?= $bg_image; ?>" alt="<?php bloginfo('name'); ?>" />
                </div> <?php
            endif; ?>
        </section> <?php
        if ( $links ) : ?>
            <section class="wrapper style1 align-center" id="section-2">
                <div class="gallery style2 small lightbox onload-fade-in"> <?php
                    foreach ( $links as $link ) : ?>
                        <article>
                            <a href="<?= $link['url']; ?>" class="image" target="_blank">
                                <img src="<?= $link['thumbnail']; ?>" alt="<?= $link['text']; ?>">
                            </a>
                            <div class="caption">
                                <p><?= $link['text']; ?></p>
                            </div>
                        </article> <?php
                    endforeach; ?>
                </div>
            </section><?php
        endif;
    endwhile;
else :
    get_template_part('template-parts/content', 'none');
endif;
get_footer(); ?>
