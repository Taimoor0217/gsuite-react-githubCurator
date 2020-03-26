function include(filename) {
Logger.log(filename)
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function onOpen() {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Explore', 'showSidebar')
      .addToUi();
}
function showSidebar() {
        var ui = HtmlService.createTemplateFromFile('Index')
        .evaluate()
        .setTitle('Git Curator')
        .setWidth(1000)
        ;
        DocumentApp.getUi().showSidebar(ui);
}
function addRepository(content){
  var body = DocumentApp.getActiveDocument().getBody()
  var paragraph = body.appendParagraph("")
  var imageBlob = UrlFetchApp
  .fetch('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png').getBlob()
  var image = paragraph.appendInlineImage(imageBlob)
  image.setWidth(120)
  image.setHeight(80)  
  image.setLinkUrl(content['url'])
  var text = paragraph.appendText(content["name"])
  text.setFontSize(16)
  text.setBold(true)
  text = paragraph.appendText("\n" + content["description"])
  text.setFontSize(12)
  text.setItalic(true)
  text.setBold(false)
  paragraph.setVerticalAlignment("middle")
 }