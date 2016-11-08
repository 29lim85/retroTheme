jQuery(document).ready(function() {
    ! function($) {
        //prevents js conflicts
        "use strict";

        function go_to_anchor(target) {
            var offset = parseInt($('body').css('paddingTop'));
            $('html, body').animate({
                'scrollTop': $(target).offset().top - offset
            }, 700, 'swing');
            return false;
        }

        $('a[href*="#"]').on('click', function(e) {
            if ($(this).attr('data-toggle') || !this.hash ||
                $(this).hasClass("carousel-control")) {
                return;
            }

            e.preventDefault();
            var target = $(this).attr('href');

            if (target.indexOf(this.hash) != 0)
                window.location = target;

            return go_to_anchor(this.hash);
        });

        if (window.location.hash) {
            return go_to_anchor('#' + window.location.hash.slice(1));
        }
    }(window.jQuery);
});
