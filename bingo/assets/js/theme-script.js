/*--------------------------------------------------------------
 BINGO MAIN SCRIPT
 --------------------------------------------------------------*/
var bingo_ruby_to_top;
var bingo_ruby_to_top_mobile;
var bingo_ruby_site_smooth_scroll;
var bingo_ruby_social_tooltip;
var bingo_ruby_single_image_popup;
var bingo_ruby_site_bg_link;
var bingo_ruby_tfooter_instagram_popup;
var bingo_ruby_sb_instagram_popup;

(function($) {
    "use strict";
    var bingo_ruby = {

        window: $(window),
        html: $('html, body'),
        document: $(document),
        body: $('body'),
        touch: Modernizr.touch,
        ios: /(iPad|iPhone|iPod)/g.test(navigator.userAgent),

        //  block filter
        window_last_pos: 0,
        direction: '',
        ajax_filter_item_last_width: [],
        waypoint_item: [],

        //  slider
        auto_play: true,
        auto_play_speed: 5000,
        play_speed: 200,
        resize_timer: '',
        slider_next: '<div class="ruby-slider-next ruby-slider-nav"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        slider_prev: '<div class="ruby-slider-prev ruby-slider-nav"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        slider_popup_next: '<div class="ruby-slider-popup-next ruby-slider-popup-nav"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        slider_popup_prev: '<div class="ruby-slider-popup-prev ruby-slider-popup-nav"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',

        //  Header Background parrallax
        header_parallax_class: $('#header-image-parallax'),
        header_parallax_image: $('#background-image-url').attr('src'),
        is_parallax: $('.is-header-parallax'),
        header_animation_frame: false,

        //  ajax
        ajax: {},

        //  document ready
        document_ready: function() {

            bingo_ruby.enable_sticky_navigation();
            bingo_ruby.breaking_news();
            bingo_ruby.subscribe_popup();
            bingo_ruby.search_popup();
            bingo_ruby.enable_sticky_sidebar();
            bingo_ruby.block_dropdown_filter();
            bingo_ruby.enable_header_parallax();
            bingo_ruby.enable_smooth_scroll();
            bingo_ruby.click_body();
            bingo_ruby.show_social();
            bingo_ruby.tooltips_social();
            bingo_ruby.off_canvas_toggle();

            bingo_ruby.footer_instagram_thumb_popup();
            bingo_ruby.sb_instagram_thumb_popup();

            bingo_ruby.fw_block_1_slider();
            bingo_ruby.fw_block_2_slider();
            bingo_ruby.fw_block_3_slider();
            bingo_ruby.fw_block_4_slider();
            bingo_ruby.fw_block_5_slider();
            bingo_ruby.fw_block_6_slider();
            bingo_ruby.fw_block_7_slider();

            bingo_ruby.block_related_video_slider();
            bingo_ruby.block_mini_slider();
            bingo_ruby.widget_tab_nav();
            bingo_ruby.single_scroll_to_comment();

            bingo_ruby.ajax_data_term();
            bingo_ruby.ajax_header_search();
            bingo_ruby.ajax_dropdown_filter();
            bingo_ruby.ajax_pagination();
            bingo_ruby.ajax_loadmore();
            bingo_ruby.ajax_mega_cat_sub();

        },

        //  document load
        document_load: function() {
            bingo_ruby.window.load(function() {
                bingo_ruby.body.addClass('ruby-js-loaded');
            });
        },

        document_reload: function() {

            bingo_ruby.back_to_top();
            bingo_ruby.site_smooth_display();
            bingo_ruby.ajax_infinite_scroll();
            bingo_ruby.block_popup_gallery();
            bingo_ruby.iframe_responsive();
            bingo_ruby.post_thumbnail_gallery_slider();
            bingo_ruby.post_thumbnail_gallery_grid();
            bingo_ruby.post_thumbnail_gallery_popup();
            bingo_ruby.post_thumbnail_video_popup();
            bingo_ruby.iframe_playlist_autoplay();
            bingo_ruby.single_post_box_comment();
            bingo_ruby.animation_review_progress_bar();
            bingo_ruby.single_thumb_popup();
            bingo_ruby.single_video_responsive();
            bingo_ruby.single_post_video_popup();
            bingo_ruby.ajax_video_playlist();
            bingo_ruby.ajax_single_box_related();
            bingo_ruby.waypoint_refresh();
        },


        document_resize: function() {
            bingo_ruby.window.resize(function() {

                clearTimeout(bingo_ruby.resize_timer);
                bingo_ruby.resize_timer = setTimeout(function() {
                    bingo_ruby.block_dropdown_filter();
                }, 150);
            })
        },

        //  site smooth scroll
        enable_smooth_scroll: function() {
            if (1 == bingo_ruby_site_smooth_scroll) {
                ruby_smooth_scroll();
            }
        },

        //  click on body
        click_body: function() {
            if (bingo_ruby_site_bg_link != undefined) {
                bingo_ruby.body.on('click', function(e) {
                    if (e.target != this) {
                        return;
                    }
                    window.open(bingo_ruby_site_bg_link, '_blank');
                });
            }
        },

        //  Back to top
        back_to_top: function() {
            if (1 == bingo_ruby_to_top) {
                if (1 == bingo_ruby_to_top_mobile) {
                    $().UItoTop({
                        containerID: 'ruby-back-top', //  fading element id
                        easingType: 'easeOutQuart',
                        text: '<i class="fa fa-angle-up"></i>',
                        containerHoverID: 'ruby-back-top-inner',
                        scrollSpeed: 800
                    });
                } else {
                    if (false === bingo_ruby.touch) {
                        $().UItoTop({
                            containerID: 'ruby-back-top', //  fading element id
                            easingType: 'easeOutQuart',
                            text: '<i class="fa fa-angle-up"></i>',
                            containerHoverID: 'ruby-back-top-inner',
                            scrollSpeed: 800
                        });
                    }
                }
            }
        },

        //  single iframe responsive
        iframe_responsive: function() {
            var entry = $('.single-entry.entry');
            if (entry.length > 0) {
                entry.each(function() {
                    var entry_el = $(this);
                    if (!entry_el.hasClass('iframe-loaded')) {
                        entry_el.fitVids();
                        entry_el.addClass('iframe-loaded')
                    }
                })
            }
        },

        //  get width of item
        get_width: function(item) {
            return item.width();
        },

        //  subscribe form popup
        subscribe_popup: function() {
            var top_subscribe_popup = $('#ruby-subscribe');
            top_subscribe_popup.magnificPopup({
                type: 'inline',
                preloader: false,
                focus: '#name',
                closeBtnInside: false,
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function() {
                        this.st.mainClass = this.st.el.attr('data-effect');
                        if (jQuery(window).width() < 768) {
                            this.st.focus = false;
                        }
                    }
                }
            });
        },

        //  breaking new
        breaking_news: function() {
            var breaking_news = $('#ruby-breaking-news');
            if (breaking_news.length > 0) {

                breaking_news.on('init', function() {
                    breaking_news.prev('.breaking-news-loader').fadeOut(600, function() {
                        $(this).remove();
                        breaking_news.removeClass('slider-init');
                    });
                });

                if (bingo_ruby.body.hasClass('is-style-rtl')) {
                    breaking_news.attr('dir', 'rtl');
                    breaking_news.slick({
                        dots: false,
                        fade: true,
                        rtl: true,
                        infinite: true,
                        autoplay: bingo_ruby.auto_play,
                        autoplaySpeed: bingo_ruby.auto_play_speed,
                        speed: 0,
                        adaptiveHeight: true,
                        arrows: true,
                        prevArrow: bingo_ruby.slider_prev,
                        nextArrow: bingo_ruby.slider_next
                    });
                } else {
                    breaking_news.slick({
                        dots: false,
                        fade: true,
                        infinite: true,
                        autoplay: bingo_ruby.auto_play,
                        autoplaySpeed: bingo_ruby.auto_play_speed,
                        speed: 0,
                        adaptiveHeight: true,
                        arrows: true,
                        prevArrow: bingo_ruby.slider_prev,
                        nextArrow: bingo_ruby.slider_next
                    });
                }
            }
        },

        //  off canvas toggle
        off_canvas_toggle: function() {
            var off_canvas_btn = $('.ruby-trigger');
            var btn_close = $('#ruby-off-canvas-close-btn');
            var site_mask = $('.main-site-mask');

            off_canvas_btn.click(function() {
                bingo_ruby.body.toggleClass('mobile-js-menu');
                return false;
            });

            site_mask.click(function() {
                bingo_ruby.body.toggleClass('mobile-js-menu');
                return false;
            });

            btn_close.click(function() {
                bingo_ruby.body.toggleClass('mobile-js-menu');
                return false;
            });

            //  show hide sub off canvas menu
            var off_canvas_nav = $('.off-canvas-nav-wrap');
            var off_canvas_nav_sub_a = off_canvas_nav.find('li.menu-item-has-children >a');
            off_canvas_nav_sub_a.append('<span class="explain-menu"><span class="explain-menu-inner"><i class="fa fa-angle-down" aria-hidden="true"></i></span></span>');
            var explain_mobile_menu = $('.explain-menu');
            explain_mobile_menu.click(function() {
                $(this).closest('.menu-item-has-children ').toggleClass('show-sub-menu');
                return false;
            });
        },

        //  show social
        show_social: function() {
            var social_show = $('.navbar-social > .show-social');
            var social_close = $('.navbar-social > .close-social');
            social_show.click(function() {
                var social = $(this).parent().parent('.navbar-social-wrap');
                if (!social.hasClass('extend-social')) {
                    social.addClass('extend-social');
                    social_close.click(function() {
                        social.removeClass('extend-social');
                    })
                }
            })
        },

        //  ruby tooltips
        tooltips_social: function() {
            if (1 == bingo_ruby_social_tooltip) {
                var social_tootips = $('.social-tooltips');
                social_tootips.find('a').tipsy({ fade: true });
            }
        },

        //  search popup
        search_popup: function() {
            var search_btn = $('.navbar-right .navbar-search > a');
            var search_close = $('.ruby-close-search .ruby-close-btn');
            var search_form = $('#ruby-header-search-popup');

            search_btn.on('click', function(e) {
                e.preventDefault();
                search_form.fadeIn('200');
                search_form.find('form input').focus();
            });

            search_close.on('click', function(e) {
                e.preventDefault();
                search_form.fadeOut('200');
            });
        },

        //  enable header parallax
        enable_header_parallax: function() {

            if (bingo_ruby.header_parallax_class.length > 0 && bingo_ruby.header_parallax_image.length > 0) {

                //  background image responsive
                bingo_ruby.header_parallax_class.backstretch(bingo_ruby.header_parallax_image, {
                    fade: 1250,
                    centeredY: false
                });

                //  check & enable parallax
                if ((bingo_ruby.touch === false || bingo_ruby.window.width() > 1024) && bingo_ruby.is_parallax.length > 0) {
                    bingo_ruby.window.scroll(function() {
                        bingo_ruby.header_parralax_background();
                    });
                }
            }
        },

        //  Header Background parrallax
        header_parralax_background: function() {
            if (bingo_ruby.header_animation_frame === false) {
                window.requestAnimationFrame(bingo_ruby.header_parallax_animation)
            }
            bingo_ruby.header_animation_frame = true;
        },

        //  Header parallax animation function
        header_parallax_animation: function() {

            var header_image_class = bingo_ruby.header_parallax_class.find('img')[0];
            var bingo_ruby_scroll_top = $(document).scrollTop();

            if (bingo_ruby_scroll_top < 820) {
                var parallax_move = Math.round(bingo_ruby_scroll_top / 3.5);
                //  move the bg
                var translate = 'translate3d(0px,' + parallax_move + 'px, 0px)';
                header_image_class.style.transform = translate;
                header_image_class.style['-webkit-transform'] = translate;
                header_image_class.style['-moz-transform'] = translate;
                header_image_class.style['-ms-transform'] = translate;
                header_image_class.style['-o-transform'] = translate;
            }
            bingo_ruby.header_animation_frame = false;
        },

        //  navigation sticky
        enable_sticky_navigation: function() {

            var sticky_menu = $('.is-navbar-sticky .navbar-outer');
            if (sticky_menu.length > 0) {
                var menu_wrap = sticky_menu.find('.navbar-wrap');
                if (menu_wrap.length > 0) {

                    //  add height holder for nav outer
                    var menu_height = menu_wrap.height();
                    var top_spacing = 0;

                    sticky_menu.css('min-height', menu_height);

                    bingo_ruby.window.resize(function() {
                        menu_height = menu_wrap.height();
                        sticky_menu.css('min-height', menu_height);
                    });

                    if (bingo_ruby.body.hasClass('admin-bar')) {
                        top_spacing = 32;
                    }

                    //  enable sticky
                    if (bingo_ruby.body.hasClass('is-smart-sticky')) {
                        menu_wrap.sticky({
                            className: 'is-stick',
                            topSpacing: top_spacing,
                            smartSticky: true,
                            zIndex: 9800
                        });
                    } else {
                        menu_wrap.sticky({
                            className: 'is-stick',
                            topSpacing: top_spacing,
                            zIndex: 9800
                        });
                    }

                    //  smart sticky
                    if (bingo_ruby.body.hasClass('is-smart-sticky')) {
                        menu_wrap.on('sticky-start', function() {

                            //  var flag
                            var flag_up = true;
                            var flag_down = true;

                            //  check scrolling
                            bingo_ruby.window.bind('scroll.ruby_menu_sticky', function() {
                                window.requestAnimationFrame(function() {

                                    var scroll_top = bingo_ruby.window.scrollTop();
                                    if (scroll_top !== bingo_ruby.window_last_pos) {
                                        if (scroll_top > bingo_ruby.window_last_pos) {
                                            bingo_ruby.direction = 'down';
                                        } else {
                                            bingo_ruby.direction = 'up';
                                        }
                                        bingo_ruby.window_last_pos = scroll_top;
                                    }

                                    //  scrolling down
                                    if (true === flag_down && 'down' == bingo_ruby.direction) {

                                        menu_wrap.css({
                                            '-webkit-transform': 'translate3d(0px,' + '-' + menu_height + 'px, 0px)',
                                            '-moz-transform': 'translate3d(0px,' + '-' + menu_height + 'px, 0px)',
                                            'transform': 'translate3d(0px,' + '-' + menu_height + 'px, 0px)',
                                            '-webkit-transition': 'transform 0.1s',
                                            '-moz-transition': 'transform 0.1s',
                                            'transition': 'transform 0.1s'
                                        });

                                        //  set flags
                                        flag_down = false;
                                        flag_up = true;
                                    }

                                    //  scrolling up
                                    if (true === flag_up && 'up' == bingo_ruby.direction) {
                                        menu_wrap.css({
                                            '-webkit-transform': 'translate3d(0px, 0px, 0px)',
                                            '-moz-transform': 'translate3d(0px, 0px, 0px)',
                                            'transform': 'translate3d(0px, 0px, 0px)',
                                            '-webkit-transition': 'transform 0.2s',
                                            '-moz-transition': 'transform 0.2s',
                                            'transition': 'transform 0.2s'
                                        });

                                        //  set flags
                                        flag_down = true;
                                        flag_up = false;
                                    }
                                })
                            });
                        });

                        menu_wrap.on('sticky-end', function() {
                            bingo_ruby.window.unbind('.ruby_menu_sticky');
                            menu_wrap.css({
                                '-webkit-transform': 'none',
                                '-moz-transform': 'none',
                                'transform': 'none',
                                '-webkit-transition': 'none',
                                '-moz-transition': 'none',
                                'transition': 'none'
                            });
                        });
                    }
                }

            }
        },

        // sidebar sticky
        enable_sticky_sidebar: function() {
            bingo_ruby.window.load(function() {
                var sidebars = $('.ruby-sidebar-sticky');
                if (sidebars.length > 0) {
                    if (bingo_ruby.get_width(bingo_ruby.window) < 992 || (bingo_ruby.get_width(bingo_ruby.window) < 1024 && true === bingo_ruby.touch) || true == bingo_ruby.ios) {
                        ruby_sticky_sidebar.is_enable = false;
                    }
                    ruby_sticky_sidebar.sticky_sidebar(sidebars);
                }
            })
        },

        // block filter
        block_dropdown_filter: function() {

            var block_ajax_filter_wrap = $('.block-ajax-filter-wrap');
            if (block_ajax_filter_wrap.length > 0) {
                block_ajax_filter_wrap.each(function() {

                    var block_ajax_filter = $(this);
                    var block_ajax_filter_id = block_ajax_filter.attr('id');
                    var dropdown_counter = 1;
                    var list_counter = 1;
                    var header_inner = block_ajax_filter.parent('.block-header-inner');
                    var header_title = header_inner.find('.block-title');
                    var block_ajax_filter_max_width = bingo_ruby.get_width(header_inner) - bingo_ruby.get_width(header_title);
                    var block_ajax_filter_width = bingo_ruby.get_width(block_ajax_filter);

                    if (block_ajax_filter_width > block_ajax_filter_max_width * 0.6) {

                        // add list filter to dropdown
                        while ((block_ajax_filter_width > block_ajax_filter_max_width * 0.6) && (dropdown_counter < 200)) {
                            var dropdown_flag = bingo_ruby.block_dropdown_filter_add_el(block_ajax_filter);

                            // break if empty element
                            if (0 == dropdown_flag) {
                                break;
                            }
                            block_ajax_filter_width = bingo_ruby.get_width(block_ajax_filter);
                            dropdown_counter++;
                        }
                    } else {
                        if ('undefined' == typeof bingo_ruby.ajax_filter_item_last_width[block_ajax_filter_id]) {

                            // hide more if list filter is too short
                            bingo_ruby.block_filter_hide_more(block_ajax_filter);

                        } else {

                            // get latest element width
                            var ajax_filter_el_last_width = bingo_ruby.ajax_filter_item_last_width[block_ajax_filter_id];
                            while ((block_ajax_filter_width + ajax_filter_el_last_width < block_ajax_filter_max_width * 0.6) && (list_counter < 200)) {
                                var list_flag = bingo_ruby.block_list_filter_add_el(block_ajax_filter);

                                // break if return false
                                if (0 == list_flag) {
                                    break;
                                }
                                // re-calculate width
                                block_ajax_filter_width = bingo_ruby.get_width(block_ajax_filter);
                                list_counter++;
                            }
                        }
                    }
                })
            }
        },

        // add filter el
        block_dropdown_filter_add_el: function(block_ajax_filter) {
            var block_ajax_filter_id = block_ajax_filter.attr('id');
            var list_ajax_filter = block_ajax_filter.find('.ajax-filter-list');
            var dropdown_ajax_filter = block_ajax_filter.find('.ajax-filter-dropdown-list');
            var list_ajax_filter_last_el = list_ajax_filter.children().last();

            // add to dropdown
            if (list_ajax_filter_last_el.length > 0) {
                // set with for latest item
                bingo_ruby.ajax_filter_item_last_width[block_ajax_filter_id] = list_ajax_filter_last_el.width();
                bingo_ruby.block_filter_show_more(block_ajax_filter);
                list_ajax_filter_last_el.detach().prependTo(dropdown_ajax_filter);
                return 1;
            } else {
                return 0;
            }
        },

        // block add filter into list
        block_list_filter_add_el: function(block_ajax_filter) {
            var block_ajax_filter_id = block_ajax_filter.attr('id');
            var list_ajax_filter = block_ajax_filter.find('.ajax-filter-list');
            var dropdown_ajax_filter = block_ajax_filter.find('.ajax-filter-dropdown-list');
            var dropdown_ajax_filter_first_el = dropdown_ajax_filter.children().first();

            // add to list
            if (dropdown_ajax_filter_first_el.length > 0) {
                dropdown_ajax_filter_first_el.css('opacity', '.1');
                dropdown_ajax_filter_first_el.detach().appendTo(list_ajax_filter);

                setTimeout(function() {
                    // hide more if empty content
                    if (dropdown_ajax_filter.children().length == 0) {
                        bingo_ruby.block_filter_hide_more(block_ajax_filter)
                    }
                    dropdown_ajax_filter_first_el.css('opacity', '1');
                }, 50);

                // set with for latest item
                bingo_ruby.ajax_filter_item_last_width[block_ajax_filter_id] = dropdown_ajax_filter_first_el.width();

                return 1;
            } else {
                return 0;
            }
        },

        // hide if over width
        block_filter_hide_more: function(block_ajax_filter) {
            var block_ajax_filter_btn = block_ajax_filter.find('.ajax-filter-dropdown');
            if (block_ajax_filter_btn.css('display') == 'inline-block') {
                block_ajax_filter_btn.hide();
            }
        },

        block_filter_show_more: function(block_ajax_filter) {
            var block_ajax_filter_btn = block_ajax_filter.find('.ajax-filter-dropdown');
            if (block_ajax_filter_btn.css('display') == 'none') {
                block_ajax_filter_btn.show(350);
            }
        },

        // gallery slider
        post_thumbnail_gallery_slider: function() {
            var gallery_slider = $('.post-thumb-gallery-slider');
            if (gallery_slider.length > 0) {
                gallery_slider.each(function() {
                    var gallery_slider_el = $(this);
                    if (!gallery_slider_el.hasClass('gallery-loaded')) {
                        gallery_slider_el.on('init', function() {
                            gallery_slider_el.imagesLoaded(function() {
                                gallery_slider_el.prev('.slider-loader').fadeOut(200, function() {
                                    $(this).remove();
                                    gallery_slider_el.removeClass('slider-init');
                                    gallery_slider_el.addClass('gallery-loaded');
                                });
                            });
                        });

                        if (bingo_ruby.body.hasClass('is-style-rtl')) {
                            gallery_slider_el.attr('dir', 'rtl');
                            gallery_slider_el.slick({
                                dots: true,
                                centerMode: false,
                                rtl: true,
                                autoplay: bingo_ruby.auto_play,
                                speed: bingo_ruby.play_speed,
                                adaptiveHeight: false,
                                arrows: true,
                                lazyLoad: 'progressive',
                                prevArrow: bingo_ruby.slider_prev,
                                nextArrow: bingo_ruby.slider_next
                            });
                        } else {
                            gallery_slider_el.slick({
                                dots: true,
                                centerMode: false,
                                autoplay: bingo_ruby.auto_play,
                                speed: bingo_ruby.play_speed,
                                adaptiveHeight: false,
                                arrows: true,
                                lazyLoad: 'progressive',
                                prevArrow: bingo_ruby.slider_prev,
                                nextArrow: bingo_ruby.slider_next
                            });
                        }
                    }
                })
            }
        },

        // post classic gallery grid
        post_thumbnail_gallery_grid: function() {
            var gallery_grid = $('.post-thumb-gallery-grid');
            if (gallery_grid.length > 0) {
                gallery_grid.each(function() {
                    var gallery_grid_el = $(this);
                    gallery_grid_el.fadeIn(300).justifiedGallery({
                        lastRow: 'justify',
                        rowHeight: 168,
                        maxRowHeight: 300,
                        rel: 'gallery',
                        waitThumbnailsLoad: true,
                        margins: 4,
                        captions: false,
                        refreshTime: 250,
                        imagesAnimationDuration: 300,
                        randomize: false,
                        sizeRangeSuffixes: { lt100: "", lt240: "", lt320: "", lt500: "", lt640: "", lt1024: "" }
                    }).on('jg.complete', function() {
                        // remove loading class
                        gallery_grid_el.imagesLoaded(function() {
                            gallery_grid_el.removeClass('slider-init');
                            gallery_grid_el.prev('.slider-loader').fadeOut(200, function() {
                                $(this).remove();

                            });
                        });
                    });
                });
            }
        },


        // thumbnail gallery popup
        post_thumbnail_gallery_popup: function() {
            var thumbnail_popup = $('.ruby-thumb-galley-popup');
            if (thumbnail_popup.length > 0) {
                thumbnail_popup.each(function() {

                    var thumbnail_popup_el = $(this);
                    var thumbnail_popup_el_index = thumbnail_popup_el.data('post_index');
                    if ('undefined' == typeof thumbnail_popup_el_index) {
                        thumbnail_popup_el_index = 0;
                    }

                    thumbnail_popup_el.magnificPopup({
                        type: 'inline',
                        preloader: false,
                        focus: '#name',
                        closeBtnInside: true,
                        removalDelay: 500,
                        callbacks: {
                            beforeOpen: function() {
                                this.st.mainClass = this.st.el.attr('data-effect');
                                if (bingo_ruby.get_width(bingo_ruby.window) < 768) {
                                    this.st.focus = false;
                                }
                            },
                            open: function() {
                                var popup_content = this.content;
                                var slider = popup_content.find('.popup-thumbnail-slider');
                                setTimeout(function() {
                                    bingo_ruby.post_thumbnail_popup_gallery_slider(slider, thumbnail_popup_el_index);
                                }, 500);
                            },

                            beforeClose: function() {
                                var popup_content = this.content;
                                var slider = popup_content.find('.popup-thumbnail-slider');
                                // unslick
                                if (slider.hasClass('slick-initialized')) {
                                    setTimeout(function() {
                                        slider.slick('unslick');
                                        slider.addClass('slider-init');
                                        slider.before('<div class="slider-loader"></div>');
                                    }, 500);
                                }
                            }
                        }
                    });
                });
            }
        },

        // slider on gallery popup
        post_thumbnail_popup_gallery_slider: function(gallery_slider, thumbnail_popup_el_index) {
            var gallery_slider_nav = gallery_slider.next('.slider-nav');
            // unlick
            if (gallery_slider.hasClass('slick-initialized')) {
                gallery_slider.slick('unslick');
            }
            if (gallery_slider_nav.hasClass('slick-initialized')) {
                gallery_slider_nav.slick('unslick');
            }

            gallery_slider.on('init', function() {
                gallery_slider.imagesLoaded(function() {
                    gallery_slider.prev('.slider-loader').fadeOut(200, function() {
                        $(this).remove();
                        gallery_slider.removeClass('slider-init');
                    });
                });
            });

            gallery_slider_nav.on('init', function() {
                gallery_slider_nav.imagesLoaded(function() {
                    gallery_slider_nav.removeClass('slider-init');
                });
            });

            if (bingo_ruby.body.hasClass('is-style-rtl')) {
                gallery_slider.attr('dir', 'rtl');
                gallery_slider.slick({
                    dots: true,
                    infinite: true,
                    rtl: true,
                    autoplay: bingo_ruby.auto_play,
                    autoplaySpeed: bingo_ruby.auto_play_speed,
                    speed: bingo_ruby.play_speed,
                    adaptiveHeight: false,
                    arrows: true,
                    initialSlide: thumbnail_popup_el_index,
                    lazyLoad: 'progressive',
                    asNavFor: gallery_slider_nav,
                    prevArrow: bingo_ruby.slider_prev,
                    nextArrow: bingo_ruby.slider_next
                });
            } else {
                gallery_slider.slick({
                    dots: true,
                    infinite: true,
                    autoplay: bingo_ruby.auto_play,
                    autoplaySpeed: bingo_ruby.auto_play_speed,
                    speed: bingo_ruby.play_speed,
                    adaptiveHeight: false,
                    arrows: true,
                    initialSlide: thumbnail_popup_el_index,
                    lazyLoad: 'progressive',
                    asNavFor: gallery_slider_nav,
                    prevArrow: bingo_ruby.slider_prev,
                    nextArrow: bingo_ruby.slider_next
                });
            }

            if (bingo_ruby.body.hasClass('is-style-rtl')) {
                gallery_slider_nav.attr('dir', 'rtl');
                gallery_slider_nav.slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    rtl: true,
                    arrows: false,
                    dots: false,
                    variableWidth: true,
                    adaptiveHeight: false,
                    asNavFor: gallery_slider,
                    centerMode: false,
                    focusOnSelect: true
                });
            } else {
                gallery_slider_nav.slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    variableWidth: true,
                    adaptiveHeight: false,
                    asNavFor: gallery_slider,
                    centerMode: false,
                    focusOnSelect: true
                });
            }
        },


        // video popup
        post_thumbnail_video_popup: function() {
            var post_popup = $('.post-popup-video');
            if (post_popup.length > 0) {
                post_popup.each(function() {

                    var post_popup_el = $(this);
                    var post_thumb = post_popup_el.find('.post-thumb-outer .post-format-wrap');
                    var popup_src = post_popup_el.find('.popup-thumbnail-video-outer');

                    if (popup_src.length > 0) {
                        post_thumb.magnificPopup({
                            items: {
                                src: popup_src,
                                type: 'inline',
                                preloader: false,
                                removalDelay: 500
                            },
                            callbacks: {
                                beforeOpen: function() {
                                    this.st.mainClass = 'mpf-ruby-effect';
                                }
                            }
                        });
                    }
                });
            }
        },


        // video play
        iframe_playlist_autoplay: function() {
            var auto_play = $('.video-playlist-autoplay');
            if (auto_play.length > 0) {
                auto_play.each(function() {
                    var auto_play_el = $(this);
                    bingo_ruby.waypoint_item['iframe'] = new Waypoint({
                        element: auto_play_el,
                        handler: function() {
                            var iframe = auto_play_el.find('iframe');
                            bingo_ruby.iframe_autoplay_process(iframe);
                            auto_play_el.removeClass('video-playlist-autoplay');
                            this.destroy();
                        },
                        offset: '80%'
                    });
                })
            }
        },

        // add autoplay
        iframe_autoplay_process: function(item) {
            if (item.length > 0 && 'undefined' != item[0]) {
                var src = item[0].src;
                if (src.indexOf('?') > -1) {
                    item[0].src += "&autoplay=1";
                } else {
                    item[0].src += "?autoplay=1";
                }
            }
        },


        // single video responsive
        single_video_responsive: function() {
            var entry_content = $('.entry');
            entry_content.fitVids();
        },

        // single video popup on thumbnail
        single_post_video_popup: function() {
            var video_btn = $('.single-post-popup-video-btn');
            if (video_btn.length > 0) {
                video_btn.each(function() {
                    var video_btn_el = $(this);
                    var video_popup_el = video_btn_el.next('.single-post-popup-video');
                    if (video_popup_el.length > 0) {
                        var iframe_thumb = video_popup_el.find('.post-thumb');
                        var iframe_thumb_html = iframe_thumb.html();

                        video_btn_el.magnificPopup({
                            items: {
                                src: video_popup_el,
                                type: 'inline',
                                preloader: false,
                                removalDelay: 500
                            },
                            callbacks: {
                                beforeOpen: function() {
                                    this.st.mainClass = 'mpf-ruby-effect';
                                },
                                open: function() {
                                    var iframe = iframe_thumb.find('iframe');
                                    bingo_ruby.iframe_playlist_autoplay(iframe);
                                },
                                close: function() {
                                    // reset iframe
                                    iframe_thumb.html(iframe_thumb_html);
                                }
                            }
                        });
                    }
                })
            }
        },

        // single comment box
        single_post_box_comment: function() {
            var comment_btn = $('.box-comment-btn');
            if (comment_btn.length > 0) {

                var comment_btn_wrap = comment_btn.parent('.box-comment-btn-wrap');
                var comment_content = comment_btn_wrap.next('.box-comment-content');

                $('.meta-info-comment').find('a').on('click', function() {
                    $('html, body').scrollTop(comment_btn.offset().top);
                    bingo_ruby.single_post_show_box_comment(comment_btn_wrap, comment_content);
                });

                comment_btn.on('click', function() {
                    bingo_ruby.single_post_show_box_comment(comment_btn_wrap, comment_content);
                    return false;
                })
            }
        },

        // scroll to comment
        single_scroll_to_comment: function() {
            var comment_btn = $('.box-comment-btn');
            if (comment_btn.length > 0) {
                var hash = window.location.hash;
                if ('#respond' == hash || '#comment' == hash.substring(0, 8)) {
                    var comment_btn_wrap = comment_btn.parent('.box-comment-btn-wrap');
                    var comment_content = comment_btn_wrap.next('.box-comment-content');

                    $('html, body').scrollTop(comment_btn.offset().top);
                    bingo_ruby.single_post_show_box_comment(comment_btn_wrap, comment_content);
                }

            }
        },

        // show comment box
        single_post_show_box_comment: function(comment_btn_wrap, comment_content) {
            comment_btn_wrap.fadeOut(200, function() {
                comment_btn_wrap.remove();
            });
            comment_content.delay(220).show().animate({ opacity: 1 }, 200);
            return false;
        },

        // review progress bar animation
        animation_review_progress_bar: function() {

            var progress_bar = $('.score-bar');
            progress_bar.each(function() {
                $(this).addClass('score-remove');
            });

            progress_bar.each(function() {
                var that = $(this);
                that.waypoint({
                        handler: function() {
                            that.removeClass('score-remove');
                            that.addClass('score-animation');
                        },
                        offset: '85%'
                    }
                )
            });
        },

        /** -------------------------------------------------------------------------------------------------------------------------
         * site smooth display
         */
        site_smooth_display: function() {

            if (bingo_ruby.body.hasClass('is-site-smooth-display')) {
                bingo_ruby.animated_image();
            }
        },


        /** -------------------------------------------------------------------------------------------------------------------------
         * animating images
         */
        animated_image: function() {
            $('.ruby-animated-image').each(function() {
                var that = $(this);
                if (!that.hasClass('animated-loaded')) {
                    var delay = 50 + (that.offset().left / 3.5);
                    that.waypoint({
                        handler: function() {
                            setTimeout(function() {
                                that.addClass('ruby-animation animated-loaded');
                            }, delay);
                        },
                        offset: '100%',
                        triggerOnce: true
                    });
                }
            })
        },

        // gallery single popup
        single_thumb_popup: function() {

            if (1 == bingo_ruby_single_image_popup) {
                var bingo_ruby_single_entry = $('.single .single-content-wrap');

                if (bingo_ruby_single_entry.length > 0) {
                    var bingo_ruby_single_popup_last_item = null;

                    bingo_ruby_single_entry.find('a img').each(function() {
                        var image_wrap = $(this).parent();
                        var image_link = image_wrap.attr('href');
                        if (image_link.indexOf('wp-content/uploads') > 0) {
                            image_wrap.addClass('single-popup');
                        }
                    })
                }

                bingo_ruby_single_entry.magnificPopup({
                    type: 'image',
                    removalDelay: 500,
                    mainClass: 'mfp-fade ruby-single-popup-image',
                    delegate: '.single-popup',
                    closeOnContentClick: true,
                    closeBtnInside: true,
                    gallery: {
                        enabled: true
                    },
                    zoom: {
                        enabled: true,
                        duration: 500, //  duration of the effect, in milliseconds
                        easing: 'ease' //  CSS transition easing function
                    },
                    callbacks: {
                        change: function(item) {
                            bingo_ruby_single_popup_last_item = item.el;
                            bingo_ruby.single_popup_scroll_view(item.el);
                        },
                        beforeClose: function() {
                            if (bingo_ruby_single_popup_last_item) {
                                bingo_ruby.single_popup_scroll_view(bingo_ruby_single_popup_last_item);
                            }
                        }
                    }
                });

            }
        },

        // sb instagram single popup
        sb_instagram_thumb_popup: function() {

            if (1 == bingo_ruby_sb_instagram_popup) {
                $('.sb-instagram-widget .instagram-popup-el').magnificPopup({
                    type: 'image',
                    removalDelay: 200,
                    mainClass: 'mfp-fade',
                    closeOnContentClick: true,
                    closeBtnInside: true,
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0, 1]
                    }
                });
            }

        },

        // footer instagram single popup
        footer_instagram_thumb_popup: function() {

            if (1 == bingo_ruby_tfooter_instagram_popup) {
                $('.top-footer-widget-instagram .instagram-popup-el').magnificPopup({
                    type: 'image',
                    removalDelay: 200,
                    mainClass: 'mfp-fade',
                    closeOnContentClick: true,
                    closeBtnInside: true,
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0, 1]
                    }
                });
            }

        },

        single_popup_scroll_view: function(element) {

            if (true === bingo_ruby.touch && bingo_ruby.html.width() < 992) {
                return;
            }

            bingo_ruby.html.stop();
            bingo_ruby.body.stop();

            var destination = element.offset().top;
            destination = destination - 160;

            var distance = Math.abs(bingo_ruby.html.scrollTop() - destination);

            var scrolling_time = distance / 5;

            // go to destination
            bingo_ruby.body.animate(
                { scrollTop: destination },
                {
                    duration: 700 + scrolling_time,
                    easing: 'easeInOutQuart'
                }
            );
        },


        // gallery popup
        block_popup_gallery: function() {

            // post gallery popup
            var post_gallery = $('.post-gallery');

            post_gallery.each(function() {

                var post_gallery_el = $(this);
                var post_gallery_el_index = post_gallery_el.data('post_gallery_index');
                if ('undefined' == typeof post_gallery_el_index) {
                    post_gallery_el_index = 0;
                }

                post_gallery_el.magnificPopup({
                    type: 'inline',
                    preloader: false,
                    focus: '#name',
                    closeBtnInside: true,
                    disableOn: 992,
                    removalDelay: 500,
                    callbacks: {
                        beforeOpen: function() {
                            this.st.mainClass = this.st.el.attr('data-effect');
                            if (bingo_ruby.get_width(bingo_ruby.window) < 768) {
                                this.st.focus = false;
                            }
                        },
                        open: function() {
                            var popup_content = this.content;
                            var post_slider = popup_content.find('.popup-post-gallery-slider');
                            if (post_slider.length > 0) {
                                post_slider.each(function() {
                                    var post_slider_el = $(this);
                                    bingo_ruby.block_popup_gallery_post_slider(post_slider_el);
                                })
                            }

                            // setup slider
                            var slider = popup_content.find('.popup-slider-gallery');
                            setTimeout(function() {
                                bingo_ruby.block_popup_gallery_slider(slider, post_gallery_el_index);
                            }, 200);
                        },

                        beforeClose: function() {
                            var popup_content = this.content;
                            var slider = popup_content.find('.popup-slider-gallery');
                            // unslick
                            if (slider.hasClass('slick-initialized')) {
                                setTimeout(function() {
                                    slider.slick('unslick');
                                    slider.addClass('slider-init');
                                    slider.before('<div class="slider-loader"></div>');
                                }, 500);
                            }
                        }
                    }
                });
            });
        },


        // popup gallery slider (slider for posts)
        block_popup_gallery_slider: function(slider, post_gallery_el_index) {

            slider.on('init', function() {
                slider.imagesLoaded(function() {
                    setTimeout(function() {
                        slider.prev('.slider-loader').fadeOut(200, function() {
                            $(this).remove();
                            slider.removeClass('slider-init');
                        });
                    }, 500);
                });
            });


            if (bingo_ruby.body.hasClass('is-style-rtl')) {
                slider.attr('dir', 'rtl');
                slider.slick({
                    dots: true,
                    autoplay: false,
                    rtl: true,
                    speed: bingo_ruby.play_speed,
                    initialSlide: post_gallery_el_index,
                    adaptiveHeight: false,
                    arrows: true,
                    swipe: false,
                    swipeToSlide: false,
                    touchMove: false,
                    infinite: false,
                    prevArrow: bingo_ruby.slider_popup_prev,
                    nextArrow: bingo_ruby.slider_popup_next
                });
            } else {
                slider.slick({
                    dots: true,
                    autoplay: false,
                    speed: bingo_ruby.play_speed,
                    initialSlide: post_gallery_el_index,
                    adaptiveHeight: false,
                    arrows: true,
                    swipe: false,
                    swipeToSlide: false,
                    touchMove: false,
                    infinite: false,
                    prevArrow: bingo_ruby.slider_popup_prev,
                    nextArrow: bingo_ruby.slider_popup_next
                });
            }
        },

        // slider for post gallery
        block_popup_gallery_post_slider: function(post_slider) {
            var post_slider_nav = post_slider.next('.slider-nav');

            // unlick
            if (post_slider.hasClass('slick-initialized')) {
                post_slider.slick('unslick');
            }
            if (post_slider_nav.hasClass('slick-initialized')) {
                post_slider_nav.slick('unslick');
            }

            if (bingo_ruby.body.hasClass('is-style-rtl')) {
                post_slider.attr('dir', 'rtl');
                post_slider.slick({
                    dots: true,
                    infinite: true,
                    rtl: true,
                    autoplay: bingo_ruby.auto_play,
                    autoplaySpeed: bingo_ruby.auto_play_speed,
                    speed: bingo_ruby.play_speed,
                    adaptiveHeight: false,
                    arrows: true,
                    lazyLoad: 'progressive',
                    asNavFor: post_slider_nav,
                    prevArrow: bingo_ruby.slider_prev,
                    nextArrow: bingo_ruby.slider_next
                });
            } else {
                post_slider.slick({
                    dots: true,
                    infinite: true,
                    autoplay: bingo_ruby.auto_play,
                    autoplaySpeed: bingo_ruby.auto_play_speed,
                    speed: bingo_ruby.play_speed,
                    adaptiveHeight: false,
                    arrows: true,
                    lazyLoad: 'progressive',
                    asNavFor: post_slider_nav,
                    prevArrow: bingo_ruby.slider_prev,
                    nextArrow: bingo_ruby.slider_next
                });
            }

            if (bingo_ruby.body.hasClass('is-style-rtl')) {
                post_slider_nav.attr('dir', 'rtl');
                post_slider_nav.slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    rtl: true,
                    arrows: false,
                    dots: false,
                    adaptiveHeight: false,
                    asNavFor: post_slider,
                    centerMode: false,
                    focusOnSelect: true
                });
            } else {
                post_slider_nav.slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    adaptiveHeight: false,
                    asNavFor: post_slider,
                    centerMode: false,
                    focusOnSelect: true
                });
            }
        },

        // full-width block 1 slider
        fw_block_1_slider: function() {
            var slider = $('.fw-block-1-slider');
            if (slider.length > 0) {
                slider.each(function() {

                    var slider_el = $(this);

                    slider_el.imagesLoaded(function() {
                        slider_el.prev('.slider-loader').fadeOut(200, function() {
                            $(this).remove();
                            slider_el.removeClass('slider-init');
                        });
                    });

                    if (bingo_ruby.body.hasClass('is-style-rtl')) {
                        slider_el.attr('dir', 'rtl');
                        slider_el.slick({
                            dots: true,
                            rtl: true,
                            infinite: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    } else {
                        slider_el.slick({
                            dots: true,
                            infinite: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    }
                });
            }
        },

        // full-width block 2 slider
        fw_block_2_slider: function() {
            var slider = $('.fw-block-2-slider');
            if (slider.length > 0) {
                slider.each(function() {

                    var slider_el = $(this);

                    slider_el.imagesLoaded(function() {
                        slider_el.prev('.slider-loader').fadeOut(200, function() {
                            $(this).remove();
                            slider_el.removeClass('slider-init');
                        });
                    });

                    if (bingo_ruby.body.hasClass('is-style-rtl')) {
                        slider_el.attr('dir', 'rtl');
                        slider_el.slick({
                            dots: true,
                            rtl: true,
                            infinite: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    } else {
                        slider_el.slick({
                            dots: true,
                            infinite: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    }

                });
            }
        },

        // full-width block 3 slider
        fw_block_3_slider: function() {
            var slider = $('.fw-block-3-slider');
            if (slider.length > 0) {
                slider.each(function() {

                    var slider_el = $(this);

                    slider_el.imagesLoaded(function() {
                        slider_el.prev('.slider-loader').fadeOut(200, function() {
                            $(this).remove();
                            slider_el.removeClass('slider-init');
                        });
                    });

                    if (bingo_ruby.body.hasClass('is-style-rtl')) {
                        slider_el.attr('dir', 'rtl');
                        slider_el.slick({
                            dots: false,
                            infinite: true,
                            rtl: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    } else {
                        slider_el.slick({
                            dots: false,
                            infinite: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    }
                });
            }
        },

        // full-width block 4 slider
        fw_block_4_slider: function() {
            var slider = $('.fw-block-4-slider');
            if (slider.length > 0) {
                slider.each(function() {

                    var slider_el = $(this);

                    slider_el.on('init', function() {
                        slider_el.imagesLoaded(function() {
                            slider_el.prev('.slider-loader').fadeOut(200, function() {
                                $(this).remove();
                                slider_el.removeClass('slider-init');
                            });
                        });
                    });

                    if (bingo_ruby.body.hasClass('is-style-rtl')) {
                        slider_el.attr('dir', 'rtl');
                        slider_el.slick({
                            dots: true,
                            infinite: true,
                            rtl: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            fade: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    } else {
                        slider_el.slick({
                            dots: true,
                            infinite: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            fade: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    }

                });
            }
        },

        // full-width block 5 slider
        fw_block_5_slider: function() {
            var slider = $('.fw-block-5-slider');

            if (slider.length > 0) {
                slider.each(function() {

                    var slider_el = $(this);

                    slider_el.imagesLoaded(function() {
                        slider_el.prev('.slider-loader').fadeOut(200, function() {
                            $(this).remove();
                            slider_el.removeClass('slider-init');
                        });
                    });

                    if (bingo_ruby.body.hasClass('is-style-rtl')) {
                        slider_el.attr('dir', 'rtl');
                        slider_el.slick({
                            dots: true,
                            infinite: true,
                            rtl: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    } else {
                        slider_el.slick({
                            dots: true,
                            infinite: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    }
                });
            }
        },

        // full-width block 6
        fw_block_6_slider: function() {
            var slider = $('.fw-block-6-slider');
            if (slider.length > 0) {
                slider.each(function() {

                    var slider_el = $(this);

                    slider_el.on('init', function() {
                        slider_el.imagesLoaded(function() {
                            slider_el.prev('.slider-loader').fadeOut(200, function() {
                                $(this).remove();
                                slider_el.removeClass('slider-init');
                            });
                        });
                    });

                    if (bingo_ruby.body.hasClass('is-style-rtl')) {
                        slider_el.attr('dir', 'rtl');
                        slider_el.slick({
                            dots: true,
                            rtl: true,
                            infinite: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    } else {
                        slider_el.slick({
                            dots: true,
                            infinite: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    }
                });
            }
        },

        // full-width block 7 slider
        fw_block_7_slider: function() {
            var slider = $('.fw-block-7-slider');
            if (slider.length > 0) {
                slider.each(function() {

                    var slider_el = $(this);

                    slider_el.imagesLoaded(function() {
                        slider_el.prev('.slider-loader').fadeOut(200, function() {
                            $(this).remove();
                            slider_el.removeClass('slider-init');
                        });
                    });

                    if (bingo_ruby.body.hasClass('is-style-rtl')) {
                        slider_el.attr('dir', 'rtl');
                        slider_el.slick({
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            dots: true,
                            infinite: true,
                            rtl: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next,
                            responsive: [
                                {
                                    breakpoint: 992,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                }
                            ]
                        });
                    } else {
                        slider_el.slick({
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            dots: true,
                            infinite: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next,
                            responsive: [
                                {
                                    breakpoint: 992,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                }
                            ]
                        });
                    }
                });
            }

        },

        // block related video
        block_related_video_slider: function() {
            var slider = $('.related-video-slider');
            if (slider.length > 0) {
                slider.each(function() {

                    var slider_el = $(this);

                    slider_el.on('init', function() {
                        slider_el.imagesLoaded(function() {
                            slider_el.prev('.slider-loader').fadeOut(200, function() {
                                $(this).remove();
                                slider_el.removeClass('slider-init');
                            });
                        });
                    });

                    if (slider_el.hasClass('related-video-1')) {
                        if (bingo_ruby.body.hasClass('is-style-rtl')) {
                            slider_el.slick({
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                rtl: true,
                                dots: false,
                                infinite: true,
                                autoplay: bingo_ruby.auto_play,
                                autoplaySpeed: bingo_ruby.auto_play_speed,
                                speed: bingo_ruby.play_speed,
                                adaptiveHeight: false,
                                arrows: true,
                                prevArrow: bingo_ruby.slider_prev,
                                nextArrow: bingo_ruby.slider_next,
                                responsive: [
                                    {
                                        breakpoint: 768,
                                        settings: {
                                            slidesToShow: 2
                                        }
                                    }
                                ]
                            });
                        } else {
                            slider_el.slick({
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                dots: false,
                                infinite: true,
                                autoplay: bingo_ruby.auto_play,
                                autoplaySpeed: bingo_ruby.auto_play_speed,
                                speed: bingo_ruby.play_speed,
                                adaptiveHeight: false,
                                arrows: true,
                                prevArrow: bingo_ruby.slider_prev,
                                nextArrow: bingo_ruby.slider_next,
                                responsive: [
                                    {
                                        breakpoint: 768,
                                        settings: {
                                            slidesToShow: 2
                                        }
                                    }
                                ]
                            });
                        }

                    } else {
                        if (bingo_ruby.body.hasClass('is-style-rtl')) {
                            slider_el.slick({
                                slidesToShow: 5,
                                slidesToScroll: 1,
                                rtl: true,
                                dots: false,
                                infinite: true,
                                autoplay: bingo_ruby.auto_play,
                                autoplaySpeed: bingo_ruby.auto_play_speed,
                                speed: bingo_ruby.play_speed,
                                adaptiveHeight: false,
                                arrows: true,
                                prevArrow: bingo_ruby.slider_prev,
                                nextArrow: bingo_ruby.slider_next,
                                responsive: [
                                    {
                                        breakpoint: 768,
                                        settings: {
                                            slidesToShow: 3
                                        }
                                    },
                                    {
                                        breakpoint: 480,
                                        settings: {
                                            slidesToShow: 2
                                        }
                                    }
                                ]
                            });
                        } else {
                            slider_el.slick({
                                slidesToShow: 5,
                                slidesToScroll: 1,
                                dots: false,
                                infinite: true,
                                autoplay: bingo_ruby.auto_play,
                                autoplaySpeed: bingo_ruby.auto_play_speed,
                                speed: bingo_ruby.play_speed,
                                adaptiveHeight: false,
                                arrows: true,
                                prevArrow: bingo_ruby.slider_prev,
                                nextArrow: bingo_ruby.slider_next,
                                responsive: [
                                    {
                                        breakpoint: 768,
                                        settings: {
                                            slidesToShow: 3
                                        }
                                    },
                                    {
                                        breakpoint: 480,
                                        settings: {
                                            slidesToShow: 2
                                        }
                                    }
                                ]
                            });
                        }
                    }
                });
            }
        },

        // feat slider mini
        block_mini_slider: function() {
            var slider = $('.ruby-mini-slider');
            if (slider.length > 0) {
                slider.each(function() {

                    var slider_el = $(this);

                    slider_el.imagesLoaded(function() {
                        slider_el.prev('.slider-loader').fadeOut(200, function() {
                            $(this).remove();
                            slider_el.removeClass('slider-init');
                        });
                    });

                    if (bingo_ruby.body.hasClass('is-style-rtl')) {
                        slider_el.slick({
                            dots: false,
                            infinite: true,
                            rtl: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    } else {
                        slider_el.slick({
                            dots: false,
                            infinite: true,
                            autoplay: bingo_ruby.auto_play,
                            autoplaySpeed: bingo_ruby.auto_play_speed,
                            speed: bingo_ruby.play_speed,
                            adaptiveHeight: false,
                            arrows: true,
                            prevArrow: bingo_ruby.slider_prev,
                            nextArrow: bingo_ruby.slider_next
                        });
                    }
                });
            }
        },

        // widget tabs nav
        widget_tab_nav: function() {
            var widget_tab = $('.widget-tab-nav a');
            widget_tab.click(function(e) {
                e.preventDefault();
                $(this).tab('show');
            })
        },


        // ajax
        ajax_cache: {

            // set data
            data: {},

            // get cache
            get: function(id) {
                return bingo_ruby.ajax_cache.data[id];
            },

            // set cache
            set: function(id, data) {
                bingo_ruby.ajax_cache.remove(id);
                bingo_ruby.ajax_cache.data[id] = data;
            },

            // remove cache
            remove: function(id) {
                delete bingo_ruby.ajax_cache.data[id];
            },

            // empty cache
            exist: function(id) {
                return bingo_ruby.ajax_cache.data.hasOwnProperty(id) && bingo_ruby.ajax_cache.data[id] !== null;
            }
        },

        // store default data for ajax
        ajax_data_term: function() {
            $('.ruby-block-wrap').each(function() {
                var block = $(this);
                var block_id = block.attr('id');

                if ('undefined' != typeof block_id) {
                    bingo_ruby.ajax[block_id + '_category_id'] = block.data('category_id');
                    bingo_ruby.ajax[block_id + '_category_ids'] = block.data('category_ids');
                    bingo_ruby.ajax[block_id + '_tags'] = block.data('tags');
                    bingo_ruby.ajax[block_id + '_orderby'] = block.data('orderby');
                    bingo_ruby.ajax[block_id + '_post_id'] = block.data('post_id');
                }

                // check first load
                bingo_ruby.ajax_pagination_check(block);
                bingo_ruby.ajax_loadmore_check(block);
                bingo_ruby.ajax_infinite_scroll_check(block);
            })
        },

        // re initiate all function after ajax
        ajax_reinitiate_function: function() {

            // remove event handle
            bingo_ruby.html.off();
            bingo_ruby.document.off();

            // reload function
            bingo_ruby.document_reload();
        },

        // refreshAll waypoint
        waypoint_refresh: function() {
            bingo_ruby.body.imagesLoaded(function() {
                setTimeout(function() {
                    Waypoint.refreshAll();
                }, 200);
            })
        },

        ajax_header_search: function() {

            var delay = (function() {
                var timer = 0;
                return function(callback, ms) {
                    clearTimeout(timer);
                    timer = setTimeout(callback, ms);
                };
            })();

            var search_result_wrapper = $('.header-search-result');
            $('#ruby-search-input').keyup(function() {
                var param = $(this).val();

                delay(function() {
                    if (param) {
                        search_result_wrapper.fadeIn(300).html('<div class="ajax-loader"></div>');
                        var data = {
                            action: 'bingo_ruby_ajax_search',
                            s: param
                        };
                        $.post(bingo_ruby_ajax_url, data, function(data_response) {
                            data_response = $.parseJSON(data_response);
                            search_result_wrapper.hide().empty().html(data_response).css('height', 'auto').fadeIn(300).css('height', search_result_wrapper.height());
                        });
                    } else  search_result_wrapper.fadeOut(300, function() {
                        $(this).empty().css('height', 'auto');
                    });

                }, 450);
            })
        },

        ajax_block_data: function(block) {
            var param = {};
            param.block_id = block.data('block_id');
            param.block_name = block.data('block_name');
            param.posts_per_page = block.data('posts_per_page');
            param.ajax_dropdown = block.data('ajax_dropdown');
            param.block_page_max = block.data('block_page_max');
            param.block_page_current = block.data('block_page_current');
            param.category_id = block.data('category_id');
            param.category_ids = block.data('category_ids');
            param.orderby = block.data('orderby');
            param.authors = block.data('authors');
            param.tags = block.data('tags');
            param.post_id = block.data('post_id');
            param.offset = block.data('offset');
            param.excerpt = block.data('excerpt');
            param.excerpt_classic = block.data('excerpt_classic');
            param.block_style = block.data('block_style');
            param.thumb_position = block.data('thumb_position');
            param.summary_type = block.data('summary_type');

            return param;
        },

        ajax_dropdown_filter: function() {

            $('.ajax-filter-link').off('click').on('click', function(e) {

                e.preventDefault();
                e.stopPropagation();

                var filter_link = $(this);
                var block = filter_link.parents('.ruby-block-wrap');
                var block_id = block.attr('id');

                if (true == bingo_ruby.ajax[block_id + '_processing']) {
                    return;
                }

                var filter_link_val = filter_link.data('ajax_filter_val');
                bingo_ruby.ajax[block_id + '_processing'] = true;

                // disable other link
                block.find('.ajax-link').removeClass('is-active');
                block.find('.ajax-link').not(this).addClass('is-disable');
                block.find('.ajax-filter-more').addClass('is-disable');
                filter_link.addClass('is-active');

                // add animation
                bingo_ruby.ajax_animation_start(block);

                // set param
                var param = bingo_ruby.ajax_block_data(block);
                bingo_ruby.ajax_dropdown_reset_param(block, param, filter_link_val);

                // processing ajax
                setTimeout(function() {
                    bingo_ruby.ajax_dropdown_filter_process(block, param);
                }, 500);

            });
        },

        // reset param when filter
        ajax_dropdown_reset_param: function(block, param, filter_link_val) {

            param.block_page_current = 1;

            block.data('block_page_current', 1);
            var block_id = block.attr('id');

            if ('category' == param.ajax_dropdown) {

                // remove category id
                if ('undefined' == typeof (bingo_ruby.ajax[block_id + '_category_id'])) {
                    bingo_ruby.ajax[block_id + '_category_id'] = 0;
                }

                if (0 == filter_link_val) {
                    param.category_id = bingo_ruby.ajax[block_id + '_category_id'];
                    param.category_ids = bingo_ruby.ajax[block_id + '_category_ids'];

                    block.data('category_id', bingo_ruby.ajax[block_id + '_category_id']);
                    block.data('category_ids', bingo_ruby.ajax[block_id + '_category_ids']);
                } else {

                    param.category_id = filter_link_val;
                    param.category_ids = 0;

                    block.data('category_id', filter_link_val);
                    block.data('category_ids', 0);
                }
            }

            if ('tag' == param.ajax_dropdown) {
                param.tags = filter_link_val;
                block.data('tags', filter_link_val);
            }

            if ('author' == param.ajax_dropdown) {
                param.authors = filter_link_val;
                block.data('authors', filter_link_val);
            }

            if ('popular' == param.ajax_dropdown) {

                // store orderby
                block.data('orderby_term', block.data('orderby'));

                if ('featured' == filter_link_val) {
                    param.tags = 'featured';
                    block.data('tags', 'featured');
                    block.data('orderby', 'date_post');
                }

                if ('popular' == filter_link_val) {
                    param.tags = null;
                    param.orderby = 'popular';
                    block.data('orderby', 'popular');
                    block.data('tags', '');
                }

                if (0 == filter_link_val) {
                    param.tags = bingo_ruby.ajax[block_id + '_tags'];
                    param.orderby = bingo_ruby.ajax[block_id + '_orderby'];
                    block.data('tags', bingo_ruby.ajax[block_id + '_tags']);
                    block.data('orderby', bingo_ruby.ajax[block_id + '_orderby']);
                }
            }
        },

        // request ajax dropdown
        ajax_dropdown_filter_process: function(block, param) {
            // create cache id
            var param_cache = param;
            delete param_cache.block_page_max;
            var cache_id = JSON.stringify(param_cache);

            // check cache
            if (bingo_ruby.ajax_cache.exist(cache_id)) {
                var data = bingo_ruby.ajax_cache.get(cache_id);
                if ('undefined' != data.block_page_max) {
                    block.data('block_page_max', data.block_page_max);
                }

                bingo_ruby.ajax_animation_end(block, data.content);
                return false;
            }

            $.ajax({
                type: 'POST',
                url: bingo_ruby_ajax_url,
                data: {
                    action: 'bingo_ruby_ajax_filter_data',
                    data: param
                },
                success: function(data) {
                    // parse data
                    data = $.parseJSON(data);

                    if ('undefined' != data.block_page_max) {
                        block.data('block_page_max', data.block_page_max);
                    }

                    // set cache
                    bingo_ruby.ajax_cache.set(cache_id, data);

                    // append content
                    bingo_ruby.ajax_animation_end(block, data.content);
                }
            });
        },

        // add animation at start
        ajax_animation_start: function(block) {

            var content_wrap = block.find('.block-content-wrap');
            var content_inner = content_wrap.find('.block-content-inner');

            // hide content
            content_inner.stop();
            $('.ajax-loader').remove();

            // add height for ajax
            var content_inner_height = content_inner.height();
            content_inner.css('height', content_inner_height);

            // add loading tag
            content_wrap.prepend('<div class="ajax-loader">');
            content_inner.addClass('is-overflow');
            content_inner.fadeTo('500', 0.05, 'easeInOutCubic');
        },


        // add animation and append
        ajax_animation_end: function(block, content) {

            block.delay(100).queue(function() {

                // remove disable
                block.find('.ajax-link').removeClass('is-disable');
                block.find('.ajax-filter-more').removeClass('is-disable');

                var block_id = block.attr('id');
                var content_wrap = block.find('.block-content-wrap');
                var content_inner = content_wrap.find('.block-content-inner');

                content_wrap.find('.ajax-loader').remove();
                content_inner.stop();
                content_inner.html(content);

                // append content
                content_inner.fadeTo(500, 1, function() {
                    bingo_ruby.site_smooth_display();
                });

                content_inner.removeClass('is-overflow');
                setTimeout(function() {
                    content_inner.css('height', 'auto');
                }, 100);

                // set ajax
                bingo_ruby.ajax[block_id + '_processing'] = false;

                // check ajax after load
                bingo_ruby.ajax_pagination_check(block);
                bingo_ruby.ajax_loadmore_check(block);
                bingo_ruby.ajax_infinite_scroll_check(block);

                block.dequeue();
            });
        },


        ajax_pagination: function() {

            $('.ajax-pagination-link').off('click').on('click', function(e) {

                e.preventDefault();
                e.stopPropagation();

                var link = $(this);
                var block = link.parents('.ruby-block-wrap');
                var block_id = block.attr('id');

                if (true == bingo_ruby.ajax[block_id + '_processing']) {
                    return;
                }

                // disable click on button
                bingo_ruby.ajax[block_id + '_processing'] = true;

                // disable block
                block.find('.ajax-link').not(this).addClass('is-disable');
                block.find('.ajax-filter-more').addClass('is-disable');

                var pagination_link_val = link.data('ajax_pagination_link');
                var param = bingo_ruby.ajax_block_data(block);

                // start animation
                bingo_ruby.ajax_animation_start(block);

                // processing ajax
                setTimeout(function() {
                    bingo_ruby.ajax_pagination_process(block, param, pagination_link_val);
                }, 200);
            });
        },

        // ajax pagination processing
        ajax_pagination_process: function(block, param, pagination_link_val) {

            var page_current = param.block_page_current;
            if ('prev' == pagination_link_val) {
                --page_current;
            } else {
                ++page_current
            }

            // set next page
            param.block_page_next = page_current;

            // set cache
            var param_cache = param;
            delete param_cache.block_page_max;
            param_cache.block_page_current = page_current;

            var cache_id = JSON.stringify(param_cache);
            // check cache
            if (bingo_ruby.ajax_cache.exist(cache_id)) {
                var data = bingo_ruby.ajax_cache.get(cache_id);

                // set current page
                if ('undefined' != data.block_page_current) {
                    block.data('block_page_current', data.block_page_current);
                }
                bingo_ruby.ajax_animation_end(block, data.content);
                return false;
            }

            // ajax request
            $.ajax({
                type: 'POST',
                url: bingo_ruby_ajax_url,
                data: {
                    action: 'bingo_ruby_pagination_data',
                    data: param
                },

                success: function(data) {
                    // parse data
                    data = $.parseJSON(data);

                    // set current page
                    if ('undefined' != data.block_page_current) {
                        block.data('block_page_current', data.block_page_current);
                    }

                    // set cache
                    bingo_ruby.ajax_cache.set(cache_id, data);

                    // append content
                    bingo_ruby.ajax_animation_end(block, data.content);
                }
            });
        },

        // check enable or disable next prev
        ajax_pagination_check: function(block) {

            var param = bingo_ruby.ajax_block_data(block);

            // disable if max page < 2
            if (param.block_page_max < 2) {
                block.find('.ajax-pagination-link').addClass('is-disable');
            }

            if (param.block_page_current >= param.block_page_max) {
                block.find('.ajax-next').addClass('is-disable');
            }

            if (param.block_page_current <= 1) {
                block.find('.ajax-prev').addClass('is-disable');
            }
        },

        ajax_loadmore: function() {

            //  on click initialize ajax pagination
            $('.ajax-loadmore-link').off('click').on('click', function(e) {

                e.preventDefault();
                e.stopPropagation();

                var link = $(this);
                var block = link.parents('.ruby-block-wrap');
                var block_id = block.attr('id');

                if (true == bingo_ruby.ajax[block_id + '_processing']) {
                    return;
                }

                var param = bingo_ruby.ajax_block_data(block);

                // check return
                if (param.block_page_current >= param.block_page_max) {
                    return;
                }

                // disable click on button
                bingo_ruby.ajax[block_id + '_processing'] = true;

                var animation = link.next('.ajax-animation');

                // animation button
                link.animate({ opacity: 0 }, 200);

                setTimeout(function() {
                    animation.css({ 'display': 'block' });
                    animation.css({ 'visibility': 'visible' });
                    animation.delay(200).animate({ opacity: 1 }, 200);
                }, 100);

                setTimeout(function() {
                    bingo_ruby.ajax_loadmore_process(block, param);
                }, 200);
            })
        },

        // ajax load more processing
        ajax_loadmore_process: function(block, param) {

            var block_id = block.attr('id');
            var page_current = param.block_page_current;
            var page_next = ++page_current;

            // set next page
            param.block_page_next = page_next;

            // ajax request
            if (page_next <= param.block_page_max) {

                $.ajax({
                    type: 'POST',
                    url: bingo_ruby_ajax_url,
                    data: {
                        action: 'bingo_ruby_pagination_data',
                        data: param
                    },

                    success: function(data) {
                        // parse data
                        data = $.parseJSON(data);

                        // set current page
                        if ('undefined' != data.block_page_current) {
                            block.data('block_page_current', data.block_page_current);
                        }

                        // append content
                        block.find('.block-content-inner').append(data.content);

                        // disable click on button
                        bingo_ruby.ajax[block_id + '_processing'] = false;

                        // reload
                        setTimeout(function() {
                            bingo_ruby.ajax_reinitiate_function();
                        }, 400);

                        // show load more
                        if (data.block_page_current < param.block_page_max) {

                            // hide loading
                            var animation = block.find('.ajax-animation');
                            animation.css({ 'display': 'none' });
                            animation.css({ 'visibility': 'hidden' });
                            animation.css({ 'opacity': 0 });

                            // show link
                            block.find('.ajax-loadmore-link').delay(100).animate({ opacity: .4 }, 200);
                        } else {
                            // check loadmore
                            block.find('.ajax-loadmore-link').hide();
                            block.find('.ajax-animation').hide();
                        }
                    }
                });
            }
        },

        // check enable or disable loadmore
        ajax_loadmore_check: function(block) {

            var param = bingo_ruby.ajax_block_data(block);
            if (param.block_page_current >= param.block_page_max || param.block_page_max <= 1) {
                block.find('.ajax-loadmore-link').hide();
                block.find('.ajax-animation').hide();
            } else {
                block.find('.ajax-loadmore-link').css('opacity', .4);
                block.find('.ajax-loadmore-link').show();
            }
        },

        ajax_infinite_scroll: function() {

            var infinite_scroll = $('.ajax-infinite-scroll');
            if (infinite_scroll.length > 0) {

                infinite_scroll.each(function() {
                    var infinite_scroll_el = $(this);
                    if (!infinite_scroll_el.hasClass('is-disable')) {
                        var animation = infinite_scroll_el.find('.ajax-animation');
                        var block = infinite_scroll_el.parents('.ruby-block-wrap');
                        var block_id = block.attr('id');
                        bingo_ruby.waypoint_item['infinite_scroll'] = new Waypoint({

                            element: infinite_scroll_el,
                            handler: function(direction) {
                                if ('down' == direction) {

                                    var param = bingo_ruby.ajax_block_data(block);

                                    // check return
                                    if (param.block_page_current >= param.block_page_max) {
                                        infinite_scroll_el.remove();
                                        return;
                                    }

                                    if (true == bingo_ruby.ajax[block_id + '_processing']) {
                                        return;
                                    }

                                    // disable click on button
                                    bingo_ruby.ajax[block_id + '_processing'] = true;

                                    // animation button
                                    setTimeout(function() {
                                        animation.css({ 'display': 'block' });
                                        animation.css({ 'visibility': 'visible' });
                                        animation.animate({ opacity: 1 }, 200);
                                    }, 100);

                                    setTimeout(function() {
                                        bingo_ruby.ajax_loadmore_process(block, param);
                                        bingo_ruby.waypoint_item['infinite_scroll'].destroy();
                                    }, 200);
                                }
                            },
                            offset: '99%'
                        })
                    }
                });
            }
        },

        // check enable or disable infinite scroll
        ajax_infinite_scroll_check: function(block) {
            var param = bingo_ruby.ajax_block_data(block);
            if (param.block_page_current >= param.block_page_max || param.block_page_max <= 1) {
                block.find('.ajax-infinite-scroll').addClass('is-disable');
            } else {
                block.find('.ajax-infinite-scroll').removeClass('is-disable');
            }
        },

        ajax_mega_cat_sub: function() {
            // set param
            var hover_timer;
            var cat_sub = $('.mega-category-menu .menu-item');
            cat_sub.hover(function(event) {

                event.stopPropagation();
                cat_sub = $(this);
                cat_sub.addClass('is-current-sub').siblings().removeClass('is-current-sub current-menu-item');
                var wrapper = cat_sub.parents('.mega-category-menu');
                var block = wrapper.find('.block-mega-menu-sub');
                hover_timer = setTimeout(function() {
                    bingo_ruby.ajax_cat_sub_process(cat_sub, block);
                }, 200);
            }, function(event) {
                clearTimeout(hover_timer);
            });
        },

        // ajax subcategory processing
        ajax_cat_sub_process: function(cat_sub, block) {

            var param = bingo_ruby.ajax_block_data(block);
            // get param
            param.category_id = cat_sub.data('mega_sub_filter');
            param.block_page_current = 1;

            // set block id
            block.data('category_id', param.category_id);
            block.data('block_page_current', param.block_page_current);
            // add animation
            bingo_ruby.ajax_animation_start(block);

            // processing ajax
            setTimeout(function() {
                bingo_ruby.ajax_dropdown_filter_process(block, param);
            }, 250);
        },

        ajax_video_playlist: function() {

            var video_iframe_nav = $('.video-playlist-iframe-nav-el .post-wrap');
            video_iframe_nav.off('click').on('click', function(e) {

                if ($(e.target).hasClass('post-title-link')) {

                    // navigate if lick on title
                    e.stopPropagation();
                } else {

                    e.preventDefault();
                    e.stopPropagation();

                    var data = '';
                    var post_nav = $(this).parents('.video-playlist-iframe-nav-el');
                    var post_id = post_nav.data('post_video_nav_id');
                    var playlist = post_nav.parents('.video-playlist-wrap');
                    var cache_id = 'video_playlist_' + post_id;

                    // star animation
                    bingo_ruby.ajax_video_playlist_animation_start(playlist);

                    if (bingo_ruby.ajax_cache.exist(cache_id)) {

                        data = bingo_ruby.ajax_cache.get(cache_id);
                        bingo_ruby.ajax_video_playlist_process(playlist, data)
                    } else {
                        // ajax request
                        $.ajax({
                            type: 'POST',
                            url: bingo_ruby_ajax_url,
                            data: {
                                action: 'bingo_ruby_ajax_playlist_video',
                                post_id: post_id
                            },

                            success: function(data) {
                                // parse data
                                data = $.parseJSON(data);
                                // set cache
                                bingo_ruby.ajax_cache.set(cache_id, data);
                                bingo_ruby.ajax_video_playlist_process(playlist, data)
                            }
                        });
                    }
                    return false;
                }
            })
        },


        // ajax video playlist processing
        ajax_video_playlist_process: function(playlist, data) {

            var playlist_iframe = playlist.find('.video-playlist-iframe');
            // append html
            var iframe_outer = playlist.find('.video-playlist-iframe-el');
            iframe_outer.html(data);

            var iframe = iframe_outer.find('iframe');
            if (iframe.length > 0 && 'undefined' != iframe[0]) {
                var src = iframe[0].src;
                if (src.indexOf('?') > -1) {
                    iframe[0].src += "&autoplay=1";
                } else {
                    iframe[0].src += "?autoplay=1";
                }
            }

            // remove loader
            setTimeout(function() {
                playlist_iframe.find('.video-loader').fadeTo(500, .05, function() {
                    $(this).remove();
                });
                playlist_iframe.css('height', 'auto');
            }, 100)
        },

        // video playlist animation start
        ajax_video_playlist_animation_start: function(playlist) {

            var playlist_iframe = playlist.find('.video-playlist-iframe');
            var iframe_outer = playlist.find('.video-playlist-iframe-el');
            var iframe_height = playlist_iframe.height();

            playlist_iframe.css('height', iframe_height);
            playlist_iframe.prepend('<div class="video-loader"></div>');
            iframe_outer.empty();
        },


        ajax_single_box_related: function() {

            var related_scroll = $('.related-infinite-scroll');
            if (related_scroll.length > 0) {

                var block = related_scroll.parents('.single-post-box-related');
                var param = {};
                var animation = related_scroll.find('.ajax-animation');

                param.related_style = block.data('related_style');
                param.related_page_current = block.data('related_page_current');
                param.related_page_max = block.data('related_page_max');
                param.related_post_id = block.data('related_post_id');

                bingo_ruby.waypoint_item['related_scroll'] = new Waypoint({
                    element: related_scroll,
                    handler: function(direction) {
                        if ('down' == direction) {

                            // check return
                            if (param.related_page_current >= param.related_page_max) {
                                related_scroll.remove();
                                return;
                            }

                            if (true == bingo_ruby.ajax['ajax_related_processing']) {
                                return;
                            }

                            // disable click on button
                            bingo_ruby.ajax['ajax_related_processing'] = true;

                            // animation button
                            setTimeout(function() {
                                animation.css({ 'display': 'block' });
                                animation.css({ 'visibility': 'visible' });
                                animation.animate({ opacity: 1 }, 200);
                            }, 100);

                            setTimeout(function() {
                                bingo_ruby.ajax_single_box_related_process(block, param);
                                bingo_ruby.waypoint_item['related_scroll'].destroy();
                            }, 200);
                        }
                    },
                    offset: '99%'
                })
            }
        },

        // ajax single related processing
        ajax_single_box_related_process: function(block, param) {

            // set next page
            var page_current = param.related_page_current;
            var page_next = ++page_current;
            param.related_page_next = page_next;

            // ajax request
            if (page_next <= param.related_page_max) {
                $.ajax({
                    type: 'POST',
                    url: bingo_ruby_ajax_url,
                    data: {
                        action: 'bingo_ruby_related_data',
                        data: param
                    },

                    success: function(data) {
                        // parse data
                        data = $.parseJSON(data);

                        // set current page
                        if ('undefined' != data.related_page_current) {
                            block.data('related_page_current', data.related_page_current);
                        }

                        // append content
                        block.find('.box-related-content').append(data.content);

                        // reload
                        setTimeout(function() {
                            bingo_ruby.ajax_reinitiate_function();
                        }, 400);

                        // disable click on button
                        bingo_ruby.ajax['ajax_related_processing'] = false;
                        if (data.related_page_current < param.related_page_max) {
                            // hide loading
                            var animation = block.find('.ajax-animation');
                            animation.css({ 'display': 'none' });
                            animation.css({ 'visibility': 'hidden' });
                            animation.css({ 'opacity': 0 });

                        } else {
                            block.find('.ajax-animation').hide();
                        }
                    }
                });
            }
        }

        // end of object
    };

    $(document).ready(function() {
        bingo_ruby.document_ready();
        bingo_ruby.document_load();
        bingo_ruby.document_reload();
        bingo_ruby.document_resize();
    });

})(jQuery);