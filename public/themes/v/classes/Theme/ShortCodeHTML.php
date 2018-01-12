<?php

namespace Theme;

use Helpers\Str;

class ShortCodeHTML
{

    /**
     * Get Accordion Panel Html
     * @param $title
     * @param $content
     * @param $accordionId
     * @return string
     */
    public static function getAccordionPanelHtml($title, $content, $accordionId)
    {
        $panelId = Str::slug($title) . rand(10,99);
        $html = "<div class=\"card\" style='border: 0;'>";
        $html .= "<div class='card-header' role='tab' id='heading-$panelId' style='border: 0;'>";
        $html .= "<h5 class='mb-0'>";
        $html .= "<a class='collapsed' data-toggle='collapse' data-parent='#$accordionId' href='#$panelId' aria-expanded='false' aria-controls='$panelId'>";
        $html .= $title;
        $html .= "</a></h5></div>";
        $html .= "<div id='$panelId' class='collapse' role='tabpanel' aria-labelledby='heading-$panelId'>";
        $html .= "<div class=\"card-block\">";
        $html .= $content;
        $html .= "</div>";
        $html .= "</div>";
        $html .= "</div> <!-- Close $panelId -->";

        return $html;
    }


    /**
     * Generate youtube embed code
     * @param $iframe
     * @return mixed
     */
    public static function getVideoHtml($url)
    {
        $html = '';
        parse_str( parse_url( $url, PHP_URL_QUERY ), $youtubeVars );

        if ( ! filter_var($url, FILTER_VALIDATE_URL) === false  && array_key_exists('v', $youtubeVars) ) {
            $videoId = $youtubeVars['v'];
            $params = [
                'controls'  => 1,
                'hd'        => 1,
                'autohide'  => 1,
                'rel'       => 0,
                'enablejsapi' => 1
            ];

            $url = "https://www.youtube.com/embed/$videoId";
            $url = add_query_arg($params, $url);
            $html = '<iframe id="iframe0" class="embed-responsive-item" allowFullScreen src="' . $url . '"></iframe>';
        }
        else
            $html = _x('Invalid Youtube Link', 'theme', 'mpp');

        return "<div class='embed-responsive embed-responsive-16by9'>$html</div>";
    }

    /**
     * Generate iframe embed code
     * @param $url
     * @return string
     */
    public static function getIframeHtml($url)
    {
        $html = '<div class="iframe-container">';

        if ( ! filter_var($url, FILTER_VALIDATE_URL) === false ) {
        	$url = "/iframe-helper?url=$url";
            $html = '<iframe class="content-iframe" src="' . $url . '"></iframe>';
        }
        else
            $html = _x('Invalid Link', 'theme', 'mpp');

        return "<div class='embed-responsive embed-responsive-1by1'>$html</div>";
    }


}