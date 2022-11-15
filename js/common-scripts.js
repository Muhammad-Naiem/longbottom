(function ($) {
    $(function () {



        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
        });

        $(".sub-nav").parent("li").addClass("has-sub-nav");
        $(".has-sub-nav").each(function () {
            var $$this = $(this);
            
            if ($(window).width() > 1024) {
                $$this.find('> a').mouseenter(function () {
                    $$this.find('.sub-nav').fadeIn();
                })
                $$this.mouseleave(function () {
                    $('.sub-nav').fadeOut();
                })
            }
            if ($(window).width() < 1025) {
                $$this.find('> a').click(function (e) {
                    e.preventDefault();
                    $$this.find('.sub-nav').slideToggle();
                })
               
            }
            
            
        })

        $('.cart-trigger').click(function () {
            $("body").addClass("cart-shown");
        });

        $('.close-area').click(function () {
            $("body").removeClass("cart-shown");
        });
        $('.cart-close, .cart-wrap').click(function () {
            $("body").removeClass("cart-shown");
        });
        $('.cart-main-wrap').click(function (e) {
            e.stopPropagation();
        });

        if ($('.cart-wrap').length) {
            $(window).on('load resize', function () {
                var cartTopHeight = $('.cart-header').outerHeight(),
                    windowHeight = $(window).outerHeight(),
                    windowNeedHeight = windowHeight - cartTopHeight,
                    bottomPadding = $('.cart-bottom').outerHeight();
                $('.cart-main').css({
                    'height': windowNeedHeight,
                    'padding-bottom': bottomPadding
                })
            })
        }


        //  venue-carousel function 
        if ($('.quote-slider-wrap').length) {
            $('.quote-slider-wrap').slick({
                dots: true,
                arrows: false,
                autoplay: false,
                infinite: true,
                navigation: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,

            });
        }
        if ($('.right-inner-slider-wrap').length) {
            $('.right-inner-slider-wrap').slick({
                dots: true,
                arrows: true,
                autoplay: false,
                infinite: true,
                navigation: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('.arrow-prev'),
                nextArrow: $('.arrow-next'),
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                     }

                    ]
            });
        }
        if ($('.recipes-tab-item').length) {
            $('.recipes-tab-item').slick({
                dots: false,
                arrows: false,
                autoplay: false,
                infinite: false,
                navigation: false,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                     },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                     }

                    ]
            });
        }
        if ($('.insta-slider-wrap').length) {
            $('.insta-slider-wrap').slick({
                dots: false,
                arrows: false,
                autoplay: false,
                infinite: true,
                navigation: false,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                     },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                     }

                    ]
            });
        }
        // End venue-carousel function 


        //FAQs Accordion Function
        $(".accordion-item").each(function () {
            var $this = $(this);
            $this.find(" > h5").on("click touch", function () {
                $(".accordion-item").removeClass("active")
                $(".accordion-item .accordion-text").slideUp();
                if ($this.find(".accordion-text:visible").length) {
                    $(".accordion-item").removeClass("active")
                    $(".accordion-item .accordion-text").slideUp();
                } else {
                    $this.addClass("active")
                    $(".accordion-item .accordion-text").slideUp();
                    $this.find(" > .accordion-text").slideDown();
                }
            })
        })

        if ($(window).width() <= 768) {
            $(".accordion-nav").each(function () {
                var $this = $(this);
                $this.on("click touch", function () {
                    $(".accordion-nav").removeClass("active");
                    $(".accordion-content").slideUp();
                    if ($this.parent().find(".accordion-content:visible").length) {
                        $(".accordion-item").removeClass("active");
                        $(".accordion-content").slideUp();
                    } else {
                        $this.addClass("active");
                        $this.parent().find(" > .accordion-content").slideDown();
                    }
                })
            })
        }
        
        $(window).on('load', function () {
            var totalHeight = $('#scroll-container').outerHeight()
            $('body').css('height', totalHeight);
            console.log(totalHeight)
        })
        
        //Animate heading
        if ($('.reveal-text').length) {
            $(window).on('load', function () {
                var res = Splitting({
                    target: '.reveal-text',
                    by: 'lines',
                });
                Splitting();
                res.forEach((splitResult) => {
                    const wrappedLines = splitResult.lines.map((wordsArr) => `
            <span class="line"><span class="mask-up">
            ${wordsArr.map((word) => `${word.outerHTML}<span class="whitespace">
            </span>`).join('')}
            </span></span>`).join('');
                    splitResult.el.innerHTML = wrappedLines;
                });
                inView.threshold(0.75);
                inView(".reveal-text").on("enter", function (el) {
                    if (!el.classList.contains("has-animated")) {
                        anime({
                            targets: el.querySelectorAll(".mask-up"),
                            translateY: ["100%", "0%"],
                            duration: 700,
                            delay: anime.stagger(200),
                            easing: "easeOutQuad",
                            autoplay: true
                        });
                        el.classList.add("has-animated");
                    }
                });
            })
        }
        
        
            $('.products-item .products-item-thumb').on('click', function(e){
                e.preventDefault()
                $('.viewport').addClass('circularAnim')
                $('.viewport').removeClass('circularAnimHidden')
                setTimeout(function(){
                    $('.viewport').addClass('circularAnimAll')
                    setTimeout(function(){
                        $('.viewport').addClass('circularAnimAllStart')
                        
                        setTimeout(function(){
                            $('.viewport').addClass('circularAnimHidden')
                            setTimeout(function(){
                                $('.viewport').removeClass('circularAnim circularAnimAll circularAnimAllStart')
                            }, 100)
                        }, 300)
                        
                    }, 100)
                }, 600)
            })
      
       var mac = 0;
       if (navigator.userAgent.indexOf('Mac') > 0) {
           mac = 1;
       } else {
           mac = 0;
       }
       if (1 == mac) {
           $('body').addClass('mac-os');
       } else {
           $("body").addClass('win-os');
       } 
        

    }) // End ready function.

})(jQuery)

function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}

