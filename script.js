// Rotating Banner Variables Dict
var banner = {
    'id': 'main-banner',
    'image': {
        'class_name': 'image-banner'
    }
};

// Rotating Banner Props
var banner_status = 1;
var banner_timer_seconds = 4;
var banner_timer = banner_timer_seconds * 1000;

// Banner Elemment Props
var banner_width = document.getElementById(banner.id).offsetWidth;
var banner_height = document.getElementById(banner.id).offsetHeight;

// Transform a HTMLCollction to an Array
var banner_image_list = Array.prototype.slice.call(document.getElementsByClassName(banner.image.class_name));


function fistToLastIndex(array) {
    // This function takes the first item from an array
    // and pushes it into the last index.

    var first_index = array.shift();
    array.push(first_index);

    return array;

}

function generateBannerImageOffsets(array, banner_width) {
    // This function loops through an array and for
    // each item of the array, adds the banner width
    // to the list that is going to be returned.
    // The starting offset is -(banner_width), because
    // the current rotating image is going to hide to
    // the banner's left.
    
    var offset_list = [];
    var current_offset = -banner_width;

    for (var image = 0; image < array.length; image++) {
        // var curr_offset = array[image];
        current_offset += banner_width;
        offset_list.push(current_offset);
    }

    return offset_list;
}

/**
 * OLD BANNER
 */
window.onload = function() {
    bannerLoop();
};


var banner_interval = setInterval(function() {
    bannerLoop();
}, banner_timer);



function bannerLoop() {
    
    if (banner_status == 1) {
        document.getElementById('image-2').style.opacity = "0";

        setTimeout(function() {

            document.getElementById('image-1').style.right = "0px";
            document.getElementById('image-1').style.zIndex = "2";
            
            document.getElementById('image-2').style.right = "-860px";
            document.getElementById('image-2').style.zIndex = "3";
            
            document.getElementById('image-3').style.right = "860px";
            document.getElementById('image-3').style.zIndex = "1";

        }, 500);

        setTimeout(function() {

            document.getElementById('image-2').style.opacity = "1";

        }, 1000);

        banner_status = 2;
    }
    else if (banner_status == 2) {
        document.getElementById('image-3').style.opacity = "0";

        setTimeout(function() {

            document.getElementById('image-2').style.right = "0px";
            document.getElementById('image-2').style.zIndex = "2";
            
            document.getElementById('image-3').style.right = "-860px";
            document.getElementById('image-3').style.zIndex = "3";
            
            document.getElementById('image-1').style.right = "860px";
            document.getElementById('image-1').style.zIndex = "1";

        }, 500);

        setTimeout(function() {

            document.getElementById('image-3').style.opacity = "1";

        }, 1000);

        banner_status = 3;
    }
    else if (banner_status == 3) {
        document.getElementById('image-1').style.opacity = "0";

        setTimeout(function() {

            document.getElementById('image-3').style.right = "0px";
            document.getElementById('image-3').style.zIndex = "2";
            
            document.getElementById('image-1').style.right = "-860px";
            document.getElementById('image-1').style.zIndex = "3";
            
            document.getElementById('image-2').style.right = "860px";
            document.getElementById('image-2').style.zIndex = "1";

        }, 500);

        setTimeout(function() {

            document.getElementById('image-1').style.opacity = "1";

        }, 1000);

        banner_status = 1;
    }

}
