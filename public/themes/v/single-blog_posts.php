<?php

global $post;

get_header();

if ( have_posts() ) :
    while (have_posts()) :the_post(); ?>

    <?php
    endwhile;
else :
    get_template_part('template-parts/content', 'none');
endif;
get_footer(); ?>


