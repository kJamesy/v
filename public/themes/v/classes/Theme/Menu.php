<?php
/**
 * Only to be used within wordpress as it makes use of core wordpress functionality
 */
namespace Theme;


class Menu
{
    /**
     * current post ID
     * @var
     */
    public $currentId;

    /**
     * menu location
     * @var string
     */
    public $menuLocation;

    /**
     * menu items
     * @var
     */
    public $items;

    /**
     * @var string
     */
    protected $moreIconHtml;


    /**
     * Menu constructor.
     * @param string $menu_location
     */
    public function __construct($current_id, $menu_location = 'primary')
    {
        $this->currentId = $current_id;
        $this->menuLocation = $menu_location;
        $this->moreIconHtml = "<i class='fa fa-plus'></i>";
        $this->getMenuItems();
    }

    /**
     * Get the Wordpress menu items for the supplied menu location
     * @return array|false
     */
    protected function getMenuItems()
    {
        $locations = get_nav_menu_locations();
        if ( $locations && isset($locations[$this->menuLocation]) ) {
            $menu = wp_get_nav_menu_object($locations[$this->menuLocation]);

            if ( $menu )
                $this->items = wp_get_nav_menu_items($menu->term_id);
        }

        return $this->items;
    }

    /**
     * Generate HTML for the menu - custom for GPEI
     * @return string
     */
    public function getMenuHtml()
    {
        $tree =  $this->getMenuTree();
        $html = "<div class='icon-list'>";

        if ( $tree ) {
            foreach ( $tree as $item ) {
                $icon_css_classes = implode(' ', $item->classes);
                $css_classes = $item->is_current_item ? 'current-menu-item ' : '';
                $css_classes .= $item->is_current_ancestor ? 'current-menu-ancestor ' : '';
                $target = strlen($item->target) ? '_blank' : '_self';

                $html .= "<a href='$item->url' target='$target' class='$css_classes'><i class='$icon_css_classes'></i><span>$item->title</span></a>";
            }
        }

        return $html;
    }

    /**
     * Get Menu tree array
     * @return array
     */
    protected function getMenuTree()
    {
        $highestLevelItems = $this->getHighestLevelMenuItems();
        $tree = [];

        if ( $highestLevelItems ) {
            foreach ( $highestLevelItems as $root ) {
                $root->children = [];
                $root->is_current_item =  ( $this->currentId == (int) $root->object_id );
                $root->is_current_ancestor = false;
                $children = $this->getChildrenTree($root, $root);

                if ( $children ) {
                    foreach ( $children as $child ) {
                        if ( $this->currentId == (int) $child->object_id ) {
                            $child->is_current_item = true;
                            $root->is_current_ancestor = true;
                            break;
                        }
                    }

                    $root->children = $children;
                }

                $tree[] = $root;
            }
        }

        return $tree;
    }

    /**
     * Get top level menu items
     * @return array
     */
    protected function getHighestLevelMenuItems()
    {
        $highestLevelItems = [];

        if ( $this->items ) {
            foreach ( $this->items as $key => $item ) {
                if ( (int) $item->menu_item_parent == 0 )
                    $highestLevelItems[] = $item;
            }
        }

        return $highestLevelItems;
    }

    /**
     * Get the children tree of a given parent
     * @param $parent
     * @param $root
     * @return array
     */
    protected function getChildrenTree($parent, $root)
    {
        $childrenTree = [];
        $children = $this->getDirectChildren($parent);

        if ( $children ) {
            foreach ($children as $child) {
                $child->children = [];
                $child->is_current_item = $this->currentId == (int) $child->object_id ? true : false;
                $child->is_current_ancestor = false;
                $subChildren = $this->getChildrenTree($child, $root); // DISABLE THIS IF ONLY WANT FIRST LEVEL CHILDREN

                if ( $subChildren ) {
                    foreach ( $subChildren as $subChild ) {
                        if ( $this->currentId == (int) $subChild->object_id ) {
                            $subChild->is_current_item = true;
                            $child->is_current_ancestor = true;
                            $root->is_current_ancestor = true;
                            break;
                        }
                    }
                    $child->children = $subChildren;
                }

                $childrenTree[] = $child;
            }
        }

        return $childrenTree;
    }

    /**
     * Get the direct children of a given parent
     * @param $parent
     * @return array
     */
    public function getDirectChildren($parent)
    {
        $children = [];

        foreach ( $this->items as $child ) {
            if ( (int) $child->menu_item_parent == $parent->ID )
                $children[] = $child;
        }
        return $children;
    }

}
