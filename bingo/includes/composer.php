<?php
/** register composer blocks */
if ( ! function_exists( 'bingo_composer_blocks' ) ) {
	function bingo_composer_blocks() {
		$uri    = get_template_directory_uri();
		$blocks = array(
            'bingo_ruby_fw_block_1'           => array(
                'title'         => esc_html__( 'Block 1', 'bingo' ),
                'description'   => esc_html__( 'show block 1 layout (fullwidth grid)', 'bingo' ),
                'img'           => $uri . '/assets/images/feat-grid-fw.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_1::block_config()
            ),
            'bingo_ruby_fw_block_2'           => array(
                'title'         => esc_html__( 'Block 2', 'bingo' ),
                'description'   => esc_html__( 'show block 2 layout (fullwidth grid)', 'bingo' ),
                'img'           => $uri . '/assets/images/fw-block-2.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_2::block_config()
            ),
            'bingo_ruby_fw_block_3'           => array(
                'title'         => esc_html__( 'Block 3', 'bingo' ),
                'description'   => esc_html__( 'show block 3 layout (fullwidth grid)', 'bingo' ),
                'img'           => $uri . '/assets/images/feat-grid-3.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_3::block_config()
            ),
            'bingo_ruby_fw_block_4'           => array(
                'title'         => esc_html__( 'Block 4', 'bingo' ),
                'description'   => esc_html__( 'show block 4 layout (fullwidth grid)', 'bingo' ),
                'img'           => $uri . '/assets/images/fw-block-4.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_4::block_config()
            ),
            'bingo_ruby_fw_block_5'           => array(
                'title'         => esc_html__( 'Block 5', 'bingo' ),
                'description'   => esc_html__( 'show block 5 layout (fullwidth carousel)', 'bingo' ),
                'img'           => $uri . '/assets/images/fw-block-5.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_5::block_config()
            ),
            'bingo_ruby_fw_block_6'           => array(
                'title'         => esc_html__( 'Block 6', 'bingo' ),
                'description'   => esc_html__( 'show block 6 layout (fullwidth slider)', 'bingo' ),
                'img'           => $uri . '/assets/images/fw-block-6.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_6::block_config()
            ),
            'bingo_ruby_fw_block_7'           => array(
                'title'         => esc_html__( 'Block 7', 'bingo' ),
                'description'   => esc_html__( 'show block 7 layout (fullwidth carousel)', 'bingo' ),
                'img'           => $uri . '/assets/images/fw-block-7.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_7::block_config()
            ),
            //block post
            'bingo_ruby_fw_block_g1'          => array(
                'title'         => esc_html__( 'Block g1', 'bingo' ),
                'description'   => esc_html__( 'show block g1 layout (grid layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/fw-block-g1.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_g1::block_config()
            ),
            'bingo_ruby_fw_block_g2'          => array(
                'title'         => esc_html__( 'Block g2', 'bingo' ),
                'description'   => esc_html__( 'show block g2 layout (grid layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/fw-block-g2.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_g2::block_config()
            ),
            'bingo_ruby_fw_block_g3'          => array(
                'title'         => esc_html__( 'Block g3', 'bingo' ),
                'description'   => esc_html__( 'show block g3 layout (grid layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/fw-block-g4.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_g3::block_config()
            ),
            'bingo_ruby_fw_block_g4'          => array(
                'title'         => esc_html__( 'Block g4', 'bingo' ),
                'description'   => esc_html__( 'show block g4 layout (grid layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/fw-block-g5.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_g4::block_config()
            ),
            'bingo_ruby_fw_block_g5'          => array(
                'title'         => esc_html__( 'Block g5', 'bingo' ),
                'description'   => esc_html__( 'show block g5 layout (gallery grid)', 'bingo' ),
                'img'           => $uri . '/assets/images/block-gallery-1.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_g5::block_config()
            ),
            'bingo_ruby_fw_block_g6'          => array(
                'title'         => esc_html__( 'Block g6', 'bingo' ),
                'description'   => esc_html__( 'show block g6 layout (gallery grid)', 'bingo' ),
                'img'           => $uri . '/assets/images/block-gallery-2.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_g6::block_config()
            ),
            'bingo_ruby_fw_block_v1'          => array(
                'title'         => esc_html__( 'Block v1', 'bingo' ),
                'description'   => esc_html__( 'show block v1 layout (video playlist)', 'bingo' ),
                'img'           => $uri . '/assets/images/fw-block-video-1.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_v1::block_config()
            ),
            'bingo_ruby_fw_block_v2'          => array(
                'title'         => esc_html__( 'Block v2', 'bingo' ),
                'description'   => esc_html__( 'show block v2 layout (video playlist)', 'bingo' ),
                'img'           => $uri . '/assets/images/fw-block-video-2.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_v2::block_config()
            ),
            'bingo_ruby_fw_block_t1'          => array(
                'title'         => esc_html__( 'Block t1 (33%)', 'bingo' ),
                'description'   => esc_html__( 'show block t1 layout (one third column block)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-15.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_t1::block_config()
            ),
            'bingo_ruby_fw_block_t2'          => array(
                'title'         => esc_html__( 'Block t2 (33%)', 'bingo' ),
                'description'   => esc_html__( 'show block t2 layout (one third column block)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-16.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_t2::block_config()
            ),
            'bingo_ruby_fw_block_t3'          => array(
                'title'         => esc_html__( 'Block t3 (33%)', 'bingo' ),
                'description'   => esc_html__( 'show block t3 layout (one third column block)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-17.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_t3::block_config()
            ),
            'bingo_ruby_fw_block_t4'          => array(
                'title'         => esc_html__( 'Block t4 (33%)', 'bingo' ),
                'description'   => esc_html__( 'show block t4 layout (one third column block)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-18.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_t4::block_config()
            ),
            'bingo_ruby_fw_block_html'        => array(
                'title'         => esc_html__( 'Custom HTML', 'bingo' ),
                'description'   => esc_html__( 'show HTML custom content', 'bingo' ),
                'img'           => $uri . '/assets/images/block-html.png',
                'section'       => 'section_full_width',
                'block_options' => bingo_ruby_fw_block_html::block_config()
            ),
            'bingo_ruby_fw_block_advertising' => array(
                'title'         => esc_html__( 'Advertising', 'bingo' ),
                'description'   => esc_html__( 'Show Advertisement box in fullwidth section', 'bingo' ),
                'section'       => 'section_full_width',
                'img'           => get_template_directory_uri() . '/assets/images/block-ad.png',
                'block_options' => bingo_ruby_fw_block_advertising::block_config()
            ),
            'bingo_ruby_fw_block_shortcode'   => array(
                'title'         => esc_html__( 'Shortcodes', 'bingo' ),
                'description'   => esc_html__( 'Show shortcodes in fullwidth section', 'bingo' ),
                'section'       => 'section_full_width',
                'img'           => get_template_directory_uri() . '/assets/images/block-shortcode.png',
                'block_options' => bingo_ruby_fw_block_shortcode::block_config()
            ),
            //has sidebar blocks
            'bingo_ruby_hs_block_1'           => array(
                'title'         => esc_html__( 'Block 1', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 1', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-1.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_1::block_config()
            ),
            'bingo_ruby_hs_block_3'           => array(
                'title'         => esc_html__( 'Block 2', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 2', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-3.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_3::block_config()
            ),
            'bingo_ruby_hs_block_4'           => array(
                'title'         => esc_html__( 'Block 3', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 3', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-4.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_4::block_config()
            ),
            'bingo_ruby_hs_block_6'           => array(
                'title'         => esc_html__( 'Block 4', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 4', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-6.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_6::block_config()
            ),
            'bingo_ruby_hs_block_8'           => array(
                'title'         => esc_html__( 'Block 5', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 5', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-8.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_8::block_config()
            ),
            'bingo_ruby_hs_block_9'           => array(
                'title'         => esc_html__( 'Block 6', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 6', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-9.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_9::block_config()
            ),
            'bingo_ruby_hs_block_11'          => array(
                'title'         => esc_html__( 'Block 7', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 7', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-11.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_11::block_config()
            ),
            'bingo_ruby_hs_block_12'          => array(
                'title'         => esc_html__( 'Block 8', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 8', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-12.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_12::block_config()
            ),
            'bingo_ruby_hs_block_14'          => array(
                'title'         => esc_html__( 'Block 9', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 9', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-14.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_14::block_config()
            ),
            'bingo_ruby_hs_block_15'          => array(
                'title'         => esc_html__( 'Block 10 (50%)', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 10, the width of this block is 50%', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-15.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_15::block_config()
            ),
            'bingo_ruby_hs_block_16'          => array(
                'title'         => esc_html__( 'Block 11 (50%)', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 11, the width of this block is 50%', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-16.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_16::block_config()
            ),
            'bingo_ruby_hs_block_17'          => array(
                'title'         => esc_html__( 'Block 12 (50%)', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 12, the width of this block is 50%', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-17.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_17::block_config()
            ),
            'bingo_ruby_hs_block_18'          => array(
                'title'         => esc_html__( 'Block 13 (50%)', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 13, the width of this block is 50%', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-18.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_18::block_config()
            ),
            'bingo_ruby_hs_block_19'          => array(
                'title'         => esc_html__( 'Block 14', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 14 (grid layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-19.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_19::block_config()
            ),
            'bingo_ruby_hs_block_20'          => array(
                'title'         => esc_html__( 'Block 15', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 15 (grid layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-20.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_20::block_config()
            ),
            'bingo_ruby_hs_block_21'          => array(
                'title'         => esc_html__( 'Block 16', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 16', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-21.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_21::block_config()
            ),
            'bingo_ruby_hs_block_22'          => array(
                'title'         => esc_html__( 'Block 17', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 17 (list layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-22.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_22::block_config()
            ),
            'bingo_ruby_hs_block_23'          => array(
                'title'         => esc_html__( 'Block 18', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 18 (list layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-23.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_23::block_config()
            ),
            'bingo_ruby_hs_block_24'          => array(
                'title'         => esc_html__( 'Block 19', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 19 (Classic Layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-24.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_24::block_config()
            ),
            'bingo_ruby_hs_block_25'          => array(
                'title'         => esc_html__( 'Block 20', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 20 (Classic Layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-25.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_25::block_config()
            ),
            'bingo_ruby_hs_block_26'          => array(
                'title'         => esc_html__( 'Block 21', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 21 (Classic & list Layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-26.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_26::block_config()
            ),
            'bingo_ruby_hs_block_27'          => array(
                'title'         => esc_html__( 'Block 22', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 22 (Classic & list Layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-27.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_27::block_config()
            ),
            'bingo_ruby_hs_block_28'          => array(
                'title'         => esc_html__( 'Block 23', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 23 (Classic & Grid Layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-28.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_28::block_config()
            ),
            'bingo_ruby_hs_block_29'          => array(
                'title'         => esc_html__( 'Block 24', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 24 (Classic & Small Grid Layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-29.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_29::block_config()
            ),
            'bingo_ruby_hs_block_30'          => array(
                'title'         => esc_html__( 'Block 25', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 25 (Classic & list Layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-30.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_30::block_config()
            ),
            'bingo_ruby_hs_block_31'          => array(
                'title'         => esc_html__( 'Block 26', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 26 (Classic & list Layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-31.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_31::block_config()
            ),
            'bingo_ruby_hs_block_32'          => array(
                'title'         => esc_html__( 'Block 27', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 27 (Classic & grid Layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-32.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_32::block_config()
            ),
            'bingo_ruby_hs_block_33'          => array(
                'title'         => esc_html__( 'Block 28', 'bingo' ),
                'description'   => esc_html__( 'Show block layout 28 (mixed list layout)', 'bingo' ),
                'img'           => $uri . '/assets/images/hs-block-33.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_33::block_config()
            ),
            'bingo_ruby_hs_block_html'        => array(
                'title'         => esc_html__( 'Custom HTML', 'bingo' ),
                'description'   => esc_html__( 'show HTML custom content', 'bingo' ),
                'img'           => $uri . '/assets/images/block-html.png',
                'section'       => 'section_has_sidebar',
                'block_options' => bingo_ruby_hs_block_html::block_config()
            ),
            'bingo_ruby_hs_block_advertising' => array(
                'title'         => esc_html__( 'Advertising', 'bingo' ),
                'description'   => esc_html__( 'Show Advertisement box in has sidebar section', 'bingo' ),
                'section'       => 'section_has_sidebar',
                'img'           => $uri . '/assets/images/block-ad.png',
                'block_options' => bingo_ruby_hs_block_advertising::block_config()
            ),
            'bingo_ruby_hs_block_shortcode'   => array(
                'title'         => esc_html__( 'Shortcodes', 'bingo' ),
                'description'   => esc_html__( 'Show shortcodes in has sidebar section', 'bingo' ),
                'section'       => 'section_has_sidebar',
                'img'           => $uri . '/assets/images/block-shortcode.png',
                'block_options' => bingo_ruby_hs_block_shortcode::block_config()
            ),
		);

		return $blocks;
	}
}


/**
 * this file render ruby composer layouts
 */
if ( ! class_exists( 'bingo_ruby_composer_render' ) ) {
	class bingo_ruby_composer_render {

		/**
		 * @return bool|string
		 * render page composer
		 */
		static function render_page() {

			global $paged;
			$paged = intval( get_query_var( 'paged' ) );
			if ( empty( $paged ) ) {
				$paged = intval( get_query_var( 'page' ) );
			}

			$page_composer_data = get_post_meta( get_the_ID(), 'bingo_ruby_page_composer_data', true );

			if ( empty( $page_composer_data ) || ! is_array( $page_composer_data ) || $paged > 1 ) {
				return false;
			}

			$str = '';
			foreach ( $page_composer_data as $section_data ) {
				$str .= self::render_section( $section_data );
			}

			return $str;
		}


		/**
		 * @param $section_data
		 *
		 * @return string
		 * render page section
		 */
		static function render_section( $section_data ) {
			// check
			if ( empty( $section_data['section_type'] ) ) {
				return false;
			}


			$str = '';
			switch ( $section_data['section_type'] ) {
				case 'section_full_width' :
					$str .= self::render_section_fw( $section_data );
					break;
				case 'section_has_sidebar' :
					$str .= self::render_section_hs( $section_data );
					break;
			}

			return $str;
		}


		/**
		 * @param $section_data
		 *
		 * @return string
		 * render fw section
		 */
		static function render_section_fw( $section_data ) {

			if ( empty( $section_data['blocks'] ) || ! is_array( $section_data['blocks'] ) ) {
				return false;
			}

			if ( ! empty( $section_data['section_id'] ) ) {
				$section_id = $section_data['section_id'];
			} else {
				$section_id = '';
			}


			$counter    = 1;
			$last_check = false;
			$str        = '';

			$str .= self::open_section_fw( $section_id );
			foreach ( $section_data['blocks'] as $block ) {

				if ( true === self::check_fw_block_onet( $block ) ) {
					if ( 1 == $counter ) {
						$str .= '<div class="block-third-outer clearfix ruby-container">';
						$last_check = true;
					}
					$counter ++;
				} else {

					if ( $counter <= 3 && true === $last_check ) {
						$str .= '</div>';

						$counter    = 1;
						$last_check = false;
					}
				}

				$str .= ruby_composer_block::render( 'section_full_width', $block );

				if ( $counter > 3 ) {
					$str .= '</div>';

					$counter    = 1;
					$last_check = false;
				}
			}

			if ( 1 !== $counter ) {
				$str .= '</div>';
			}

			$str .= self::close_section_fw();

			return $str;

		}


		/**
		 * @param $section_data
		 *
		 * @return string
		 * render has sidebar section
		 */
		static function render_section_hs( $section_data ) {

			if ( empty( $section_data['blocks'] ) || ! is_array( $section_data['blocks'] ) ) {
				return false;
			}

			if ( ! empty( $section_data['section_id'] ) ) {
				$section_id = $section_data['section_id'];
			} else {
				$section_id = '';
			}

			if ( ! empty( $section_data['section_sidebar_position'] ) ) {
				$sidebar_position = $section_data['section_sidebar_position'];
			} else {
				$sidebar_position = 'right';
			}

			if ( ! empty( $section_data['section_sidebar_sticky'] ) ) {
				$sidebar_sticky = $section_data['section_sidebar_sticky'];
			} else {
				$sidebar_sticky = 'default';
			}

			if ( ! empty( $section_data['section_sidebar'] ) ) {
				$sidebar_name = $section_data['section_sidebar'];
			} else {
				$sidebar_name = 'bingo_ruby_sidebar_default';
			}


			$counter    = 1;
			$last_check = false;
			$str        = '';

			$str .= self::open_section_hs( $section_id, $sidebar_position );
			$str .= self::open_section_hs_content( $sidebar_position );

			foreach ( $section_data['blocks'] as $block ) {

				// clear float
				if ( true === self::check_sb_block_oneh( $block ) ) {
					$last_check = true;
					$counter ++;

				} else {
					if ( true === $last_check && $counter == 2 ) {
						$str .= '<div class="clearfix"></div>';
					}

					$counter    = 1;
					$last_check = false;
				}

				$str .= ruby_composer_block::render( 'section_has_sidebar', $block );

				if ( $counter > 2 ) {
					$str .= '<div class="clearfix"></div>';
					$counter = 1;
				}
			}
			$str .= self::close_section_hs_content();

			$str .= self::open_sidebar( $sidebar_sticky );
			$str .= self::render_sidebar( $sidebar_name );
			$str .= self::close_sidebar( $sidebar_sticky );

			$str .= self::close_section_hs();

			return $str;
		}


		/**
		 * @param $sidebar_name
		 *
		 * @return bool|string
		 * render sidebar
		 */
		static function render_sidebar( $sidebar_name ) {

			// check sidebar
			if ( empty( $sidebar_name ) || ! is_active_sidebar( $sidebar_name ) ) {
				return false;
			}

			ob_start();
			dynamic_sidebar( $sidebar_name );

			return ob_get_clean();

		}


		/**
		 * @param $section_id
		 *
		 * @return string
		 * open section full width
		 */
		static function open_section_fw( $section_id ) {
			if ( ! empty( $section_id ) ) {
				return '<div id="' . esc_attr( $section_id ) . '" class="ruby-section-fw ruby-section">';
			} else {
				return '<div class="ruby-section-fw ruby-section">';
			}
		}


		/**
		 * @return string
		 * close fw section
		 */
		static function close_section_fw() {
			return '</div>';
		}


		/**
		 * @param        $section_id
		 * @param string $sidebar_position
		 *
		 * @return string
		 */
		static function open_section_hs( $section_id, $sidebar_position = 'right' ) {
			$str = '';
			if ( ! empty( $section_id ) ) {
				$str .= '<div id="' . esc_attr( $section_id ) . '" class="ruby-section ruby-section-hs row is-sidebar-' . esc_attr( $sidebar_position ) . '">';
				$str .= '<div class="ruby-container">';
			} else {
				$str .= '<div class="ruby-section ruby-section-hs row is-sidebar-' . esc_attr( $sidebar_position ) . '">';
				$str .= '<div class="ruby-container">';
			}

			return $str;
		}

		/**
		 * @return string
		 * close sidebar section
		 */
		static function close_section_hs() {
			return '</div></div>';
		}


		/**
		 * @param string $sidebar_position
		 *
		 * @return string
		 * open has content of section has sidebar
		 */
		static function open_section_hs_content( $sidebar_position = 'right' ) {
			if ( 'none' == $sidebar_position ) {
				return '<div class="ruby-content-wrap content-without-sidebar col-xs-12">';
			} else {
				return '<div class="ruby-content-wrap content-with-sidebar col-sm-8 col-xs-12">';
			}
		}


		/**
		 * @return string
		 * close sidebar section content
		 */
		static function close_section_hs_content() {
			return '</div>';
		}


		/**
		 * @return string
		 * render sidebar wrap
		 */
		static function open_sidebar( $sticky = null ) {

			// sticky config
			if ( empty( $sticky ) || 'default' == $sticky ) {
				$sticky = bingo_ruby_core::get_option( 'sticky_sidebar' );
			} elseif ( 'none' == $sticky ) {
				$sticky = false;
			} else {
				$sticky = true;
			}

			if ( ! empty( $sticky ) ) {
				return '<aside class="sidebar-wrap col-sm-4 col-xs-12"><div class="ruby-sidebar-sticky"><div class="sidebar-inner">';
			} else {
				return '<aside class="sidebar-wrap col-sm-4 col-xs-12"><div class="sidebar-inner">';
			}

		}


		/**
		 * @return string
		 * close sidebar wrap
		 */
		static function close_sidebar( $sticky = null ) {

			// sticky config
			if ( empty( $sticky ) || 'default' == $sticky ) {
				$sticky = bingo_ruby_core::get_option( 'sticky_sidebar' );
			} elseif ( 'none' == $sticky ) {
				$sticky = false;
			} else {
				$sticky = true;
			}

			if ( ! empty( $sticky ) ) {
				return '</div></div></aside>';
			} else {
				return '</div></aside>';
			}
		}


		/**
		 * @param $block
         *
         * @return string
         * check block 33% width
		 */
		static function check_fw_block_onet( $block ) {
			$data_name = array(
                'bingo_ruby_fw_block_t1',
                'bingo_ruby_fw_block_t2',
                'bingo_ruby_fw_block_t3',
                'bingo_ruby_fw_block_t4',
			);

			// check
			$check = false;
			if ( ! empty( $block['block_name'] ) && in_array( $block['block_name'], $data_name ) ) {
				$check = true;
			}

			return $check;
		}


		/**
		 * @param $block
         *
         * @return string
         * check block 50% width
		 */
		static function check_sb_block_oneh( $block ) {
			$data_name = array(
                'bingo_ruby_hs_block_15',
                'bingo_ruby_hs_block_16',
                'bingo_ruby_hs_block_17',
                'bingo_ruby_hs_block_18'
			);

			$check = false;
			if ( ! empty( $block['block_name'] ) && in_array( $block['block_name'], $data_name ) ) {
				$check = true;
			}

			return $check;
		}


		/**
		 * create dynamic css for composer page
		 */
		static function dynamic_style() {

			$page_id = get_the_ID();

			if ( 'page-composer.php' != get_page_template_slug( $page_id ) ) {
				return false;
			}

			$str        = '';
			$cache_name = 'bingo_ruby_composer_dynamic_style_cache';
			$cache      = get_post_meta( $page_id, $cache_name, true );

			if ( empty( $cache ) ) {
				$page_composer_data = get_post_meta( $page_id, 'bingo_ruby_page_composer_data', true );

				if ( empty( $page_composer_data ) || ! is_array( $page_composer_data ) ) {
					return false;
				}

				foreach ( $page_composer_data as $section_data ) {

					if ( empty( $section_data['blocks'] ) || ! is_array( $section_data['blocks'] ) ) {
						continue;
					}

					foreach ( $section_data['blocks'] as $block ) {

                        //render background
                        if ( ! empty( $block['block_options']['background'] ) ) {
                            $str .= '#' . $block['block_id'];
                            $str .= '{ background-color: ' . $block['block_options']['background'] . ' !important;}';
                        };

                        if ( ! empty( $block['block_options']['margin_bottom'] ) ) {
                            $str .= '#' . $block['block_id'] . '.ruby-block-wrap';
                            $str .= '{ margin-bottom: ' . $block['block_options']['margin_bottom'] . 'px !important;}';
                        };

                        if ( ! empty( $block['block_options']['header_color'] ) ) {
                            $str .= '#' . $block['block_id'] . ' .post-title a:hover, #' . $block['block_id'] . ' .post-title a:focus,';
                            $str .= '#' . $block['block_id'] . ' .block-header-inner';
                            $str .= '{ color: ' . $block['block_options']['header_color'] . ';}';

                        }
					}
				}

				$cache = addslashes( $str );
				delete_post_meta( $page_id, $cache_name );
				update_post_meta( $page_id, $cache_name, $cache );

			} else {
				$str = stripslashes( $cache );
			}

			wp_add_inline_style( 'bingo_ruby_style_default', $str );

			return false;
		}
	}
}

// render composer
if ( ! class_exists( 'ruby_composer_block' ) ) {
	class ruby_composer_block {
		static function render( $section, $block ) {

			if ( 'section_full_width' == $section ) {
				switch ( $block['block_name'] ) {
                    //render full-width blocks
                    case 'bingo_ruby_fw_block_1' : {
                        return bingo_ruby_fw_block_1::render( $block );
                    }
                    case 'bingo_ruby_fw_block_2' : {
                        return bingo_ruby_fw_block_2::render( $block );
                    }
                    case 'bingo_ruby_fw_block_3' : {
                        return bingo_ruby_fw_block_3::render( $block );
                    }
                    case 'bingo_ruby_fw_block_4' : {
                        return bingo_ruby_fw_block_4::render( $block );
                    }
                    case 'bingo_ruby_fw_block_5' : {
                        return bingo_ruby_fw_block_5::render( $block );
                    }
                    case 'bingo_ruby_fw_block_6' : {
                        return bingo_ruby_fw_block_6::render( $block );
                    }
                    case 'bingo_ruby_fw_block_7' : {
                        return bingo_ruby_fw_block_7::render( $block );
                    }
                    case 'bingo_ruby_fw_block_g1' : {
                        return bingo_ruby_fw_block_g1::render( $block );
                    }
                    case 'bingo_ruby_fw_block_g2' : {
                        return bingo_ruby_fw_block_g2::render( $block );
                    }
                    case 'bingo_ruby_fw_block_g3' : {
                        return bingo_ruby_fw_block_g3::render( $block );
                    }
                    case 'bingo_ruby_fw_block_g4' : {
                        return bingo_ruby_fw_block_g4::render( $block );
                    }
                    case 'bingo_ruby_fw_block_g5' : {
                        return bingo_ruby_fw_block_g5::render( $block );
                    }
                    case 'bingo_ruby_fw_block_g6' : {
                        return bingo_ruby_fw_block_g6::render( $block );
                    }
                    case 'bingo_ruby_fw_block_v1' : {
                        return bingo_ruby_fw_block_v1::render( $block );
                    }
                    case 'bingo_ruby_fw_block_v2' : {
                        return bingo_ruby_fw_block_v2::render( $block );
                    }
                    case 'bingo_ruby_fw_block_t1' : {
                        return bingo_ruby_fw_block_t1::render( $block );
                    }
                    case 'bingo_ruby_fw_block_t2' : {
                        return bingo_ruby_fw_block_t2::render( $block );
                    }
                    case 'bingo_ruby_fw_block_t3' : {
                        return bingo_ruby_fw_block_t3::render( $block );
                    }
                    case 'bingo_ruby_fw_block_t4' : {
                        return bingo_ruby_fw_block_t4::render( $block );
                    }
                    case 'bingo_ruby_fw_block_html' : {
                        return bingo_ruby_fw_block_html::render( $block );
                    }
                    case 'bingo_ruby_fw_block_advertising' : {
                        return bingo_ruby_fw_block_advertising::render( $block );
                    }
                    case 'bingo_ruby_fw_block_shortcode' : {
                        return bingo_ruby_fw_block_shortcode::render( $block );
                    }
                    default :
                        return false;
				}
			} else {

				switch ( $block['block_name'] ) {
                    case 'bingo_ruby_hs_block_1' : {
                        return bingo_ruby_hs_block_1::render( $block );
                    }
                    case 'bingo_ruby_hs_block_3' : {
                        return bingo_ruby_hs_block_3::render( $block );
                    }
                    case 'bingo_ruby_hs_block_4' : {
                        return bingo_ruby_hs_block_4::render( $block );
                    }
                    case 'bingo_ruby_hs_block_6' : {
                        return bingo_ruby_hs_block_6::render( $block );
                    }
                    case 'bingo_ruby_hs_block_8' : {
                        return bingo_ruby_hs_block_8::render( $block );
                    }
                    case 'bingo_ruby_hs_block_9' : {
                        return bingo_ruby_hs_block_9::render( $block );
                    }
                    case 'bingo_ruby_hs_block_11' : {
                        return bingo_ruby_hs_block_11::render( $block );
                    }
                    case 'bingo_ruby_hs_block_12' : {
                        return bingo_ruby_hs_block_12::render( $block );
                    }
                    case 'bingo_ruby_hs_block_14' : {
                        return bingo_ruby_hs_block_14::render( $block );
                    }
                    case 'bingo_ruby_hs_block_15' : {
                        return bingo_ruby_hs_block_15::render( $block );
                    }
                    case 'bingo_ruby_hs_block_16' : {
                        return bingo_ruby_hs_block_16::render( $block );
                    }
                    case 'bingo_ruby_hs_block_17' : {
                        return bingo_ruby_hs_block_17::render( $block );
                    }
                    case 'bingo_ruby_hs_block_18' : {
                        return bingo_ruby_hs_block_18::render( $block );
                    }
                    case 'bingo_ruby_hs_block_19' : {
                        return bingo_ruby_hs_block_19::render( $block );
                    }
                    case 'bingo_ruby_hs_block_20' : {
                        return bingo_ruby_hs_block_20::render( $block );
                    }
                    case 'bingo_ruby_hs_block_21' : {
                        return bingo_ruby_hs_block_21::render( $block );
                    }
                    case 'bingo_ruby_hs_block_22' : {
                        return bingo_ruby_hs_block_22::render( $block );
                    }
                    case 'bingo_ruby_hs_block_23' : {
                        return bingo_ruby_hs_block_23::render( $block );
                    }
                    case 'bingo_ruby_hs_block_24' : {
                        return bingo_ruby_hs_block_24::render( $block );
                    }
                    case 'bingo_ruby_hs_block_25' : {
                        return bingo_ruby_hs_block_25::render( $block );
                    }
                    case 'bingo_ruby_hs_block_26' : {
                        return bingo_ruby_hs_block_26::render( $block );
                    }
                    case 'bingo_ruby_hs_block_27' : {
                        return bingo_ruby_hs_block_27::render( $block );
                    }
                    case 'bingo_ruby_hs_block_28' : {
                        return bingo_ruby_hs_block_28::render( $block );
                    }
                    case 'bingo_ruby_hs_block_29' : {
                        return bingo_ruby_hs_block_29::render( $block );
                    }
                    case 'bingo_ruby_hs_block_30' : {
                        return bingo_ruby_hs_block_30::render( $block );
                    }
                    case 'bingo_ruby_hs_block_31' : {
                        return bingo_ruby_hs_block_31::render( $block );
                    }
                    case 'bingo_ruby_hs_block_32' : {
                        return bingo_ruby_hs_block_32::render( $block );
                    }
                    case 'bingo_ruby_hs_block_33' : {
                        return bingo_ruby_hs_block_33::render( $block );
                    }
                    case 'bingo_ruby_hs_block_html' : {
                        return bingo_ruby_hs_block_html::render( $block );
                    }
                    case 'bingo_ruby_hs_block_advertising' : {
                        return bingo_ruby_hs_block_advertising::render( $block );
                    }
                    case 'bingo_ruby_hs_block_shortcode' : {
                        return bingo_ruby_hs_block_shortcode::render( $block );
                    }
                    default :
                        return false;
				}
			}
		}
	}
}

// add custom style
if ( class_exists( 'bingo_ruby_composer_render' ) ) {
	add_action( 'wp_enqueue_scripts', array( 'bingo_ruby_composer_render', 'dynamic_style' ) );
}