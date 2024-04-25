function goToTab() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Dashboard");
  ss.setActiveSheet(sheet);
  SpreadsheetApp.getActiveSpreadsheet().toast('Going to Dashboard', 'Status', 2);
}
