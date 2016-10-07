/***********************
 * I'm Quadarius Moore *
 * This is spacepaint  *
 ***********************/

var mySound,
    myCanvas,
    time,
    duration,
    touchFlag,
    brushColor,
    diameter = 1,
    maxDiameter = 40,
    minDiameter = 5,
    diaDev = 5,
    spread = 1,
    maxSpread = 200,
    minSpread = 1,
    spreadDev = 10,
    colors;
////////////////////////////////////////////////////////////////////////////////
var redviolets = ['#F08F90', '#F47983', '#DB5A6B', '#C93756', '#FCC9B9', '#FFB3A7', '#F2666C'];

var reds       = ['#F58F84', '#AC8181', '#B95754', '#C91F37', '#9D2933', '#7B3B3A', '#F7665A',
                  '#B56C60', '#97645A', '#A24F46', '#C3272B', '#8F1D21', '#672422', '#BC2D29',
                  '#5E2824', '#8B352D', '#FA7B62', '#F8674F', '#DC3023', '#AB4C3D', '#934337',
                  '#9D2B22', '#913228', '#6F3028', '#351E1C', '#F35336', '#D34E36', '#CF3A24',
                  '#A13D2D', '#913225', '#752E23', '#F9906F', '#FF7952', '#F07F5E', '#E68364',
                  '#FF4E20', '#E35C38', '#CB6649', '#B35C44', '#B14A30', '#9B533F', '#8C4736',
                  '#60281E', '#542D24', '#4C221B'];

var redyellows = [ '#9F7462', '#B64925', '#592B1F', '#351F19', '#F57F4F', '#EC8254', '#9F5233',
                  '#EC956C', '#985538', '#824B35', '#FFA26B', '#FCA474', '#FF8936', '#FA9258',
                  '#FB8136', '#8F583C', '#2E211B', '#AB6134', '#CA6924', '#FFA565', '#D57835',
                  '#C66B27', '#A96232', '#985629', '#8C5939', '#6A432D', '#593A27', '#C48E69',
                  '#BE7F51', '#7D4E2D', '#B7702D', '#6B4423' ];

var yellows =    ['#F7BB7D', '#FFA400', '#FFA631', '#E08A1E', '#CB7E1F', '#C57F2E', '#785E49',
                  '#FFB95A', '#FAA945', '#CE9F6F', '#BB8141', '#FFB61E', '#FFB94E', '#E2BE9F',
                  '#E69B3A', '#E29C45', '#B0927A', '#826B58', '#7F6B5D', '#7F5D3B', '#665343',
                  '#4C3D30', '#A17917', '#896C39', '#5C4827', '#E3B130', '#E2B13C',' #F3C13A',
                  '#D3B17D', '#AA8736', '#957B38', '#D9B611', '#645530'];

var yellowgreens = ['#BDA928', '#BBA46D', '#9C8A4D', '#534A32', '#473F2D', '#8B7D3A', '#524B2A',
                    '#3B3429', '#857C55', '#5E5545', '#7A942E', '#4D4B3A', '#BCB58C', '#8DB255',
                    '#8C9E5E', '#5B8930', '#52593B', '#454D32' ];

var greenblues =  [ '#8C9C76', '#6B9362', '#817B69', '#5E644F', '#374231', '#2A603B', '#A5BA93',
                    '#898A74', '#407A52', '#3D5D42', '#3D4035', '#006442', '#656255', '#224634',
                    '#2D4436', '#2E372E', '#5A6457', '#749F8D', '#819C8B', '#3A6960', '#3A403B',
                    '#2B3733', '#354E4B', '#203838'];

var blueviolets = [ '#757D75', '#4F4944', '#2B3736', '#86ABA5', '#6A7F7A', '#C6C2B6', '#48929B',
                    '#006C7F', '#455859', '#5C544E', '#264348', '#364141', '#1D697C', '#317589',
                    '#4D646C', '#044F67', '#344D56', '#3D4C51', '#4D8FAC', '#252321', '#5D8CAE',
                    '#192236', '#181B26', '#1F4788', '#003171', '#1B294B', '#78779B', '#191F45',
                    '#766980', '#5A4F74', '#614E6E'];

var violets =     [ '#875F9A', '#5D3F6A', '#976E9A', '#3F313A', '#2B2028', '#3A243B', '#A87CA0',
                    '#8D608C', '#5B3256', '#4F284B', '#23191E', '#763568', '#BB7796', '#491E3C',
                    '#755D5B', '#63424B', '#6D2B50', '#4D3B3C', '#A4345D', '#8F4155', '#43242A',
                    '#512C31', '#7E2639', '#59292C', '#44312E'];

var achromatic =  [ '#FFDDCA', '#B9A193', '#97867C', '#6E5F57', '#4B3C39', '#393432', '#352925',
                    '#27221F', '#171412', '#EBF6F7'];




var allcolors = [].concat(redviolets, reds, redyellows, yellows, yellowgreens, greenblues, blueviolets, violets);//, achromatic);
var colorPalettes = [allcolors, redviolets, reds, redyellows, yellows, yellowgreens, greenblues, blueviolets, violets]; //, achromatic];

var numPalettes = colorPalettes.length;
var currentPallet = 0;
////////////////////////////////////////////////////////////////////////////////
// sketch functions
////////////////////////////////////////////////////////////////////////////////
function setColors(cl){
    colors = cl;
}

function cycleColorPalette(){
    if(currentPallet < numPalettes - 1){
        currentPallet += 1;
    }else{
        currentPallet = 0;
    }

    setColors(colorPalettes[currentPallet]);
}

function increaseDiameter(){
    if(diameter < maxDiameter){
        diameter = diameter + 5;
        console.log("diameter increased to: " + diameter);
    }
}

function decreaseDiameter(){
    if(diameter > minDiameter) {
        diameter = diameter - 5;
        console.log("diameter decreased to: " + diameter)
    }
}

function increaseSpread(){
    if(spread < maxSpread){
        spread += 1;
        console.log('spread: ' + spread);
    }
}

function decreaseSpread(){
    if (spread > minSpread){
        spread -= 1;
        console.log('spread: ' + spread);
    }
}

////////////////////////////////////////////////////////////////////////////////


function straightBrush(){
    brushColor = color(random(colors));
    fill(brushColor);
    ellipse(mouseX, mouseY, diameter);
}

function scatterBrush(){
    var variance = diameter - 5;
    var dmod = randomGaussian(diameter, diaDev );
    var r = randomGaussian(spread, spreadDev);
    var theta = random(361);
    var xspread = r * cos(theta);
    var yspread = r * sin(theta);
    brushColor = color(random(colors));
    fill(brushColor);
    ellipse(mouseX + xspread, mouseY + yspread, dmod);
}

function fingerBrush(){
    var dmod = randomGaussian(diameter, 16);
    brushColor = color(random(colors));
    fill(brushColor);
    ellipse(touchX, touchY, dmod);
}
////////////////////////////////////////////////////////////////////////////////

// p5 functions
////////////////////////////////////////////////////////////////////////////////
function setup() {
    myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    //myCanvas = createCanvas(800, 800);
    myCanvas.parent('myCanvas');
    cursor(CROSS);
    noStroke();
    setColors(allcolors);
}

function draw() {
    // put drawing code here
    //scatterBrush();
}

function mouseMoved() {
    scatterBrush();
}

function mouseDragged() {
    straightBrush();
}

function touchMoved() {
    fingerBrush();
}

function touchStarted() {
    touchFlag = true;
}

function touchEnded() {
    touchFlag = false;
}

function keyPressed() {
    switch (keyCode) {
        case 32:
            clear();
            background('#EBF6F7');
            break;
        case 219:
            decreaseDiameter();
            break;
        case 221:
            increaseDiameter();
            break;
        case 65:
            increaseSpread();
            break;
        case 67:
            cycleColorPalette();
            break;
        case 83:
            decreaseSpread();
            break;
      }
    console.log("Pressing the '" + key + "' key");
    console.log('Code:' + keyCode);
}
