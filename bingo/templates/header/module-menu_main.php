<nav id="ruby-main-menu" class="main-menu-wrap">
    <?php wp_nav_menu(
        array(
            'theme_location' => 'bingo_ruby_menu_main',
            'menu_id'        => 'main-nav',
            'menu_class'     => 'main-menu-inner',
            'walker'         => new bingo_ruby_walker,
            'depth'          => 4,
            'items_wrap' => '<ul id="%1$s" class="%2$s" '. bingo_ruby_schema::markup( 'menu' ) .'>%3$s</ul>',
            'echo'           => true,
            'fallback_cb'    => 'bingo_ruby_navigation_fallback'
        )
    ); ?>
</nav>