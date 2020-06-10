/*====================================================
                        SERVICES
/*====================================================*/

$(function () {
    //animate on scroll
    new WOW().init();
});

/*====================================================
                        WORK
/*====================================================*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});


/*====================================================
                        TEAM
/*====================================================*/
$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
		    },
            
		    480: {
                items: 2
		    },
            
		    768: {
                items: 3
		    }
                                
		}
    });
});


/*====================================================
                        TESTIMONIALS
/*====================================================*/
$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,

    });
});

/*====================================================
                        STATS
/*====================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
});


/*====================================================
                        CLIENTS
/*====================================================*/
$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
		    },
            
		    480: {
                items: 3
		    },
            
		    768: {
                items: 5
		    },
            
            992: {
                items:6
            }            
		}
        
    }); 
});


/*====================================================
                        NAVIGATION
/*====================================================*/
// To Show/Hide Transparent Navigation Bar
$(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top-button").fadeOut();

        } else {
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top-button").fadeIn();
        }
    })
});

// Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // Returns section id
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1300, "easeInOutExpo");
    });
});

//Close Navbar on clicking a link
$(function(){
   
    $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggler").click(); 
    });
    
});
