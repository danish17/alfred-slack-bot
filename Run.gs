/**
 * Main function.
 */
function runAlfred (config) {
  // var sheets = SpreadsheetApp.openById( config.SHEET_ID ); // use if you want to run it on a specific sheet.
  const sheets = SpreadsheetApp.getActiveSpreadsheet()
  const dataSheet = sheets.getSheetByName(config.SHEET_NAMES.DATA_SHEET)
  const textSheet = sheets.getSheetByName(config.SHEET_NAMES.WISH_SHEET)

  const data = dataSheet.getDataRange().getValues()
  const text = textSheet.getDataRange().getValues()

  // Early return if no headers are passed.
  if ( config.RANGES.HEADER === false) {
    return
  }

  const birthdates = getValuesByColName(data, [config.RANGES.NAMES_COLUMN, config.RANGES.DOB_COLUMN], true)
  const anniversaries = getValuesByColName(data, [config.RANGES.NAMES_COLUMN, config.RANGES.ANNIV_COLUMN], true)

  const birthdaysToday = getEvents(birthdates, config.DATE_TO_MATCH_OR_TODAY, config.RANGES.DOB_COLUMN) // get today's birthdays.
  const anniversariesToday = getEvents(anniversaries,config.DATE_TO_MATCH_OR_TODAY, config.RANGES.ANNIV_COLUMN) // get today's anniversaries.

  Logger.log(`Total birthdays today: ${birthdaysToday.length}`)
  Logger.log(`Total birthdays today: ${anniversariesToday.length}`)

  if (birthdaysToday.length) {
    const birthdayWish = generateWish(birthdaysToday, text, config.RANGES.NAMES_COLUMN, 'birthday')
    sendSlackBdayMessage(birthdayWish, getRecipientNames(birthdaysToday, config.RANGES.NAMES_COLUMN), config)
  }

  if (anniversariesToday.length) {
    const anniversaryWish = generateWish(anniversariesToday, text, config.RANGES.NAMES_COLUMN, 'anniversary')
    sendSlackAnniversaryMessage(anniversaryWish, getRecipientNames(anniversariesToday, config.RANGES.NAMES_COLUMN), config)
  }
}
