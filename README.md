Link to GRC Assessment Template: https://docs.google.com/spreadsheets/d/1G1hS-xdcinTgkcjGvrWDnTBSsqgwRGOfhJpTO-HgLrs/edit?usp=sharing

# GRC Assessment
This automation project can be used to create a summary view of all responses from specific cells from each tab. This is useful to structure the responses of questionnaire templates in each tab within the g sheets file

# updateExportAndOwnersTab file
This script updates an export and owners tab in a Google Sheets document. It reads data from multiple sheets and specific cells within those sheets, and populates a new sheet with the data in a specific format and vlookups with rating category data. Additionally, it pulls column B from the export tab containing the concatenated 'Owners' email data and then splits the data into separate rows using semicolons as a delimeter. Finally, it displays a notification that the export is complete.

# sortTabsAndSetC4Values file
This script that sets the value of cell C4 on all sheets in the active spreadsheet to the respective sheet name, except for the sheet named "Dashboard". Further, This script sorts the sheets in a Google Sheets spreadsheet based on the last 4 digits of the tab name in a specific format ("XXX-0001 (XXX)"). It first sorts the sheets based on the tab name and then reorders the sheets based on the sorted array.

# resetTabs file
This script resets the status of all sheets by updating Cell C58 to 'Not started'. This is useful for resetting each sheet at the end of the assessment

# AutomationButton file
Creates custom menu button in google sheets titled 'Automation' which allows user to run appscripts with the click of a button.

# Dashboard file
This script navigates to the "Dashboard" tab of the active Google Sheet and displays a toast notification with the message "Going to Dashboard". This is assigned to the dashboard image on the top right corner of each assessment.

