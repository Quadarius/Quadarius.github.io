//// pixel.js

/**
Based on Kim Asendorf's pixel sorting algorithm
**/


var rslider,
	gslider,
	bslider;

var rval = 103,
	gval = 105,
	bval = 128;

var img;
var d,
	imageCount,
	halfImage,
	acgColor;

var cheight = 800,
	 cwidth = 800;

var currentRow = 0;
var currentColumn = 0;

// equivalent to rgb(103, 105, 128)
var blackValue = -10000000;
// equivalent to rgb(164, 114, 128)
var whiteValue = -6000000;

var avgValue;
var useAvgFlag;
var redrawButton

////////////////////////////////////////////////////////////////////////////////


function preload() {
  img = loadImage("landscape.png");
  var cwidth = img.width,
  	  cheight = img.height;
}

function setup() {
	myCanvas = createCanvas(img.width, img.height);
	myCanvas.parent('myCanvas');
	rslider = createSlider(0, 255, 128, 1);
	rslider.position(10, 100);
	gslider = createSlider(0, 255, 128, 1);
	gslider.position(10, 150);
	bslider = createSlider(0, 255, 128, 1);
	bslider.position(10, 200);
	useAvgFlag = createCheckbox('Use Average', false);
	useAvgFlag.position(10, 250);
	redrawButton = createButton('Re Draw');
	redrawButton.position(10, 300);
	redrawButton.mousePressed(function(){
		image(img, 0, 0);
		redraw();
	});
	image(img, 0, 0);
	noLoop();
	cheight = img.height,
	 cwidth = img.width;
}

function draw() {

	loadPixels();
	d = pixelDensity();
	imageCount = 4 * (cheight * d) * (cwidth * d);
	halfImage = 4 * (cheight * d) * (cwidth/2 * d);
	//var c = get();
	avgColor = getAverageColor();
	setSortValue();

	currentRow = 0;
	currentColumn = 0;
	sortImage();
	updatePixels();
}

////////////////////////////////////////////////////////////////////////////////
function getPixelValue(x, y){
	var offset = ( x + y * cwidth) *4;
	var r = pixels[offset];
	var g = pixels[offset + 1];
	var b = pixels[offset + 2];
	return ( ((255 << 8) | r) << 8 | g) << 8 | b;
}

function getRGBValue(r, g, b){
	return ( ((255 << 8) | r) << 8 | g) << 8 | b;
}

function setSortValue() {
	if(useAvgFlag.checked()){
		blackValue = avgValue;
	}
	else{
		blackValue = getRGBValue(rslider.value(), gslider.value(), bslider.value());
	}
}

////////////////////////////////////////////////////////////////////////////////
function getAverageColor(){
	pixelInterval = 5,
	count = 0,
	i = -4,
	rgb = {r: 102, g: 102, b:102};

	while ((i += pixelInterval * 4) < imageCount) {
		count++;
		rgb.r += pixels[i];
		rgb.g += pixels[i+1];
		rgb.b += pixels[i+2];
	}

	// floor the average values to give correct rgb values (ie: round number values)
	rgb.r = Math.floor(rgb.r/count);
	rgb.g = Math.floor(rgb.g/count);
	rgb.b = Math.floor(rgb.b/count);

	avgValue = getRGBValue(rgb.r, rgb.g, rgb.b);
	return color(rgb.r, rgb.g, rgb.b);
}

function getFirstNotBlackX(xval, yval){
	let x = xval,
		y = yval;

	while(getPixelValue(x, y) < blackValue){
		x++;
		if(x >= cwidth) return -1;
	}
	return x;
}

function getNextBlackX(xval, yval){
	let x = xval+1,
		y = yval;

	while(getPixelValue(x, y) > blackValue){
		x++;
		if(x >= cwidth) return cwidth - 1;
	}
	return x - 1;
}
////////////////////////////////////////////////
function getFirstNotBlackY(xval, yval){
	let x = xval,
		y = yval;

	if(y < cheight){
		while(getPixelValue(x, y) < blackValue){
			y++;
			if(y >= cheight) return -1;
		}
	}

	return y;
}

function getNextBlackY(xval, yval){
	let x = xval,
		y = yval+1;
	if(y<cheight){
		while(getPixelValue(x, y) > blackValue){
			y++;
			if(y >= cheight) return cheight - 1;
		}
	}

	return y - 1;
}

var jjo = 0;
var kkp = 148;
function getFirstNotX(xval, yval){
	let x = xval,
		y = yval;

	while(get(x, y)[jjo] < kkp){
		x++;
		if(x >= cwidth) return -1;
	}
	return x;
}

function getNextX(xval, yval){
	let x = xval+1,
		y = yval;

	while(get(x, y)[jjo] > kkp){
		x++;
		if(x >= cwidth) return cwidth - 1;
	}
	return x - 1;
}
////////////////////////////////////////////////
function getFirstNotY(xval, yval){
	let x = xval,
		y = yval;

	if(y < cheight){
		while(get(x, y)[jjo] < kkp){
			y++;
			if(y >= cheight) return -1;
		}
	}

	return y;
}

function getNextY(xval, yval){
	let x = xval,
		y = yval+1;
	if(y<cheight){
		while(get(x, y)[jjo] > kkp){
			y++;
			if(y >= cheight) return cheight - 1;
		}
	}

	return y - 1;
}


////////////////////////////////////////////////////////////////////////////////
function sortRow(){
	var x = 0,
		y = currentRow,
		xend = 0;

	while(xend < cwidth -1) {
		x = getFirstNotBlackX(x, y);
		xend = getNextBlackX(x, y);

		// x = getFirstNotX(x, y);
		// xend = getNextX(x, y);

		if (x < 0) break;

		var sortLength = xend - x;

		var unsorted = new Array(sortLength);
		var sorted = new Array(sortLength);

		for(var i=0; i<sortLength; i++) {
		unsorted[i] = get(x + i, y);
		}

		sorted = unsorted.sort();
		//var ii = sortLength-1;
		for(var i=0; i<sortLength; i++) {
			set(x + i, y, sorted[i]);
			//ii--;
		}

		x = xend+1;
	}
}

function sortColumn(){
	var x = currentColumn,
		y = 0,
		yend = 0;

	while(yend < cheight -1) {
		y = getFirstNotBlackY(x, y);
		yend = getNextBlackY(x, y);

		// y = getFirstNotY(x, y);
		// yend = getNextY(x, y);

		if (y < 0) break;

		var sortLength = yend - y;

		var unsorted = new Array(sortLength);
		var sorted = new Array(sortLength);

		for(var i=0; i<sortLength; i++) {
			unsorted[i] = get(x, y+1);
		}

		sorted = unsorted.sort();
		//var ii = sortLength-1;
		for(var i=0; i<sortLength; i++) {
			set(x, y + i, sorted[i]);
			//i--;
		}

		y = yend+1;
	}
}

function sortImage(){
	while(currentColumn < cwidth-1){
		sortColumn();
		currentColumn+=1;
	}
	while(currentRow < cheight-1){
		sortRow();
		currentRow+=1;
	}

}

function sortWhole(){
	for (var j = 0; j < imageCount; j+=4){
		if(j % 8 == 0){
			pixels[j] = red(avgColor);
			pixels[j+1] = green(avgColor);
			pixels[j+2] = blue(avgColor);
			pixels[j+3] = alpha(color(0,0,0,200));
		}
	}
}

function sortLowerHalf(){
	for (var j = imageCount; j > halfImage; j-=4){
		if(j % 88 == 0){
			pixels[j] = red(avgColor);
			pixels[j+1] = green(avgColor);
			pixels[j+2] = blue(avgColor);
			pixels[j+3] = alpha(color(0,0,0,200));
		}
		// else{
		// 	pixels[j] = red(avgColor);
		// 	pixels[j+1] = green(avgColor);
		// 	pixels[j+2] = blue(avgColor);
		// 	pixels[j+3] = alpha(avgColor);
		// }
	}
}
