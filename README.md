# GRC Assessment
This automation project can be used to create a summary view of all responses from specific cells from each tab. This is useful to structure the responses of questionnaire templates in each tab within the g sheets file

# updateExportAndOwnersTab file
The updateExportAndOwnersTab function is a Google Apps Script designed to update two specific sheets, namely 'Export' and 'Owners', within a Google Spreadsheet.

Initialization:

Gets the active spreadsheet (ss).
Retrieves references to the 'Export' and 'Owners' sheets.
Clear Existing Data:

Clears the existing data in columns A through Y of the 'Export' sheet.
Export Data Processing:

Defines an array exportHeaders as column headers for the 'Export' sheet.
Loops through the sheets in the spreadsheet, excluding the first 5 sheets.
For each eligible sheet, extracts relevant data from specific cells and constructs a row for the 'Export' sheet.
Adds Hyperlinks to the sheet names.
Includes VLOOKUP formulas in certain columns.
Update 'Export' Sheet:

Sets the values in the 'Export' sheet with the processed export data.
Update 'Owners' Sheet:

Clears existing data in columns A through G of the 'Owners' sheet.
Processes the data for the 'Owners' sheet based on the updated export data.
Splits the owner(s) column and constructs rows for the 'Owners' sheet.
Adds Hyperlinks to the sheet names.
Apply VLOOKUP Formulas in 'Owners' Sheet:

Adds VLOOKUP formulas to columns D, E, F, and G of the 'Owners' sheet.
Utilizes references from the 'Reference' sheet.
Toast Notification:

Displays a toast notification in the spreadsheet indicating that the 'Export' and 'Owners' tabs are updated.

# sortTabsAndSetC4Values file

Sorting Tabs:

Retrieves all sheets in the active spreadsheet.
Defines a regular expression (regex) to match tab names in a specific format, such as "ID-0001" or "ID-0002".
Sorts the sheets based on the last 4 digits of the tab name using a custom sorting function.
This custom sorting function extracts the numeric portion from the tab names and sorts the sheets accordingly.
Reordering Sheets:

After sorting, it iterates through the sheets and reorders them based on the sorted array.
Uses setActiveSheet to set the active sheet to the current sheet in the iteration.
Uses moveActiveSheet to move the active sheet to its new position in the order.
Setting C4 Values:

Iterates through the sheets again, starting from the 6th sheet (index 5).
For each sheet (except the one named "Dashboard"):
Sets the value in cell C4 to the name of the sheet.
This is done to display the sheet name in cell C4 for each sheet, providing a quick reference to the user.
