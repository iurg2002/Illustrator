var doc = app.activeDocument;

var circleLayer = doc.layers.add();
circleLayer.name = "Circle Layer";
var textLayer = doc.layers.add();
textLayer.name = "Text Layer";

// Create a new text frame at the top of the artboard
var x = 300
var y = 0

var names = ["Valera", "Marius", "VaniusaBaran", "Marinela", "Astoniiiin", "Martin"]

for (var i = 0; i< names.length; i++)
{
    var textFrame = textLayer.textFrames.add();
    textFrame.contents = names[i];
    var firstLetter = textFrame.contents[0]
    textFrame.position =[x,y]

    var textWidth = textFrame.width
    // alert(textWidth)


    var textRange = textFrame.textRange;
    textRange.characterAttributes.textFont = app.textFonts.getByName("MyFontRegular");
    textRange.characterAttributes.size = 36;

    var textWidth = textFrame.width
    var outlines = textFrame.createOutline();

    var radius = 15
    var circle_x = x-7;
    var circle_y = y+20;
if(firstLetter == 'H')
{
    circle_x = x-10;
} else if(firstLetter == 'M')
{
    circle_x = x-10;
}

var circle1 = circleLayer.pathItems.ellipse(circle_y, circle_x, radius, radius);
var circle2 = circleLayer.pathItems.ellipse(circle_y-(radius/4), circle_x+(radius/4), radius/2, radius/2);
var circle3 = circleLayer.pathItems.ellipse(circle_y, circle_x + textWidth, radius, radius);
var circle4 = circleLayer.pathItems.ellipse(circle_y-(radius/4), circle_x+textWidth+(radius/4), radius/2, radius/2);

y -= 50
}


// var textFrame = textLayer.textFrames.add();
// textFrame.contents = "Haria";
// var firstLetter = textFrame.contents[0]
// textFrame.position =[x,y]
// // Set the font and font size of the text frame
// var textRange = textFrame.textRange;
// textRange.characterAttributes.textFont = app.textFonts.getByName("MyFontRegular");
// textRange.characterAttributes.size = 36;


// Select the text range and create outlines
// textFrame.select();
// var outlines = textFrame.createOutline();

// // Unite the outlines using the Pathfinder object
// var radius = 15
// var circle_x = x-7;
// var circle_y = y+20;
// if(firstLetter == 'H')
// {
//     circle_x = x-10;
// }

// var circle1 = circleLayer.pathItems.ellipse(circle_y, circle_x, radius, radius);
// var circle2 = circleLayer.pathItems.ellipse(circle_y-(radius/4), circle_x+(radius/4), radius/2, radius/2);


// var start = textRange.characterOffset;
// var end = start + textRange.length - 1;
// alert("The start position is: " + start + ", and the end position is: " + end);
