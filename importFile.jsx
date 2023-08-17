// Replace "filePath" with the path to the file you want to import
var filePath = "/Users/gavriliuciurie/IllustratorDoc/butterfly.ai"; // Example: "C:/Users/Username/Documents/image.jpg"

// Get the current document
var doc = app.activeDocument;

// Check if the file exists
var fileToImport = new File(filePath);
if (fileToImport.exists) {
  // Import the file into the document
  var placedItem = doc.placedItems.add();
  placedItem.file = fileToImport;

  // Set the position of the imported item
  var xPosition = 100; // Set your desired X position
  var yPosition = 100; // Set your desired Y position
  placedItem.position = [xPosition, yPosition];

  // Set other properties if needed (e.g., width and height)
//   placedItem.width = 200;
//   placedItem.height = 150;

} else {
  alert("File not found: " + filePath);
}
