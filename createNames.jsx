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
  'Carolina',
  'Karolina',
  'Karol',
  'Stela',
  'Steluta',
  'Evelina'
];

var fontName = "MyFontRegular";
// var fontName = "BigSpenderRegular";


for (var i = 0; i < names.length; i++) {
    createNameCassandra(names[i], textLayer, circleLayer, x, y)
    y -= 70;
}




// For TEST

// 'Alina',
// 'Betb',
// 'Carolinc',
// 'Delyd',
// 'Elenae',
// 'Feliciaf',
// 'Gabrielag',
// 'Helioh',
// 'Ioanai',
// 'Jennaj',
// 'Kelyk',
// 'Laural',
// 'Mariam',
// 'Nikan',
// 'Oanao',
// 'Paulap',
// 'Ralucar',
// 'Sebys',
// 'Tetit',
// 'Uolou',
// 'Valyv',
// 'Yoanay',
// 'Alex',
// 'Alw',








function createNamePacifico(name, textLayer,circleLayer, x, y)
{


  var textFrame = textLayer.textFrames.add();
  textFrame.contents = name;
  var firstLetter = textFrame.contents[0];
  var lastLetter = textFrame.contents[textFrame.contents.length-1]
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

   // setting the circles parameters
   var radius = 10;
   var circle_x = x - 8;
   var circle_y = y + 20;
   var circle2_x = x - 14 + textWidth;
   var circle2_y = y + 18;




  // changing the circle parameters depending on the first letter
  // if (firstLetter == "H") {
  //   circle_x = x - 10;
  // } else if (firstLetter == "M") {
  //   circle_x = x - 10;
  // } else if (firstLetter == "B") {
  //   circle_x = x - 10;
  // } else if (firstLetter == "Z") {
  //   circle_x = x - 10;
  // } else if (firstLetter == "F") {
  //   circle_x = x - 8;
  // } else if (firstLetter == "I") {
  //   circle_y = y + 25;
  //   circle_x = x - 8;
  // }


    // // changing the circle parameters depending on the last letter
    // if(lastLetter == "t")
    // {
    //   circle2_x += 5;
    // }



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

function createNameCassandra(name, textLayer,circleLayer, x, y)
{


  var textFrame = textLayer.textFrames.add();
  textFrame.contents = name;
  var firstLetter = textFrame.contents[0];
  var lastLetter = textFrame.contents[textFrame.contents.length-1]
  // adding the text to the position
  textFrame.position = [x, y];

  // setting the font and character size
  var textRange = textFrame.textRange;
  textRange.characterAttributes.textFont = app.textFonts.getByName("CassandraColierRegular");
  textRange.characterAttributes.size = 36;

   //changing the spacing for the first letter depending on the first letter
   if(firstLetter == 'F')
   {
     textFrame.characters[0].characterAttributes.tracking = -300
   } else if(firstLetter == 'I')
   {
     textFrame.characters[0].characterAttributes.tracking = -200
   } else if(firstLetter == 'T')
   {
     textFrame.characters[0].characterAttributes.tracking = -100
   } else if(firstLetter == 'V')
   {
     textFrame.characters[0].characterAttributes.tracking = -200
   } 

   // storing the width of the text
  var textWidth = textFrame.width;

  // creating outlines
  var outlines = textFrame.createOutline();

   // setting the circles parameters
   var radius = 12;
   var circle_x = x - 0;
   var circle_y = y + 25;
   var circle2_x = x - 15 + textWidth;
   var circle2_y = y + 19;




  // changing the circle parameters depending on the first letter
  if (firstLetter == "A") {
    circle_x = circle_x + 17;
    circle_y = circle_y - 2;
  } else if(firstLetter == "I")
  {
    circle_x = circle_x + 1;
  } else if (firstLetter == "P")
  {
    circle_x = circle_x + 2;
    circle_y = circle_y + 2;

  } else if (firstLetter == "S")
  {
    circle_x = circle_x + 12;
  } else if (firstLetter == "B")
  {
    circle_x = circle_x + 2;
  } else if (firstLetter == "D")
  {
    circle_x = circle_x + 3;
  } else if (firstLetter == "F")
  {
    circle_x = circle_x + 3;
    circle_y = circle_y + 4;
  } 
  else if (firstLetter == "H")
  {
    circle_x = circle_x + 6;
    circle_y = circle_y + 2;
  } 
  else if (firstLetter == "K")
  {
    circle_x = circle_x + 6;
    circle_y = circle_y + 4;
  } 
  else if (firstLetter == "O")
  {
    circle_x = circle_x - 5;
  } 
  else if (firstLetter == "R")
  {
    circle_x = circle_x + 5;
  }
  else if (firstLetter == "T")
  {
    circle_x = circle_x + 4;
    circle_y = circle_y + 4;
  }
  else if (firstLetter == "U")
  {
    circle_x = circle_x - 6;
  }
  else if (firstLetter == "V")
  {
    circle_x = circle_x - 2;
  }
  else if (firstLetter == "Y")
  {
    circle_x = circle_x + 4;
    circle_y = circle_y + 5;
  }


  // changing the circle parameters depending on the last letter
  if(lastLetter == "d")
  {
    circle2_x += 7;
  } else if(lastLetter == "f")
  {
    circle2_x += 2;
  } 
  else if(lastLetter == "g")
  {
    circle2_x -= 2;
  } 
  else if(lastLetter == "h")
  {
    circle2_x += 2;
  } 
  else if(lastLetter == "i")
  {
    circle2_x += 2;
  } 
  else if(lastLetter == "j")
  {
    circle2_x -= 2;
  } 
  else if(lastLetter == "l")
  {
    circle2_x += 8;
    circle2_y -= 2
  } 
  else if(lastLetter == "r")
  {
    circle2_x -= 2;
  }
  else if(lastLetter == "t")
  {
    circle2_x += 5;
    circle2_y += 4
  }
  else if(lastLetter == "v")
  {
    circle2_y += 2;
  }
  else if(lastLetter == "y")
  {
    circle2_x -= 2;
  }
  else if(lastLetter == "a")
  {
    circle2_y += 2;
  }



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



















