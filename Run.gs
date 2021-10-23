/**
 * Main function.
 */
function main() {
  var sheets = SpreadsheetApp.openById( config.SHEET_ID );
  var dataSheet = sheets.getSheetByName( config.SHEET_NAMES.DATA_SHEET );
  var textSheet = sheets.getSheetByName( config.SHEET_NAMES.WISH_SHEET );

  var data = dataSheet.getDataRange().getValues();
  var text = textSheet.getDataRange().getValues();

  // Early return if no headers are passed.
  if ( false === config.RANGES.HEADER ) {
    return;
  }

  var birthdates = getValuesByColName( data, [config.RANGES.RTCAMPERS_COLUMN, config.RANGES.DOB_COLUMN], true );
  var anniversaries = getValuesByColName( data, [config.RANGES.RTCAMPERS_COLUMN, config.RANGES.ANNIV_COLUMN], true );

  var birthdaysToday = getEvents( birthdates, new Date(), 'DOB' ); // get today's birthdays.
  var anniversariesToday = getEvents( anniversaries, new Date(), 'Joining' ); // get today's anniversaries.
  
  if ( birthdaysToday.length ) {
    let birthdayWish = generateWish( birthdaysToday, text, config.RANGES.RTCAMPERS_COLUMN, 'birthday' );
    sendSlackBdayMessage( birthdayWish, getRecipientNames( birthdaysToday, config.RANGES.RTCAMPERS_COLUMN) );
  }

  if ( anniversariesToday.length ) {
    let anniversaryWish = generateWish( anniversariesToday, text, config.RANGES.RTCAMPERS_COLUMN, 'anniversary' );
    sendSlackAnniversaryMessage( anniversaryWish, getRecipientNames( anniversariesToday, config.RANGES.RTCAMPERS_COLUMN) );
  }
}

