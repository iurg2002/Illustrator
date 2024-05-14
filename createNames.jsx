var doc = app.activeDocument;

// create layers for circles and text
var circleLayer = doc.layers.add();
circleLayer.name = "Circle Layer";
var textLayer = doc.layers.add();
textLayer.name = "Text Layer";
// var figureLayer = doc.layers.add();
// figureLayer.name = "Figure Layer";

// initialise the initial position
var x = 300;
var y = 0;

// the Names to be designed
// var names = 				[["I", "A"]   ]
var names = [
  "Alina",
  "Betb",
  "Carolinc",
  "Delyd",
  "Elenae",
  "Feliciaf",
  "Gabrielag",
  "Helioh",
  "Ioanai",
  "Jennaj",
  "Kelyk",
  "Laural",
  "Mariam",
  "Nikan",
  "Oanao",
  "Paulap",
  "Ralucar",
  "Sebys",
  "Tetit",
  "Uolou",
  "Valyv",
  "Yoanay",
  "Alex",
  "Alw",
  "Zebaz",
];
var fontName = "MyFontRegular";
// var fontName = "BigSpenderRegular";

for (var i = 0; i < names.length; i++) {
  // create2NameBigSpender(names[i], textLayer, circleLayer, x, y)
  // createNameBigSpender(names[i], textLayer, circleLayer, x, y)
  //  createNameCassandra(names[i], textLayer, circleLayer, x, y)
  //  createNamePreparation(names[i], textLayer, circleLayer, x, y)
  // createSetInel2Nume(names[i], textLayer, circleLayer, x, y)
  // createNameSTD(names[i], textLayer, circleLayer, x, y)
  createNameCarrie(names[i], textLayer, circleLayer, x, y);
  y -= 80;
}

function create2NameBigSpender(name, textLayer, circleLayer, x, y) {
  if (name[0].length < name[1].length) {
    var temporaryName = name[0];
    name[0] = name[1];
    name[1] = temporaryName;
  }

  var textFrame = textLayer.textFrames.add();
  var textFrame2 = textLayer.textFrames.add();
  textFrame.contents = name[0];
  textFrame2.contents = name[1];
  var firstLetter = textFrame.contents[0];
  var firstLetter2 = textFrame2.contents[0];
  var lastLetter = textFrame.contents[textFrame.contents.length - 1];
  // adding the text to the position
  textFrame.position = [x, y];
  textFrame2.position = [x, y];

  // setting the font and character size
  var textRange1 = textFrame.textRange;
  textRange1.characterAttributes.textFont =
    app.textFonts.getByName("BigSpenderColier");
  textRange1.characterAttributes.size = 28;

  var textRange2 = textFrame2.textRange;
  textRange2.characterAttributes.textFont =
    app.textFonts.getByName("BigSpenderColier");
  textRange2.characterAttributes.size = 28;

  //changing the spacing for the first letter depending on the first letter
  if (firstLetter == "I") {
    textFrame.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter == "O") {
    textFrame.characters[0].characterAttributes.tracking = -150;
  } else if (firstLetter == "P") {
    textFrame.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter == "V") {
    textFrame.characters[0].characterAttributes.tracking = -200;
  }

  //changing the spacing for the first letter depending on the first letter
  if (firstLetter2 == "I") {
    textFrame2.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter2 == "O") {
    textFrame2.characters[0].characterAttributes.tracking = -150;
  } else if (firstLetter2 == "P") {
    textFrame2.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter2 == "V") {
    textFrame2.characters[0].characterAttributes.tracking = -200;
  }

  // storing the width of the text
  var textWidth = textFrame.width;
  var textWidth2 = textFrame2.width;
  var xPositionTextWidth2 = x + (textWidth - textWidth2) - 1;
  var yPositionTextWidth2 = y - 5;

  textFrame2.position = [xPositionTextWidth2, yPositionTextWidth2];

  // creating outlines
  var outlines = textFrame.createOutline();
  var outlines2 = textFrame2.createOutline();

  // setting the circles parameters
  var radius = 10;
  var circle_x = x + 0;
  var circle_y = y + 15;
  var circle2_x = x - 10 + textWidth;
  var circle2_y = y + 9;

  // changing the circle parameters depending on the first letter
  if (firstLetter == "A") {
    circle_x += 6;
    circle_y -= 5;
  } else if (firstLetter == "B") {
    circle_x += 6;
  } else if (firstLetter == "D") {
    circle_y += 3;
  } else if (firstLetter == "E") {
    circle_x -= 1;
  } else if (firstLetter == "F") {
    circle_y += 2;
  } else if (firstLetter == "H") {
    circle_y += 2;
  } else if (firstLetter == "I") {
    circle_x -= 5;
  } else if (firstLetter == "J") {
    circle_x += 2;
  } else if (firstLetter == "K") {
    circle_y += 2;
  } else if (firstLetter == "L") {
    circle_x += 3;
  } else if (firstLetter == "M") {
    circle_x += 20;
  } else if (firstLetter == "N") {
    circle_x += 2;
  } else if (firstLetter == "O") {
    circle_x -= 3;
  } else if (firstLetter == "P") {
    circle_x -= 3;
  } else if (firstLetter == "R") {
    circle_x -= 3;
  } else if (firstLetter == "S") {
    circle_x += 2;
  } else if (firstLetter == "T") {
    circle_x -= 8;
  } else if (firstLetter == "U") {
    circle_x -= 4;
  } else if (firstLetter == "V") {
    circle_x -= 10;
  } else if (firstLetter == "Y") {
    circle_x -= 7;
  } else if (firstLetter == "Z") {
    circle_x -= 7;
  }

  // changing the circle parameters depending on the last letter
  if (lastLetter == "b") {
    circle2_x += 2;
  } else if (lastLetter == "c") {
    circle2_x -= 1;
    circle2_y -= 1;
  } else if (lastLetter == "d") {
    circle2_y += 3;
    circle2_x += 5;
  } else if (lastLetter == "e") {
    circle2_y -= 1;
  } else if (lastLetter == "f") {
    circle2_x += 7;
  } else if (lastLetter == "g") {
    circle2_y -= 4;
    circle2_x += 4;
  } else if (lastLetter == "h") {
    circle2_x += 5;
  } else if (lastLetter == "i") {
    circle2_x += 4;
  } else if (lastLetter == "i") {
    circle2_y += 1;
  } else if (lastLetter == "k") {
    circle2_x += 1;
  } else if (lastLetter == "l") {
    circle2_x += 5;
  } else if (lastLetter == "o") {
    circle2_y -= 2;
  } else if (lastLetter == "p") {
    circle2_y -= 2;
  } else if (lastLetter == "s") {
    circle2_y -= 2;
  } else if (lastLetter == "t") {
    circle2_y += 5;
    circle2_x += 5;
  } else if (lastLetter == "v") {
    circle2_y -= 1;
  } else if (lastLetter == "w") {
    circle2_y -= 1;
  } else if (lastLetter == "z") {
    circle2_y -= 2;
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

function createSetInel2Nume(name, textLayer, circleLayer, x, y) {
  // if(name[0].length < name[1].length)
  // {
  //   var temporaryName = name[0];
  //   name[0] = name[1]
  //   name[1] = temporaryName;
  // }

  var textFrame = textLayer.textFrames.add();
  var textFrame2 = textLayer.textFrames.add();
  textFrame.contents = name[0];
  textFrame2.contents = name[1];
  var firstLetter = textFrame.contents[0];
  var firstLetter2 = textFrame2.contents[0];
  var lastLetter = textFrame.contents[textFrame.contents.length - 1];
  // adding the text to the position
  textFrame.position = [x, y];
  textFrame2.position = [x, y];

  // setting the font and character size
  var textRange1 = textFrame.textRange;
  textRange1.characterAttributes.textFont =
    app.textFonts.getByName("Stash-Black");
  textRange1.characterAttributes.size = 18;

  var textRange2 = textFrame2.textRange;
  textRange2.characterAttributes.textFont =
    app.textFonts.getByName("Stash-Black");
  textRange2.characterAttributes.size = 18;

  //changing the spacing for the first letter depending on the first letter
  if (firstLetter == "I") {
    textFrame.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter == "O") {
    textFrame.characters[0].characterAttributes.tracking = -150;
  } else if (firstLetter == "P") {
    textFrame.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter == "V") {
    textFrame.characters[0].characterAttributes.tracking = -200;
  } else if (firstLetter == "S") {
    textFrame.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter == "L") {
    textFrame.characters[0].characterAttributes.tracking = -150;
  } else if (firstLetter == "D") {
    textFrame.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter == "B") {
    textFrame.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter == "N") {
    textFrame.characters[0].characterAttributes.tracking = -150;
  } else if (firstLetter == "F") {
    textFrame.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter == "T") {
    textFrame.characters[0].characterAttributes.tracking = -200;
  }

  //changing the spacing for the first letter depending on the first letter
  if (firstLetter2 == "I") {
    textFrame2.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter2 == "O") {
    textFrame2.characters[0].characterAttributes.tracking = -150;
  } else if (firstLetter2 == "P") {
    textFrame2.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter2 == "V") {
    textFrame2.characters[0].characterAttributes.tracking = -200;
  } else if (firstLetter2 == "S") {
    textFrame2.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter2 == "L") {
    textFrame2.characters[0].characterAttributes.tracking = -150;
  } else if (firstLetter2 == "D") {
    textFrame2.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter2 == "B") {
    textFrame2.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter2 == "N") {
    textFrame2.characters[0].characterAttributes.tracking = -150;
  } else if (firstLetter2 == "F") {
    textFrame2.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter2 == "T") {
    textFrame2.characters[0].characterAttributes.tracking = -200;
  }

  // storing the width of the text
  var textWidth = textFrame.width;
  var textWidth2 = textFrame2.width;
  var totalLenght = 213;
  var xPositionTextWidth2 = x + 213 - textWidth2;
  // var yPositionTextWidth2 = y-5
  textFrame.position = [x, y];
  textFrame2.position = [xPositionTextWidth2, y];

  // creating outlines
  var outlines = textFrame.createOutline();
  var outlines2 = textFrame2.createOutline();
  var rectangleYpos = y - 10;
  var rectangleXpos = x + textWidth - 3.5;
  var rectangleY = 4.25;
  var rectangleX = totalLenght - textWidth - textWidth2 + 10;

  var circle1 = circleLayer.pathItems.rectangle(
    rectangleYpos,
    rectangleXpos,
    rectangleX,
    rectangleY
  );
}

function createNamePacifico(name, textLayer, circleLayer, x, y) {
  var textFrame = textLayer.textFrames.add();
  textFrame.contents = name;
  var firstLetter = textFrame.contents[0];
  var lastLetter = textFrame.contents[textFrame.contents.length - 1];
  // adding the text to the position
  textFrame.position = [x, y];

  // setting the font and character size
  var textRange = textFrame.textRange;
  textRange.characterAttributes.textFont =
    app.textFonts.getByName("MyFontRegular");
  textRange.characterAttributes.size = 36;

  //changing the spacing for the first letter depending on the first letter
  if (firstLetter == "B") {
    textFrame.characters[0].characterAttributes.tracking = -140;
  } else if (firstLetter == "I") {
    textFrame.characters[0].characterAttributes.tracking = -180;
  } else if (firstLetter == "D") {
    textFrame.characters[0].characterAttributes.tracking = -140;
  } else if (firstLetter == "Q") {
    textFrame.characters[0].characterAttributes.tracking = -140;
  } else if (firstLetter == "F") {
    textFrame.characters[0].characterAttributes.tracking = -150;
  } else if (firstLetter == "J") {
    textFrame.characters[0].characterAttributes.tracking = -160;
  } else if (firstLetter == "O") {
    textFrame.characters[0].characterAttributes.tracking = -160;
  } else if (firstLetter == "P") {
    textFrame.characters[0].characterAttributes.tracking = -240;
  } else if (firstLetter == "S") {
    textFrame.characters[0].characterAttributes.tracking = -140;
  } else if (firstLetter == "T") {
    textFrame.characters[0].characterAttributes.tracking = -280;
  } else if (firstLetter == "V") {
    textFrame.characters[0].characterAttributes.tracking = -50;
  }

  // storing the width of the text
  var textWidth = textFrame.width;

  // creating outlines
  var outlines = textFrame.createOutline();

  // setting the circles parameters
  var radius = 10;
  var circle_x = x - 2;
  var circle_y = y + 20;
  var circle2_x = x - 12 + textWidth;
  var circle2_y = y + 14.5;

  // changing the circle parameters depending on the first letter
  if (firstLetter == "B") {
    circle_x -= 5;
  } else if (firstLetter == "D") {
    circle_x -= 4;
  } else if (firstLetter == "F") {
    circle_x -= 2;
  } else if (firstLetter == "H") {
    circle_x -= 5.5;
  } else if (firstLetter == "J") {
    circle_x -= 3;
  } else if (firstLetter == "K") {
    circle_x -= 3;
  } else if (firstLetter == "L") {
    circle_x += 2;
  } else if (firstLetter == "M") {
    circle_x -= 5;
  } else if (firstLetter == "N") {
    circle_x -= 5;
  } else if (firstLetter == "S") {
    circle_x -= 2;
  } else if (firstLetter == "T") {
    circle_x -= 4;
  } else if (firstLetter == "U") {
    circle_x -= 5;
  } else if (firstLetter == "Y") {
    circle_x -= 5;
  }

  // // changing the circle parameters depending on the last letter
  if (lastLetter == "b") {
    circle2_x += 2;
    circle2_y += 3;
  } else if (lastLetter == "d") {
    circle2_x += 8;
    circle2_y += 3;
  } else if (lastLetter == "f") {
    circle2_x += 7;
  } else if (lastLetter == "i") {
    circle2_x += 5;
  } else if (lastLetter == "j") {
    circle2_x += 5;
  } else if (lastLetter == "l") {
    circle2_x += 6;
  } else if (lastLetter == "t") {
    circle2_x += 7;
    circle2_y += 4;
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

function createNameCassandra(name, textLayer, circleLayer, x, y) {
  var textFrame = textLayer.textFrames.add();
  textFrame.contents = name;
  var firstLetter = textFrame.contents[0];
  var lastLetter = textFrame.contents[textFrame.contents.length - 1];
  // adding the text to the position
  textFrame.position = [x, y];

  // setting the font and character size
  var textRange = textFrame.textRange;
  textRange.characterAttributes.textFont = app.textFonts.getByName(
    "CassandraColierRegular"
  );
  textRange.characterAttributes.size = 25;

  //changing the spacing for the first letter depending on the first letter
  if (firstLetter == "F") {
    textFrame.characters[0].characterAttributes.tracking = -300;
  } else if (firstLetter == "I") {
    textFrame.characters[0].characterAttributes.tracking = -200;
  } else if (firstLetter == "T") {
    textFrame.characters[0].characterAttributes.tracking = -150;
  } else if (firstLetter == "V") {
    textFrame.characters[0].characterAttributes.tracking = -200;
  }

  // storing the width of the text
  var textWidth = textFrame.width;

  // creating outlines
  var outlines = textFrame.createOutline();

  // setting the circles parameters
  var radius = 10;
  var circle_x = x + 0;
  var circle_y = y + 25;
  var circle2_x = x - 9 + textWidth;
  var circle2_y = y + 10;

  // changing the circle parameters depending on the first letter
  if (firstLetter == "A") {
    circle_x = circle_x + 10;
    circle_y = circle_y - 10;
  } else if (firstLetter == "B") {
    circle_x = circle_x + 2;
  } else if (firstLetter == "C") {
    circle_x = circle_x + 6;
  } else if (firstLetter == "D") {
    circle_x = circle_x + 3;
  } else if (firstLetter == "E") {
    circle_x = circle_x - 3;
    circle_y = circle_y - 8;
  } else if (firstLetter == "E") {
    circle_x = circle_x + 1;
  } else if (firstLetter == "G") {
    circle_x = circle_x + 2;
    circle_y = circle_y - 3;
  } else if (firstLetter == "H") {
    circle_x = circle_x + 2;
    circle_y = circle_y - 3;
  } else if (firstLetter == "I") {
    circle_x = circle_x + 3;
    circle_y = circle_y - 3;
  } else if (firstLetter == "J") {
    circle_x = circle_x + 2;
    circle_y = circle_y - 3;
  } else if (firstLetter == "K") {
    circle_x = circle_x + 2;
  } else if (firstLetter == "L") {
    circle_x = circle_x + 2;
    circle_y = circle_y - 5;
  } else if (firstLetter == "M") {
    circle_x = circle_x + 2;
  } else if (firstLetter == "N") {
    circle_x = circle_x + 2;
  } else if (firstLetter == "O") {
    circle_x = circle_x + 2;
  } else if (firstLetter == "P") {
    circle_x = circle_x - 1;
  } else if (firstLetter == "R") {
    circle_x = circle_x + 2;
  } else if (firstLetter == "S") {
    circle_x = circle_x + 8;
    circle_y = circle_y - 5;
  } else if (firstLetter == "U") {
    circle_x = circle_x - 5;
    circle_y = circle_y - 2;
  } else if (firstLetter == "V") {
    circle_x = circle_x + 1;
  } else if (firstLetter == "Z") {
    circle_x = circle_x + 1;
    circle_y = circle_y - 4;
  }

  // changing the circle parameters depending on the last letter
  if (lastLetter == "b") {
    circle2_x += 2;
  } else if (lastLetter == "c") {
    circle2_x += 1;
  } else if (lastLetter == "d") {
    circle2_x += 2;
  } else if (lastLetter == "l") {
    circle2_x += 5;
  } else if (lastLetter == "t") {
    circle2_y += 12;
  } else if (lastLetter == "v") {
    circle2_x += 2;
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

function createNameBigSpender(name, textLayer, circleLayer, x, y) {
  var textFrame = textLayer.textFrames.add();
  textFrame.contents = name;
  var firstLetter = textFrame.contents[0];
  var lastLetter = textFrame.contents[textFrame.contents.length - 1];
  // adding the text to the position
  textFrame.position = [x, y];

  // setting the font and character size
  var textRange = textFrame.textRange;
  textRange.characterAttributes.textFont =
    app.textFonts.getByName("BigSpenderColier");
  textRange.characterAttributes.size = 28;

  //changing the spacing for the first letter depending on the first letter
  if (firstLetter == "I") {
    textFrame.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter == "O") {
    textFrame.characters[0].characterAttributes.tracking = -150;
  } else if (firstLetter == "P") {
    textFrame.characters[0].characterAttributes.tracking = -100;
  } else if (firstLetter == "V") {
    textFrame.characters[0].characterAttributes.tracking = -200;
  }

  // storing the width of the text
  var textWidth = textFrame.width;

  // creating outlines
  var outlines = textFrame.createOutline();

  // setting the circles parameters
  var radius = 10;
  var circle_x = x + 0;
  var circle_y = y + 15;
  var circle2_x = x - 10 + textWidth;
  var circle2_y = y + 9;

  // changing the circle parameters depending on the first letter
  if (firstLetter == "A") {
    circle_x += 6;
    circle_y -= 5;
  } else if (firstLetter == "B") {
    circle_x += 6;
  } else if (firstLetter == "D") {
    circle_y += 3;
  } else if (firstLetter == "E") {
    circle_x -= 1;
  } else if (firstLetter == "F") {
    circle_y += 2;
  } else if (firstLetter == "H") {
    circle_y += 2;
  } else if (firstLetter == "I") {
    circle_x -= 5;
  } else if (firstLetter == "J") {
    circle_x += 2;
  } else if (firstLetter == "K") {
    circle_y += 2;
  } else if (firstLetter == "L") {
    circle_x += 3;
  } else if (firstLetter == "M") {
    circle_x += 20;
  } else if (firstLetter == "N") {
    circle_x += 2;
  } else if (firstLetter == "O") {
    circle_x -= 3;
  } else if (firstLetter == "P") {
    circle_x -= 3;
  } else if (firstLetter == "R") {
    circle_x -= 3;
  } else if (firstLetter == "S") {
    circle_x += 2;
  } else if (firstLetter == "T") {
    circle_x -= 8;
  } else if (firstLetter == "U") {
    circle_x -= 4;
  } else if (firstLetter == "V") {
    circle_x -= 10;
  } else if (firstLetter == "Y") {
    circle_x -= 7;
  } else if (firstLetter == "Z") {
    circle_x -= 7;
  }

  // changing the circle parameters depending on the last letter
  if (lastLetter == "b") {
    circle2_x += 2;
  } else if (lastLetter == "c") {
    circle2_x -= 1;
    circle2_y -= 1;
  } else if (lastLetter == "d") {
    circle2_y += 3;
    circle2_x += 5;
  } else if (lastLetter == "e") {
    circle2_y -= 1;
  } else if (lastLetter == "f") {
    circle2_x += 7;
  } else if (lastLetter == "g") {
    circle2_y -= 4;
    circle2_x += 4;
  } else if (lastLetter == "h") {
    circle2_x += 5;
  } else if (lastLetter == "i") {
    circle2_x += 4;
  } else if (lastLetter == "i") {
    circle2_y += 1;
  } else if (lastLetter == "k") {
    circle2_x += 1;
  } else if (lastLetter == "l") {
    circle2_x += 5;
  } else if (lastLetter == "o") {
    circle2_y -= 2;
  } else if (lastLetter == "p") {
    circle2_y -= 2;
  } else if (lastLetter == "s") {
    circle2_y -= 2;
  } else if (lastLetter == "t") {
    circle2_y += 5;
    circle2_x += 5;
  } else if (lastLetter == "v") {
    circle2_y -= 1;
  } else if (lastLetter == "w") {
    circle2_y -= 1;
  } else if (lastLetter == "z") {
    circle2_y -= 2;
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

function createNamePreparation(name, textLayer, circleLayer, x, y) {
  var textFrame = textLayer.textFrames.add();
  textFrame.contents = name;
  var firstLetter = textFrame.contents[0];
  var lastLetter = textFrame.contents[textFrame.contents.length - 1];
  // adding the text to the position
  textFrame.position = [x, y];

  // setting the font and character size
  var textRange = textFrame.textRange;
  textRange.characterAttributes.textFont =
    app.textFonts.getByName("BigSpenderColier");
  textRange.characterAttributes.size = 28;

  //changing the spacing for the first letter depending on the first letter
  //  if(firstLetter == 'I')
  //  {
  //    textFrame.characters[0].characterAttributes.tracking = -100
  //  } else if(firstLetter == 'O')
  //  {
  //    textFrame.characters[0].characterAttributes.tracking = -150
  //  } else if(firstLetter == 'P')
  //  {
  //    textFrame.characters[0].characterAttributes.tracking = -100
  //  } else if(firstLetter == 'V')
  //  {
  //    textFrame.characters[0].characterAttributes.tracking = -200
  //  }

  // storing the width of the text
  var textWidth = textFrame.width;

  // creating outlines
  // var outlines = textFrame.createOutline();

  // setting the circles parameters
  var radius = 10;
  var circle_x = x + 0;
  var circle_y = y + 15;
  var circle2_x = x - 10 + textWidth;
  var circle2_y = y + 9;

  // changing the circle parameters depending on the first letter

  // changing the circle parameters depending on the last letter

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

function createNameSTD(name, textLayer, circleLayer, x, y) {
  var textFrame = textLayer.textFrames.add();
  textFrame.contents = name;
  var firstLetter = textFrame.contents[0];
  var lastLetter = textFrame.contents[textFrame.contents.length - 1];
  // adding the text to the position
  textFrame.position = [x, y];

  // setting the font and character size
  var textRange = textFrame.textRange;
  textRange.characterAttributes.textFont = app.textFonts.getByName(
    "KuenstlerScriptLTStd-ColierRegular"
  );
  textRange.characterAttributes.size = 44;

  for (var i = 0; i < name.length; i++) {
    var currentLetter = name[i];
    var trackingValue = 0;

    // Set tracking based on the current letter
    if (currentLetter == "B") {
      trackingValue = -80;
    } else if (currentLetter == "C") {
      trackingValue = -80;
    } else if (currentLetter == "D") {
      trackingValue = -80;
    } else if (currentLetter == "E") {
      trackingValue = -70;
    } else if (currentLetter == "F") {
      trackingValue = -190;
    } else if (currentLetter == "I") {
      trackingValue = -120;
    } else if (currentLetter == "K") {
      trackingValue = -40;
    } else if (currentLetter == "N") {
      trackingValue = -110;
    } else if (currentLetter == "O") {
      trackingValue = -120;
    } else if (currentLetter == "P") {
      trackingValue = -130;
    } else if (currentLetter == "S") {
      trackingValue = -120;
    } else if (currentLetter == "T") {
      trackingValue = -130;
    } else if (currentLetter == "V") {
      trackingValue = -100;
    } else if (currentLetter == "Y") {
      trackingValue = -100;
    }

    // Apply tracking to the current letter
    textFrame.characters[i].characterAttributes.tracking = trackingValue;
  }

  // storing the width of the text
  var textWidth = textFrame.width;

  // creating outlines
  var outlines = textFrame.createOutline();

  // setting the circles parameters
  var radius = 10;
  var circle_x = x - 0;
  var circle_y = y + 15;
  var circle2_x = x - 5 + textWidth;
  var circle2_y = y + 7;

  // changing the circle parameters depending on the first letter
  if (firstLetter == "A") {
    circle_x += 8;
  } else if (firstLetter == "B") {
    circle_x -= 2;
  } else if (firstLetter == "C") {
    circle_x -= 5;
  } else if (firstLetter == "D") {
    circle_x -= 2;
  } else if (firstLetter == "E") {
    circle_x -= 3;
  } else if (firstLetter == "F") {
    circle_x += 5;
  } else if (firstLetter == "G") {
    circle_x -= 6;
  } else if (firstLetter == "H") {
    circle_x += 6;
  } else if (firstLetter == "I") {
    circle_x += 7;
  } else if (firstLetter == "J") {
    circle_x += 13;
  } else if (firstLetter == "K") {
    circle_x += 6;
  } else if (firstLetter == "L") {
    circle_x += 3;
  } else if (firstLetter == "M") {
    circle_x += 19;
  } else if (firstLetter == "N") {
    circle_x += 22;
  } else if (firstLetter == "R") {
    circle_x -= 2;
  } else if (firstLetter == "S") {
    circle_x += 2;
  } else if (firstLetter == "T") {
    circle_x += 5;
  } else if (firstLetter == "U") {
    circle_x -= 6;
  } else if (firstLetter == "V") {
    circle_x -= 6;
  } else if (firstLetter == "Y") {
    circle_x -= 5;
  } else if (firstLetter == "Z") {
    circle_x += 2;
  }

  // changing the circle parameters depending on the last letter
  if (lastLetter == "b") {
    circle2_x -= 2;
    circle2_y += 2;
  } else if (lastLetter == "c") {
    circle2_y += 1;
  } else if (lastLetter == "d") {
    circle2_x -= 2;
    circle2_y += 2;
  } else if (lastLetter == "e") {
    circle2_y += 1;
  } else if (lastLetter == "f") {
    circle2_y += 2;
    circle2_x -= 2;
  } else if (lastLetter == "h") {
    circle2_y += 2;
    circle2_x -= 2;
  } else if (lastLetter == "i") {
    circle2_x += 2;
  } else if (lastLetter == "j") {
    circle2_x += 2;
  } else if (lastLetter == "k") {
    circle2_y += 2;
    circle2_x -= 2;
  } else if (lastLetter == "l") {
    circle2_y += 2;
    circle2_x -= 2;
  } else if (lastLetter == "r") {
    circle2_x -= 1;
  } else if (lastLetter == "t") {
    circle2_y += 6;
    circle2_x += 2;
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

function createNameCarrie(name, textLayer, circleLayer, x, y) {
  //   for (var f = 0; f < app.textFonts.length; f++) {
  //     $.writeln(app.textFonts[f].name);
  // }

  var textFrame = textLayer.textFrames.add();
  textFrame.contents = name;
  var firstLetter = textFrame.contents[0];
  var lastLetter = textFrame.contents[textFrame.contents.length - 1];
  // adding the text to the position
  textFrame.position = [x, y];

  // setting the font and character size
  var textRange = textFrame.textRange;
  textRange.characterAttributes.textFont =
    app.textFonts.getByName("CounselorScript");
  textRange.characterAttributes.size = 44;

  for (var i = 0; i < name.length; i++) {
    var currentLetter = name[i];
    var trackingValue = 0;

    // Set tracking based on the current letter
    if (letterIsInArray(currentLetter, ["B", "C", "D", "E", "G"])) {
      trackingValue = -50;
    } else if (
      letterIsInArray(currentLetter, [
        "F",
        "I",
        "J",
        "N",
        "O",
        "P",
        "V",
        "Y",
        "U",
      ])
    ) {
      trackingValue = -100;
    } else if (letterIsInArray(currentLetter, ["S", "T"])) {
      trackingValue = -150;
    }

    // Apply tracking to the current letter
    textFrame.characters[i].characterAttributes.tracking = trackingValue;
  }

  // storing the width of the text
  var textWidth = textFrame.width;

  // creating outlines
  var outlines = textFrame.createOutline();

  // setting the circles parameters
  var radius = 10;
  var circle_x = x - 4;
  var circle_y = y + 15;
  var circle2_x = x - 8 + textWidth;
  var circle2_y = y + 10;

  // changing the circle parameters depending on the first letter
  if (letterIsInArray(firstLetter, ["A", "N"])) {
    circle_x += 7;
  } else if (firstLetter == "M") {
    circle_x += 9;
  } else if (letterIsInArray(firstLetter, ["C", "D", "G", "U", "V"])) {
    circle_x -= 3;
  } else if (letterIsInArray(firstLetter, ["I", "S"])) {
    circle_x += 2;
  } else if (letterIsInArray(firstLetter, ["O"])) {
    circle_x -= 2;
  } else if (letterIsInArray(firstLetter, ["Y"])) {
    circle_x -= 5;
  }

  // changing the circle parameters depending on the last letter
  if (letterIsInArray(lastLetter, ["b", "c", "e", "g"])) {
    circle2_x += 6;
  } else if (letterIsInArray(lastLetter, ["d"])) {
    circle2_x += 1;
  } else if (letterIsInArray(lastLetter, ["f", "k", "r", "s", "t"])) {
    circle2_x += 2;
  } else if (letterIsInArray(lastLetter, ["i", "o", "p", "u", "v", "y", "z"])) {
    circle2_x += 4;
  } else if (letterIsInArray(lastLetter, ["m", "n"])) {
    circle2_x -= 4;
  } else if (letterIsInArray(lastLetter, ["m", "n"])) {
    circle2_x -= 4;
  } else if (letterIsInArray(lastLetter, ["w"])) {
    circle2_x -= 2;
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

function letterIsInArray(letter, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == letter) {
      return true;
    }
  }
  return false;
}

// 'Maria',
// 'Elena',
// 'Andreea',
// 'Daniela',
// 'Alina'
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
// 'Zebaz'
