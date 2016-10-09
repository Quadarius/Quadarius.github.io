// justice be done though the heavens may fall
// pixel.js
//Based on Kim Asendorf's pixel sorting algorithm
var PixelSorter = (function(){
    //// Variables
    var height = window.innerHeight,
        width = window.innerWidth,
        img = new Image(),
        defaultImg,
        source;


    //// Canvas Setup
    //var canvas = document.getElementById('canvas'),
    var canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');

    //// image setup
    var iheight, iwidth;

    //// sorting setup
    var currentRow = 0, currentColumn = 0,
        imageData, pixels, mode, sortValue;
///////////////////////////////////////////////////////////////////////////////
    function init(imgSource, r, g, b){//, newMode){
        source = imgSource;
        currentRow = 0;
        currentColumn = 0;
        setSortValue(r, g, b);
        setup();
        return canvas;
    }

    function setup(){
        img.onload = function() {
            iheight = img.height;
            iwidth = img.width;

            canvas.height = iheight;
            canvas.width = iwidth;

            draw(this);
        }
        img.src = source || 'landscape.png'
    }

    function draw(img) {
        ctx.drawImage(img, 0, 0); // place the image in the canvas
        imageData = ctx.getImageData(0, 0, img.height, img.width); // copy its pixels
        pixels = imageData.data;
        sortPixels();
        // edit the pixels
    }

    function render(imgSource, r, g, b){
        source = imgSource;
        currentRow = 0;
        currentColumn = 0;
        setSortValue(r, g, b);
        setup();
        sortPixels();
        return canvas;
    }

    var pixelRowCount = (4 * iwidth);
    var totalPixelCount = 4 * iwidth * iheight;

    function sortPixels() {
        while(currentColumn < iwidth-1){
            sortColumn();
            currentColumn+=1;
        }
        while(currentRow < iheight-1){
            sortRow();
            currentRow+=1;
        }
            ctx.putImageData(imageData, 0, 0); // replace the pixels with the edited ones
    }

    //// pixel sorting functions
    function sortRows(p){
        var row,
            rowLength = iwidth;

        for(var i = 0; i < totalPixelCount; i += pixelRowCount){
            // get row

            // sort row
            for(var j = 0; j < pixelRowCount; j += 4){

            }

            // replace row
        }

        for(var i = 0; i < rowLength; i++){

        }
    }

    function sortRow() {
        var x = 0;
        var y = currentRow;
        var xend = 0;


        while (xend < iwidth-1) {
            x = getFirstNotBlackX(x, y);
            xend = getNextBlackX(x, y);
            if (x < 0) break;

            var sortLength = xend-x;

            var unsorted = new Array(sortLength);
            var sorted = new Array(sortLength);

            for(var i=0; i<sortLength; i++) {
                unsorted[i] = getPixelValue(x + i, y);
            }

            sorted = unsorted.sort();

            for(var i=0; i<sortLength; i++) {
                setPixelValue(x + i, y, sorted[i]);
            }

            x = xend+1;
        }
    }

    function sortColumn(){
        var x = currentColumn,
            y = 0,
            yend = 0;


        while (yend < iheight-1) {
            y = getFirstNotBlackY(x, y);
            yend = getNextBlackY(x, y);
            if (y < 0) break;

            var sortLength = yend-y;

            var unsorted = new Array(sortLength);
            var sorted = new Array(sortLength);

            for(var i=0; i<sortLength; i++) {
                unsorted[i] = getPixelValue(x, y+i);
            }

            sorted = unsorted.sort();

            for(var i=0; i<sortLength; i++) {
                setPixelValue(x, y+i, sorted[i]);
            }

            y = yend+1;
        }
    }

    function getPixelValue(x, y){
    	var offset = ( x + y * iwidth) *4;
    	var r = pixels[offset];
    	var g = pixels[offset + 1];
    	var b = pixels[offset + 2];
    	return (((255 << 8) | r) << 8 | g) << 8 | b;
    }

    function setPixelValue(x, y, val) {
      var offset = (x + y * iwidth) * 4;
      var r = (val >> 16) & 255;
      var g = (val >> 8) & 255;
      var b = val & 255;
      pixels[offset] = r;
      pixels[offset+1] = g;
      pixels[offset+2] = b;
    }
    ////////////////////////////////////////////////////////////////////////////
    function getFirstNotBlackX(xval, yval){
    	let x = xval,
    		y = yval;

    	while(getPixelValue(x, y) < sortValue){
    		x++;
    		if(x >= iwidth) return -1;
    	}
    	return x;
    }
    function getNextBlackX(xval, yval){
    	let x = xval+1,
    		y = yval;

    	while(getPixelValue(x, y) > sortValue){
    		x++;
    		if(x >= iwidth) return iwidth - 1;
    	}
    	return x - 1;
    }
    ////////////////////////////////////////////////
    function getFirstNotBlackY(xval, yval){
    	let x = xval,
    		y = yval;

    	if(y < iheight){
    		while(getPixelValue(x, y) < sortValue){
    			y++;
    			if(y >= iheight) return -1;
    		}
    	}

    	return y;
    }
    function getNextBlackY(xval, yval){
    	let x = xval,
    		y = yval+1;
    	if(y<iheight){
    		while(getPixelValue(x, y) > sortValue){
    			y++;
    			if(y >= iheight) return iheight - 1;
    		}
    	}
    	return y - 1;
    }

    function setSortValue(r, g, b){
        sortValue = (((255 << 8) | r) << 8 | g) << 8 | b;
    }
    ////////////////////////////////////////////////////////////////////////////
    return {init: init, render: render}
})();
