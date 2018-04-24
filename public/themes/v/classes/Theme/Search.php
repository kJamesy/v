<?php

namespace Theme;

/**
 * Post type Search Queries
 * Class Search
 */
class Search
{

    /**
     * Define pagination args
     * @param $query
     * @return array
     */
    public static function get_pagination_args($query)
    {
        return [
            'base' => str_replace( 999999999, '%#%', esc_url( get_pagenum_link( 999999999 ) ) ),
            'format' => '?paged=%#%',
            'current' => max( 1, get_query_var('paged') ),
            'total' => $query->max_num_pages
        ];
    }

	/**
	 * Perform search on specified custom post type
	 * @param array $type
	 * @param string $keywords
	 * @param int $num
	 * @param string $orderBy
	 * @param string $order
	 * @param null $metaKey
	 * @param null $metaValue
	 * @param string $metaType
	 * @param bool $suppress_filters
	 * @param array $excludeIds
	 *
	 * @return array
	 */
    public static function post_type_search($type = [], $keywords = '', $num = -1, $orderBy = 'date', $order = 'DESC', $metaKey = null, $metaValue = null, $metaType = '=')
    {
        $query = new \WP_Query();

        $posts =  $query->query([
            'post_type'	    => $type,
            's' => $keywords,
            'posts_per_page'	=> $num,
            'orderby' => $orderBy,
            'order' => $order,
            'meta_query' => [
                [
                    'key' => $metaKey,
                    'value' => $metaValue,
                    'compare' => $metaType
                ]
            ],
            'paged' => ( get_query_var('paged') ? get_query_var('paged') : 1 ),
        ]);

        return ['posts' => $posts, 'pagination' => paginate_links(static::get_pagination_args($query))];
    }

}