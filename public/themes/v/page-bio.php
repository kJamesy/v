<?php
/**
 ** Bio Page Template
 *  Template Name: Page - Bio Page
 */
global $post;

$bio = get_field('bio');
$quick_link = get_field('quick_link');

$css_classes = [
        'banner onload-image-fade-in onload-content-fade-left style1 fullscreen orient-right content-align-left',
        'spotlight onscroll-image-fade-in invert style4 fullscreen orient-left content-align-left image-position-center',
        'spotlight onscroll-image-fade-in style3 android orient-right content-align-left invert image-position-center',
    ];

$bg_image = get_field('big_background_image');
$quick_link = get_field('quick_link');

get_header();

if ( have_posts() ) :
    while (have_posts()) : the_post();
        if ( $num = count($bio) ) :
            foreach($bio as $key => $para) : ?>
                <section class="<?= $css_classes[$key]; ?>" id="section-<?= $key; ?>">
                    <div class="content"> <?php
                        if ( ! $key ) : ?>
                            <h1><?php bloginfo('name'); ?> <?php the_title(); ?></h1> <?php
                        endif; ?>
                        <p>
                            <?= $para['paragraph']; ?>
                        </p> <?php
                        if ( $key + 1 < $num ) : ?>
                            <ul class="actions vertical">
                                <li><a href="#section-<?= $key + 1; ?>" class="button big wide smooth-scroll-middle">Read More</a></li>
                            </ul> <?php
                        elseif ( $quick_link ) : ?>
                            <ul class="actions vertical">
                                <li><a href="<?= get_permalink($quick_link->ID); ?>" class="button big wide">&raquo; <?= $quick_link->post_title; ?></a></li>
                            </ul> <?php
                        endif; ?>
                    </div>
                    <div class="image">
                        <img src="<?= $para['photo']; ?>" alt="Vivian Onano" />
                    </div>
                </section> <?php
            endforeach;
        endif;
    endwhile;
else :
    get_template_part('template-parts/content', 'none');
endif;
get_footer(); ?>
