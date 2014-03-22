/*
 Zoom in, zoom out and rest image plugin
 */

$(document).ready(function() {

    var cExpanded = true;
    var p1Height = 0;
    var p2Height = 0;
    var currentstepIndex = 1;

    function ZoomIn() {

        $("#imgloading").addClass("visibleloading");
        var zoomInDimension = $("#currentpreviewimage");

        var width = $('#currentpreviewimage').width(); // Current image width
        var height = $('#currentpreviewimage').height(); // Current image height

        if (width > height) {
            var ratio = width / height; // Used for aspect ratio

        } else {
            if (height > width) {
                var ratio = height / width; // Used for aspect ratio
            }
        }

        var zoomHeight = height * ratio;
        var zoomWidth = width * ratio;

        zoomInDimension.height(zoomHeight + 10);
        zoomInDimension.width(zoomWidth + 10);

        $("#imgloading").removeClass("visibleloading");

    }

    function ZoomOut() {

        $("#imgloading").addClass("visibleloading");
        var zoomInDimension = $("#currentpreviewimage");

        var width = $('#currentpreviewimage').width(); // Current image width
        var height = $('#currentpreviewimage').height(); // Current image height

        if (height > width && height > 50) {
            var ratio = width / height; // Used for aspect ratio

        } else {
            if (width > height && width > 50) {
                var ratio = height / width; // Used for aspect ratio
            }
        }

        var zoomHeight = height * ratio;
        var zoomWidth = width * ratio;

        zoomInDimension.height(zoomHeight);
        zoomInDimension.width(zoomWidth);

        $("#imgloading").removeClass("visibleloading");
    }

    function ResizeImage() {
        $('img#currentpreviewimage').css({
            height: 'auto',
            width: 'auto'
        });
    }


/**
 * Defalut condition set the fix image size. 
 */

$('#imagepreview img').addClass('defaultSize');



    $("#zoomin").click(function() {
        ZoomIn();
    });

    $("#zoomout").click(function() {
        ZoomOut();
    });

    $("#zoomreset").click(function() {
        ResizeImage();
    });

    $("#collapseicon").click(function() {
        if (cExpanded) {
            if (p1Height == 0) {
                p1Height = $("#informationpanel").height();
            }
            if (p2Height == 0) {
                p2Height = $("#previewpannels").height();
            }
            $("#informationpanel").hide();
            $("#previewpannels").height((p1Height + p2Height) + 'px');
            cExpanded = false;
        } else {
            $("#previewpannels").height((p2Height) + 'px');
            $("#informationpanel").show();
            cExpanded = true;
        }
    });

    $("#currentpreviewimage").load(function() {
        var that = $("#currentpreviewimage");
        that.attr("data-loaded", "true");

       // ResizeImage();

    });


    /*/ 
     passing images 
     */


    var imageGallery = new Object();

    imageGallery.images = [
        '../images/zoom/image1.JPG',
        '../images/zoom/image2.jpg',
        '../images/zoom/image3.png',
        '../images/zoom/image4.png',
        '../images/zoom/image5.png',
        '../images/zoom/image6.jpg'];

    imageGallery.currentIndex = 0;

    console.log(imageGallery.images);
    var i;
    for (i = 0; i < imageGallery.images.length; i++) {
        $(".previewlist").append(
                "<li><img src=" + imageGallery.images[i] + " alt='page1'/></li>"
                );
    }

    // on load defaulty image 

    $("#currentpreviewimage").attr("src", imageGallery.images[0]);


    $('.previewlist li').eq(0).click(function() {

        $("#currentpreviewimage").attr("src", imageGallery.images[0]);

    });
    $('.previewlist li').eq(1).click(function() {

        $("#currentpreviewimage").attr("src", imageGallery.images[1]);

    });
    $('.previewlist li').eq(2).click(function() {

        $("#currentpreviewimage").attr("src", imageGallery.images[2]);

    });
    $('.previewlist li').eq(3).click(function() {

        $("#currentpreviewimage").attr("src", imageGallery.images[3]);

    });
    $('.previewlist li').eq(4).click(function() {

        $("#currentpreviewimage").attr("src", imageGallery.images[4]);

    });
    $('.previewlist li').eq(5).click(function() {

        $("#currentpreviewimage").attr("src", imageGallery.images[5]);

    });


  /*
   * Drag Image
   */
    $('#imagepreview img').draggable();  


    /*
     * Scroll Function  
     * 
     */

    $("#right").click(function() {
        var leftPos = $('.previewlistpanel').scrollLeft();
        $(".previewlistpanel").animate({scrollLeft: leftPos - 200}, 500);
    });

    $("#left").click(function() {
        var rightPos = $('.previewlistpanel').scrollLeft();
        $(".previewlistpanel").animate({scrollLeft: rightPos + 200}, 500);
    });


});
