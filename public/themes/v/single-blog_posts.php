<?php

global $post;
$featuredImage = get_field('featured_image');
$orients = ['orient-left', 'orient-right'];
$orient = $orients[array_rand($orients)];

get_header();

if ( have_posts() ) :
    while (have_posts()) :the_post(); ?>
        <section class="spotlight onload-content-fade-left style2 <?= $orient; ?>">
            <div class="content">
                <h1><?php the_title(); ?></h1>
                <p class="post-meta">
                    <i class="far fa-clock"></i>
		            <?= get_the_date('jS \of\ F, Y'); ?>
                </p>
                <div class="addthis_inline_share_toolbox"></div>
                <div class="main-content">
	                <?php the_content(); ?>
                </div>
                <div class="addthis_inline_share_toolbox bottom"></div>
                <div id="disqus_thread"></div>
            </div> <?php
            if ( $featuredImage ) : ?>
                <div class="image">
                    <img src="<?= $featuredImage; ?>" alt="">
                </div> <?php
            endif; ?>
        </section><?php
    endwhile;
else :
    get_template_part('template-parts/content', 'none');
endif; ?>
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5adf1a65617ec113"></script>
<script>
    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://vivianonano.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script><?php
get_footer(); ?>
