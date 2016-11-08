jQuery(document).ready(function() {
    var navOffset = jQuery("#nav-wrap").offset().top;
    jQuery("#nav-wrap").wrap('<div class="nav-placeholder"></div>');
    jQuery(".nav-placeholder").height(jQuery("#nav-wrap").outerHeight());

    jQuery(window).scroll(function() {
        var scrollPos = jQuery(window).scrollTop();

        if (scrollPos >= navOffset) {
            jQuery("#nav-wrap").addClass("fixed");
        } else {
            jQuery("#nav-wrap").removeClass("fixed");
        }

    });


});
