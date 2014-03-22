/*
 * Js file for Mix Effect in webgsite
 */

$(document).ready(function() {

    /*
     * on scroll down resize the image
     */

    /*
     * about me Slide up and slide down function
     * 
     */

// web development 
    $(".slide").click(function() {
        if ($('.displayPara').css('display') === 'none') {
            slideDown();            
         } else {
          slideUp();          
        }
    });

    function slideUp() {
        $(".displayPara").slideUp("slow", function() {
            $(".slide").text("Expand"); 
        });
    }; 

    function slideDown() {
        $(".displayPara").slideDown("slow", function() {
            $(".slide").text("Collapse"); 
        });
    };

// Front end development 
    $(".slideTwo").click(function() {
        if ($('.divHideandShow').css('display') === 'none') {
            slideDownDiv();
        } else {
          slideUpDiv();          
        }
    });

    function slideUpDiv() {
        $(".divHideandShow").slideUp("slow", function() {
            $(".slideTwo").text("Expand"); 
        });
    }; 

    function slideDownDiv() {
        $(".divHideandShow").slideDown("slow", function() {
            $(".slideTwo").text("Collapse"); 
        });
    };

// backend development

    $(".slideThree").click(function() {
        if ($('.showUl').css('display') === 'none') {
            slideDownUl();
        } else {
          slideUpUl();          
        }
    });

    function slideUpUl() {
        $(".showUl").slideUp("slow", function() {
            $(".slideThree").text("Expand"); 
        });
    }; 

    function slideDownUl() {
        $(".showUl").slideDown("slow", function() {
            $(".slideThree").text("Collapse"); 
        });
    };




// window scrall function


    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop(),
                defaultHeight = $(".imagContainer img").css('height'),
                getImageHeight = parseInt(defaultHeight),
                heightSet = (getImageHeight -= 5) + 'px';

        if (scrollPosition > 100) {
            $(".imagContainer img").css({
                opacity: 0.7,
                height: heightSet
            });
        } else {
            if (scrollPosition < 100) {
                var newH = (getImageHeight + 10) + 'px';
                $(".imagContainer img").css({
                    opacity: 1,
                    height: '390px'
                });

            } else {
                if (scrollPosition == 0) {
                    $(".imagContainer img").css({
                        opacity: 1,
                        height: '390px'
                    });


                }

            }

        }
    });
});
