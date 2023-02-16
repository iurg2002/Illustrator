// create a new document
var doc = app.documents.add();

// create a new text frame
var textFrame = doc.textFrames.add();
textFrame.contents = "Hello World";

// get the first character and its properties
textFrame.characters[0].characterAttributes.tracking = -140
// var charProps = firstChar.characterAttributes;

// // set the tracking of the first character to -140
// charProps.tracking = -140;

// refresh the text frame to see the changes
