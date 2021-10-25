/**
 * Main function.
 */
function runAlfred( config ) {
  // var sheets = SpreadsheetApp.openById( config.SHEET_ID ); // use if you want to run it on a specific sheet.
  var sheets = SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = sheets.getSheetByName( config.SHEET_NAMES.DATA_SHEET );
  var textSheet = sheets.getSheetByName( config.SHEET_NAMES.WISH_SHEET );

  var data = dataSheet.getDataRange().getValues();
  var text = textSheet.getDataRange().getValues();

  // Early return if no headers are passed.
  if ( false === config.RANGES.HEADER ) {
    return;
  }

  var birthdates = getValuesByColName( data, [config.RANGES.NAMES_COLUMN, config.RANGES.DOB_COLUMN], true );
  var anniversaries = getValuesByColName( data, [config.RANGES.NAMES_COLUMN, config.RANGES.ANNIV_COLUMN], true );

  var birthdaysToday = getEvents( birthdates, config.DATE_TO_MATCH_OR_TODAY, config.RANGES.DOB_COLUMN ); // get today's birthdays.
  var anniversariesToday = getEvents( anniversaries,config.DATE_TO_MATCH_OR_TODAY, config.RANGES.ANNIV_COLUMN ); // get today's anniversaries.
  
  Logger.log( `Total birthdays today: ${birthdaysToday.length}` );
  Logger.log( `Total anniversaries today: ${anniversariesToday.length}` );

  if ( birthdaysToday.length ) {
    let birthdayWish = generateWish( birthdaysToday, text, config.RANGES.NAMES_COLUMN, 'birthday' );
    sendSlackBdayMessage( birthdayWish, getRecipientNames( birthdaysToday, config.RANGES.NAMES_COLUMN), config );
  }

  if ( anniversariesToday.length ) {
    let anniversaryWish = generateWish( anniversariesToday, text, config.RANGES.NAMES_COLUMN, 'anniversary' );
    sendSlackAnniversaryMessage( anniversaryWish, getRecipientNames( anniversariesToday, config.RANGES.NAMES_COLUMN), config );
  }
}
