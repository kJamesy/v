<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-skrollr">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="HandheldFriendly" content="True">
    <meta property="og:title" content="<?= get_bloginfo()."-".get_the_title() ?>" />
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1">
    <link rel="apple-touch-icon" sizes="180x180" href="<?= get_stylesheet_directory_uri(); ?>/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?= get_stylesheet_directory_uri(); ?>/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?= get_stylesheet_directory_uri(); ?>/favicons/favicon-16x16.png">
    <link rel="manifest" href="<?= get_stylesheet_directory_uri(); ?>/favicons/manifest.json">
    <link rel="mask-icon" href="<?= get_stylesheet_directory_uri(); ?>/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="<?= mix('css/app.css') ?>">
    <script src='//www.google.com/recaptcha/api.js'></script>
    <script defer src="//use.fontawesome.com/releases/v5.0.3/js/all.js"></script><?php
    wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<!--<body class="show-menu">-->
<!-- Analytics -->
<!-- Google Analytics --><?php
if ( strtolower(env('WP_ENV')) != 'local' ) : ?>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-113220743-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-113220743-1');
    </script>
     <?php
endif;
$menu_page = \Theme\Misc::getMenuPage($post);
$menu_page_id = $menu_page ? $menu_page->ID : null;
$root_page_id = \Theme\Misc::getRootPageId($menu_page);
$root_page = $root_page_id ? get_post($root_page_id) : null;
$root_slug = $root_page ? $root_page->post_name : 'none';
$menu = new \Theme\Menu($menu_page_id);
$menuHtml = $menu->getMenuHtml(); ?>

<div class="container">
    <div class="menu-wrap">
        <nav class="menu">
            <?= $menuHtml; ?>
        </nav>
    </div>
    <button class="menu-button" id="open-button"></button>
</div>
<div class="content-wrap">
    <div id="wrapper" class="divided">
