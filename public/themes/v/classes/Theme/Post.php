<?php
namespace Theme;

class Post
{
    /**
     * The current post
     * @var
     */
    protected $post;

    /**
     * The current menu page
     * @var
     */
    protected $menuPage;

    /**
     * Page ancestors
     * @var
     */
    public $ancestors;

    /**
     * Post constructor.
     * @param $post
     * @param null $menuPage
     */
    public function __construct($post, $menuPage = null)
    {
        $this->post = $post;
        $this->menuPage = $menuPage ?: $this->post;
        $this->ancestors = $this->get_ancestors();
    }

    /**
     * Get the ID of the root page
     * @return int|mixed
     */
    public function get_root_id()
    {
        if ( $this->menuPage->post_parent )
            return $this->ancestors[count($this->ancestors) - 1];
        else
            return $this->menuPage->ID;
    }

    /**
     * Get the root page
     * @return array|null|\WP_Post
     */
    public function get_root()
    {
        return get_post($this->get_root_id());
    }

    /**
     * Get all ancestors of menu page
     * @return array
     */
    public function get_ancestors()
    {
        return get_post_ancestors($this->menuPage->ID);
    }

    /**
     * Get children of menu page
     * @return array
     */
    public function get_children()
    {
        return get_posts([
            'numberposts' => -1,
            'post_parent' => $this->menuPage->ID ?: 0,
            'post_type' => 'page',
            'post_status' => 'publish',
            'orderby' => 'menu_order',
            'order' => 'ASC'
        ]);
    }

    /**
     * Get siblings of menu page
     * @return array
     */
    public function get_siblings()
    {
        return get_posts([
            'numberposts' => -1,
            'post_parent' => $this->menuPage->post_parent ?: 0,
            'post_type' => 'page',
            'post_status' => 'publish',
            'orderby' => 'menu_order',
            'order' => 'ASC'
        ]);
    }

    /**
     * Get Page Level
     * @return int
     */
    public function get_level()
    {
        return $this->ancestors ? count($this->ancestors) + 1 : 1;
    }

    /**
     * Generate the breadcrumb HTML
     * @return string
     */
    public function get_breadcrumbs_html()
    {
        $ancestors = $this->ancestors;
        $html = '';

        if ( count($ancestors) ) {
            $ancestors = array_reverse($ancestors);

            foreach ($ancestors as $key => $ancestor) {
                $permalink = get_the_permalink($ancestor);
                $title = get_the_title($ancestor);

                $html .= "<a href='$permalink'>$title</a> ";
                $html .= "&raquo; ";
            }
        }

        if ( $this->menuPage->ID != $this->post->ID ) {
            $permalink = get_the_permalink($this->menuPage->ID);
            $title = get_the_title($this->menuPage->ID);

            $html .= "<a href='$permalink'>$title</a> ";
            $html .= "&raquo; ";
        }

        $html .= $this->post->post_title;

        return $html;
    }


}