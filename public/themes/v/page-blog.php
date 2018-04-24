<?php
/**
 ** Blog Page Template
 *  Template Name: Page - Blog Page
 */
global $post;

$searchText = array_key_exists('search', $_GET) && $_GET['search'] ? $_GET['search'] : '';;
$per_page = 10;

$blogPosts = \Theme\Search::post_type_search(['blog_posts'], $searchText, $per_page);
$hasPosts = array_key_exists('posts', $blogPosts ) && $blogPosts['posts'];
$hasPagination = array_key_exists('pagination', $blogPosts ) && $blogPosts['pagination'];

get_header();

if ( have_posts() ) :
    while (have_posts()) : the_post(); ?>
        <section class="wrapper style2 align-center">
            <div class="inner">
                <h1><?php the_title(); ?></h1>
                <form action="<?= get_permalink(); ?>">
                    <input type="text" placeholder="Enter Search term" name="search" id="search" value="<?= stripslashes($searchText); ?>">
                </form><?php
                if ( $hasPosts ) : ?>
                    <div class="index align-left"> <?php
                        foreach ( $blogPosts['posts'] as $blogPost ) :
                            $permalink = get_permalink($blogPost->ID);
                            $featuredImage = get_field('featured_image', $blogPost->ID); ?>

                            <section>
                                <header> <?php
                                    if ( $featuredImage ) : ?>
                                        <a href="<?= $permalink; ?>"><img src="<?= $featuredImage; ?>" /></a> <?php
                                    endif; ?>
                                </header>
                                <div class="content">
                                    <dl>
                                        <dt><a href="<?= $permalink; ?>"><?= $blogPost->post_title; ?></a></dt>
                                        <dd>
                                            <p class="post-meta">
                                                <i class="far fa-clock"></i>
                                                <?= get_the_date('d-m-Y', $blogPost->ID); ?>
                                            </p>
                                            <p><?= \Theme\Misc::computeSummary($blogPost->post_content, 256); ?></p>
                                            <ul class="actions vertical">
                                                <li><a href="<?= $permalink; ?>" class="button small">&raquo; Read More</a></li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </div>
                            </section> <?php
                        endforeach;

                        if ( $hasPagination) : ?>
                            <section class="pagination">
                                <?= $blogPosts['pagination']; ?>
                            </section> <?php
                        endif; ?>
                    </div>
                    <div class="addthis_inline_share_toolbox align-right"></div><?php
                else : ?>
                    <div class="index align-center">
                        No posts found...
                    </div> <?php
                endif; ?>
            </div>
        </section><?php
    endwhile;
else :
    get_template_part('template-parts/content', 'none');
endif; ?>
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5adf1a65617ec113"></script> <?php
get_footer(); ?>
