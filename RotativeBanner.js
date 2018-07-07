
var RotativeBanner = function(params) {

    this.id = params.id;

    this.width = document.getElementById(this.id).offsetWidth;
    this.height = document.getElementById(this.id).offsetHeight;
    this.offset_list = params.offset_list;

    this.rotation_time = params.rotation_time; //ms

    this.image = {
        class_name: params.image.class_name,
        image_unit: params.image.image_unit,
        list: params.image.list,
    };

};

RotativeBanner.prototype = {

    getBannerImageList: function() {
        // Transform a HTMLCollction to an Array
        this.image.list = Array.prototype.slice.call(document.getElementsByClassName(this.image.class_name));
        return this.image.list;

    },

    fistToLastIndex: function(array) {
        // This function takes the first item from an array
        // and pushes it into the last index.
    
        var first_index = array.shift();
        array.push(first_index);
    
        return array;
        
    },

    generateBannerImageOffsets: function() {
        // This function loops through the RotativeBanner.image.list 
        // and for each item of the array, adds the banner width
        // to the list that is going to be returned.
        // The starting offset is -(this.width), because
        // the current rotating image is going to hide to
        // the banner's left.
        
        var image_list = this.image.list;
        var offset_list = [];
        var current_offset = -this.width;
    
        for (var image = 0; image < image_list.length; image++) {
            offset_list.push(current_offset);
            current_offset += this.width;
        }

        this.offset_list = offset_list;
        
        return this.offset_list;

    },

    setOffset: function(image_list) {

        for (var index = 0; index < image_list.length; index++) {
            
            var current_image = image_list[index];
            var current_offset = this.offset_list[index];
            current_image.style.right = current_offset + this.image.image_unit;
    
        }

    },

    rotateBanner: function() {
        self = this;
        this.getBannerImageList();
        this.generateBannerImageOffsets();

        setInterval(function() {
            console.log(self)
            image_list = self.fistToLastIndex(self.image.list);
            self.setOffset(image_list);
        }, this.rotation_time);
    
    }

};
