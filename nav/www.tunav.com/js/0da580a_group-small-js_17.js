// Animsition
var Animsition = function() {
    "use strict";

    // Handle Animsition Function
    var handleAnimsitionFunction = function() {
        $(document).ready(function() {
            $(".animsition").animsition({
                inClass: 'fade-in',
                outClass: 'fade-out',
                inDuration: 1500,
                outDuration: 800,
                loading: true,
                loadingParentElement: 'body',
                loadingClass: 'animsition-loading',
                // loadingInner: '', // e.g '<img src="loading.svg" />'
                timeout: false,
                timeoutCountdown: 5000,
                onLoadEvent: true,
                browser: [
                    'animation-duration',
                    '-webkit-animation-duration',
                    '-moz-animation-duration',
                    '-o-animation-duration'
                    ],
                overlay: false,
                overlayClass: 'animsition-overlay-slide',
                overlayParentElement: 'body',
                transition: function(url){ window.location.href = url; }
            });
        });
    }

    return {
        init: function() {
            handleAnimsitionFunction(); // initial setup for animsition function
        }
    }
}();

$(document).ready(function() {
    Animsition.init();
});
// Comment
var Comment = function() {
    "use strict";

    // Handle Comment Form
    var handleCommentForm = function() {
        $().ready(function() {
            // validate the comment form when it is submitted
            $("#comment-form").validate();
        });
    }

    return {
        init: function() {
            handleCommentForm(); // initial setup for comment form
        }
    }
}();

$(document).ready(function() {
    Comment.init();
});
// Header Sticky
var HeaderSticky = function() {
    'use strict';

    // Handle Header Sticky
    var handleHeaderSticky = function() {
        // On loading, check to see if more than 15px, then add the class
        if ($('.header-sticky').offset().top > 15) {
            $('.header-sticky').addClass('header-shrink');
        }

        // On scrolling, check to see if more than 15px, then add the class
        $(window).on('scroll', function() {
            if ($('.header-sticky').offset().top > 15) {
                $('.header-sticky').addClass('header-shrink');
            } else {
                $('.header-sticky').removeClass('header-shrink');
            }
        });
    }

    return {
        init: function() {
            handleHeaderSticky(); // initial setup for header sticky
        }
    }
}();

$(document).ready(function() {
    HeaderSticky.init();
});
$(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.js-back-to-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('back-to-top-is-visible') : $back_to_top.removeClass('back-to-top-is-visible back-to-top-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('back-to-top-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });
});

// Cube Portfolio
var Portfolio = function() {
    "use strict";

    // Handle Portfolio 4 Columns Fullwidth
    var handlePortfolio4ColFullwidth = function() {
        $('#portfolio-4-col-fullwidth').cubeportfolio({
            filters: '#portfolio-4-col-fullwidth-filter',
            layoutMode: 'grid',
            defaultFilter: '*',
            animationType: 'rotateRoom',
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 1500,
                cols: 4
            }, {
                width: 1100,
                cols: 4
            }, {
                width: 800,
                cols: 3
            }, {
                width: 550,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
            caption: ' ',
            displayType: 'bottomToTop',
            displayTypeSpeed: 100,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        });
    }

    return {
        init: function() {
            handlePortfolio4ColFullwidth(); // initial setup for portfolio 4 columns fullwidth
        }
    }
}();

$(document).ready(function() {
    Portfolio.init();
});

// Scrollbar
var Scrollbar = function() {
    "use strict";

    // Handle Scrollbar Linear
    var handleScrollbarLinear = function() {
        $(".scrollbar").mCustomScrollbar({
            theme: "minimal-dark"
        });
    }

    return {
        init: function() {
            handleScrollbarLinear(); // initial setup for scrollbar linear
        }
    }
}();

$(document).ready(function() {
    Scrollbar.init();
});

// Wow
var Wow = function() {
    "use strict";

    // Handle Wow
    var handleWow = function() {
        var wow = new WOW({
		    boxClass:     'wow',      // animated element css class (default is wow)
		    offset:       0,          // distance to the element when triggering the animation (default is 0)
		    mobile:       false,      // trigger animations on mobile devices (true is default)
		    tablet:       false       // trigger animations on tablet devices (true is default)
		});
		wow.init();
    }

    return {
        init: function() {
            handleWow(); // initial setup for counter
        }
    }
}();

$(document).ready(function() {
    Wow.init();
});