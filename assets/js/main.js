(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();
        if (window.matchMedia('(max-width: 991.98px)').matches) {
            $('.dropdown_wrap>a').click(function(e) {
                e.preventDefault();
                var $this = $(this);
                // $('.drop_box>a').removeClass('open');
                // $this.toggleClass('open');

                if ($this.next().hasClass('show')) {
                    $this.next().removeClass('show');
                    $this.next().slideUp();
                    $('.drop_box>a').removeClass('open');
                    
                } else {
                    $this.parent().parent().find('ul, .mega_wrapper').removeClass('show');
                    $this.parent().parent().find('ul, .mega_wrapper').slideUp();
                    $this.next().toggleClass('show');
                    $this.next().slideToggle();
                    $('.menu_img').addClass('d-none');

                }
            });

            $('.filter_toggle').click(function() {
                $(this).next().slideToggle();
            });  
        }
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll <= 20) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        });        

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .menu_wrapper, header').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });  

        $('.nice_select').niceSelect();
      

        // slider
        $('.owl-carousel.slider4').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            nav: true,
            dots: false,
            navText: [
                '<i class="far fa-arrow-left"></i>',
                '<i class="far fa-arrow-right"></i>'
            ],
            responsive:{
                0:{
                   items: 1,
                   margin: 25,
                },
                576:{
                    items: 1,
                    margin: 25,
                    stagePadding: 80,
                },
                768:{
                    items: 1,
                    margin: 25,
                    stagePadding: 100,
                },
                992:{
                    items: 2,
                    margin: 22,
                },
                1200:{
                    items: 2,
                    margin: 28,
                },
                1920:{
                    items: 2,
                    margin: 37, 
                }
            }
        });


        $('.play_btn').magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube: {
                      index: 'youtube.com/', 

                      id: 'v=',
                      src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    },
                },

              srcAction: 'iframe_src',
            }
        });

        // magnific
        $('.lightshot_open').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true,
            }
        });



    });

})(jQuery);