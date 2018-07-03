var banner_status = 1;
var banner_timer_seconds = 4;
var banner_timer = banner_timer_seconds * 1000;

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
