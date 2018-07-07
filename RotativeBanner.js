
var Banner = function(params) {

    this.id = params.id;

    this.width = document.getElementById(banner.id).offsetWidth;
    this.height = document.getElementById(banner.id).offsetHeight;

    this.rotation_time = 4000; //ms

    this.image = {
        class_name: params.image.class_name,
        image_unit: params.image.image_unit
    };

};

Banner.prototype = {

    getBannerImageList: function() {
        
        // Transform a HTMLCollction to an Array
        return Array.prototype.slice.call(document.getElementsByClassName(this.image.class_name));

    }

};

// Images Offset List
var offset_list = generateBannerImageOffsets(banner_image_list, this.width);


// var banner_interval = setInterval(function() {
//     rotateBanner(banner_image_list);
// }, banner_timer);

function fistToLastIndex(array) {
    // This function takes the first item from an array
    // and pushes it into the last index.

    var first_index = array.shift();
    array.push(first_index);

    return array;

}

function generateBannerImageOffsets(array, this.width) {
    // This function loops through an array and for
    // each item of the array, adds the banner width
    // to the list that is going to be returned.
    // The starting offset is -(this.width), because
    // the current rotating image is going to hide to
    // the banner's left.
    
    var offset_list = [];
    var current_offset = -this.width;

    for (var image = 0; image < array.length; image++) {
        offset_list.push(current_offset);
        current_offset += this.width;
    }

    return offset_list;
}

function setOffset(image_list, offset_list) {

    for (var index = 0; index < image_list.length; index++) {
        
        var current_image = image_list[index];
        var current_offset = offset_list[index];
        current_image.style.right = current_offset + banner.image.image_unit;

    }

}

function rotateBanner(array) {
    
    image_list = fistToLastIndex(array);
    setOffset(image_list, offset_list);

}
