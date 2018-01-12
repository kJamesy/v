<?php

/**
 * [youtube align='center' width='100%']https://youtube.com?v=sd32234[/youtube]
 * @param $params
 * @param null $content
 * @return string
 */
function youtube_embed_processor($params, $content = null)
{
    $code_arr = shortcode_atts( ['align' => 'center', 'width' => '100%'], $params, 'youtube' );
    $allowed_aligns = ['left', 'right', 'none'];

    if ( in_array(strtolower($code_arr['align']), $allowed_aligns) )
        $code_arr['align'] = strtolower($code_arr['align']);
    else
        $code_arr['align'] = 'none';

    if ( str_contains($code_arr['width'], '%') ) {
        $num = (int) str_replace('%', '', $code_arr['width']);
        $num = $num ?: 100;

        $code_arr['width'] = "$num%";
    }
    else
        $code_arr['width'] = "100%";

    if ( $code_arr['align'] == 'none' )
        $code_arr['width'] = "100%";

    $iframe = \Theme\ShortCodeHTML::getVideoHtml($content);
    $html = "<div style='width: {$code_arr['width']}; float: {$code_arr['align']};' class='m-2'>$iframe</div>";

    return $html;
}

add_shortcode('youtube','youtube_embed_processor');


/**
 * [iframe]http://some-website.com[/iframe]
 * @param $params
 * @param null $content
 * @return string
 */
function iframe_embed_processor($params, $content = null)
{
    $iframe = \Theme\ShortCodeHTML::getIframeHtml($content);
    return $iframe;
}

add_shortcode('iframe','iframe_embed_processor');
