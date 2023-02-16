// Define input parameters
var name = "Jenny";  // replace with the desired name
var fontName = "Helvetica";  // replace with the desired font name
var fontSize = 100;  // replace with the desired font size
var hangerType = "circle";  // replace with "circle" or "heart"

// Create a new text frame and set its properties
var textFrame = app.activeDocument.textFrames.add();
textFrame.contents = name;
textFrame.textRange.characterAttributes.textFont = app.textFonts.getByName(fontName);
textFrame.textRange.characterAttributes.size = fontSize;

// Convert the text to paths
var outlineGroup = textFrame.createOutline();
var paths = outlineGroup.pathItems;

// Add hangers to each end of the name
var hangerSize = 15;  // replace with the desired hanger size
for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    if (i == 0) {
        addHanger(path, "start");
    } else if (i == paths.length - 1) {
        addHanger(path, "end");
    }
}

// Save the document as a DXF file
var saveOptions = new ExportOptionsAutoCAD();
saveOptions.exportFileFormat = AutoCADExportFileFormat.DXF;
saveOptions.version = AutoCADCompatibility.AutoCADRelease14;
var file = new File("~/Desktop/" + name + ".dxf");  // replace with the desired file path
app.activeDocument.exportFile(file, ExportType.AUTOCAD, saveOptions);

// Helper function to add hangers to a path
function addHanger(path, position) {
    var bounds = path.geometricBounds;
    var centerX = (bounds[0] + bounds[2]) / 2;
    var centerY = (bounds[1] + bounds[3]) / 2;
    var hanger = null;
    if (hangerType == "circle") {
        hanger = app.activeDocument.pathItems.ellipse(centerY - hangerSize, centerX - hangerSize, hangerSize * 2, hangerSize * 2);
    } else if (hangerType == "heart") {
        hanger = app.activeDocument.pathItems.add();
        hanger.setEntirePath([
            [centerY - hangerSize, centerX],
            [centerY - hangerSize, centerX - hangerSize / 2],
            [centerY - hangerSize / 2, centerX - hangerSize],
            [centerY, centerX - hangerSize / 2],
            [centerY + hangerSize / 2, centerX - hangerSize],
            [centerY + hangerSize, centerX - hangerSize / 2],
            [centerY + hangerSize, centerX],
            [centerY + hangerSize / 2, centerX + hangerSize],
            [centerY, centerX],
            [centerY - hangerSize / 2, centerX + hangerSize]
        ]);
    }
    if (position == "start") {
        hanger.rotate(90);
        hanger.translate(centerX - hangerSize, centerY);
    } else if (position == "end") {
        hanger.rotate(-90);
        hanger.translate(centerX + hangerSize, centerY);
    }
}
