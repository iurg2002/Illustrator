var doc = app.activeDocument;

// create layers for circles and text
var circleLayer = doc.layers.add();
circleLayer.name = "Circle Layer";
var textLayer = doc.layers.add();
textLayer.name = "Text Layer";

// initialise the initial position
var x = 300;
var y = 0;

// the Names to be designed
var names = [
  'Maria',
  'Alina',
  'Andreea',
  'Ionut',
  'Annna',
  'Ioana'
];

var fontName = "MyFontRegular";
// var fontName = "BigSpenderRegular";


for (var i = 0; i < names.length; i++) {
    createNamePacifico(names[i], fontName, textLayer, circleLayer, x, y)
    y -= 50;
}












function createNamePacifico(name, font,textLayer,circleLayer, x, y)
{


  var textFrame = textLayer.textFrames.add();
  textFrame.contents = name;
  var firstLetter = textFrame.contents[0];
  // adding the text to the position
  textFrame.position = [x, y];

  // setting the font and character size
  var textRange = textFrame.textRange;
  textRange.characterAttributes.textFont = app.textFonts.getByName("MyFontRegular");
  textRange.characterAttributes.size = 36;

   //changing the spacing for the first letter depending on the first letter
   if(firstLetter == 'B')
   {
     textFrame.characters[0].characterAttributes.tracking = -140
   } else if(firstLetter == 'I')
   {
     textFrame.characters[0].characterAttributes.tracking = -180
   } else if(firstLetter == 'D')
   {
     textFrame.characters[0].characterAttributes.tracking = -140
   } else if(firstLetter == 'Q')
   {
     textFrame.characters[0].characterAttributes.tracking = -140
   } else if(firstLetter == 'F')
   {
     textFrame.characters[0].characterAttributes.tracking = -150
   }

   // storing the width of the text
  var textWidth = textFrame.width;

  // creating outlines
  var outlines = textFrame.createOutline();

  // changing the circle parameters depending on the first letter
  if (firstLetter == "H") {
    circle_x = x - 10;
  } else if (firstLetter == "M") {
    circle_x = x - 10;
  } else if (firstLetter == "B") {
    circle_x = x - 10;
  } else if (firstLetter == "Z") {
    circle_x = x - 10;
  } else if (firstLetter == "F") {
    circle_x = x - 8;
  } else if (firstLetter == "I") {
    circle_y = y + 25;
    circle_x = x - 8;
  }


  // setting the circles parameters
  var radius = 15;
  var circle_x = x - 8;
  var circle_y = y + 20;
  var circle2_x = x - 14 + textWidth;
  var circle2_y = y + 18;

  // creating the circles
  var circle1 = circleLayer.pathItems.ellipse(
    circle_y,
    circle_x,
    radius,
    radius
  );
  var circle2 = circleLayer.pathItems.ellipse(
    circle_y - radius / 4,
    circle_x + radius / 4,
    radius / 2,
    radius / 2
  );
  var circle3 = circleLayer.pathItems.ellipse(
    circle2_y,
    circle2_x,
    radius,
    radius
  );
  var circle4 = circleLayer.pathItems.ellipse(
    circle2_y - radius / 4,
    circle2_x + radius / 4,
    radius / 2,
    radius / 2
  );


}









