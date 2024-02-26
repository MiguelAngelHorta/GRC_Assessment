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
