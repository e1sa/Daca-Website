
var top10Data = [{
    "Country": "Mexico\n548k",
    "Color": "#", 
    "Number": "548000",
    "Percent": "79.4"
  },
  {
    "Country": "El Salvador\n26k",
    "Color": "#EE0000",
    "Number": "25900",
    "Percent": "3.7"
  },
  {
    "Country": "Guatemala\n17k",
    "Color": "#DD0000",
    "Number": "17700",
    "Percent": "2.6"
  },
  {
    "Country": "Honduras\n16k",
    "Color": "#CC0000",
    "Number": "16100",
    "Percent": "2.3"
  },
  {
    "Country": "Peru\n7.4k",
    "Color": "#BB0000",
    "Number": "7420",
    "Percent": "1.1"
  },
  {
    "Country": "South Korea\n7.3k",
    "Color": "#AA0000",
    "Number": "7310",
    "Percent": "1.1"
  },
  {
    "Country": "Brazil\n6k",
    "Color": "#990000",
    "Number": "5780",
    "Percent": "0.8"
  },
  {
    "Country": "Ecuador\n5.5k",
    "Color": "#880000",
    "Number": "5460",
    "Percent": "0.8"
  },
  {
    "Country": "Colombia\n5k",
    "Color": "#770000",
    "Number": "5020",
    "Percent": "0.7"
  },
  {
    "Country": "Argentina\n4k",
    "Color": "#660000",
    "Number": "3970",
    "Percent": "0.6"
  }, {
    "Country": "Philippines\n4k",
    "Color": "#550000",
    "Number": "3880",
    "Percent": "0.6"
  }

];

var scaleValue = 1;
var canvasMax = 500;

var graphScale = 20;

function setup() {
  var cWidth = document.getElementById('canvasContainer').clientWidth;

  var myCanvas = createCanvas(min(canvasMax, cWidth), min(canvasMax, cWidth));
  myCanvas.parent('canvasContainer');

}

function draw() {

  push();
  noStroke();
  scale(scaleValue);

  push();
  translate(canvasMax / 2, 0);
  background('#D6F5D6');

  textAlign(CENTER, CENTER);
  fill(top10Data[0].Color);
  ellipse(0, 200, Math.log10(top10Data[0].Number) * graphScale, Math.log10(top10Data[0].Number) * graphScale);
  fill('#000000');
  text(top10Data[0].Country, 0, 200)

  fill(top10Data[1].Color);
  ellipse(0, 310, Math.log10(top10Data[1].Number) * graphScale, Math.log10(top10Data[1].Number) * graphScale);
  fill('#000000');
  text(top10Data[1].Country, 0,310)

  fill(top10Data[2].Color);
  ellipse(0, 400, Math.log10(top10Data[2].Number) * graphScale, Math.log10(top10Data[2].Number) * graphScale);
  fill('#000000');
  text(top10Data[2].Country, 0, 400)

  fill(top10Data[3].Color);
  ellipse(100, 400, Math.log10(top10Data[3].Number) * graphScale, Math.log10(top10Data[3].Number) * graphScale);
  fill('#000000');
  text(top10Data[3].Country, 100, 400)

  fill(top10Data[4].Color);
  ellipse(100, 100, Math.log10(top10Data[4].Number) * graphScale, Math.log10(top10Data[4].Number) * graphScale);
  fill('#000000');
  text(top10Data[4].Country, 100, 100)

fill(top10Data[5].Color);
  ellipse(100, 300, Math.log10(top10Data[5].Number) * graphScale, Math.log10(top10Data[5].Number) * graphScale);
  fill('#000000');
  text(top10Data[5].Country, 100, 300)

fill(top10Data[6].Color);
  ellipse(100, 210, Math.log10(top10Data[6].Number) * graphScale, Math.log10(top10Data[6].Number) * graphScale);
  fill('#000000');
  text(top10Data[6].Country, 100, 210)

  fill(top10Data[7].Color);
  ellipse(100, 300, Math.log10(top10Data[7].Number) * graphScale, Math.log10(top10Data[7].Number) * graphScale);
  fill('#000000');
  text(top10Data[7].Country, 100, 300)

  fill(top10Data[8].Color);
  ellipse(100, 200, Math.log10(top10Data[8].Number) * graphScale, Math.log10(top10Data[8].Number) * graphScale);
  fill('#000000');
  text(top10Data[8].Country, 100, 200)
  pop();
}


function windowResized() {
  //cavas size will be resized in case window size has changed
  var cWidth = document.getElementById('canvasContainer').clientWidth;
  var cHeight = document.getElementById('canvasContainer').clientHeight;
  scaleValue = min(canvasMax, cWidth) / canvasMax;
  resizeCanvas(min(canvasMax, cWidth), min(canvasMax, cWidth));


}