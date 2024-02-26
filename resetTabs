function resetTabs() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  
  for (var i = 4; i < sheets.length; i++) {
    var sheet = sheets[i];
    sheet.getRange("C58").setValue("Not Started");
  }
}
