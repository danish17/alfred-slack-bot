// Configuration Constant
// EDIT THIS
const config = {
  // SLACK API AUTH
  'SLACK_API_AUTH': 'xyz',
  
  // GOOGLE SHEET ID 
  // Example: https://docs.google.com/spreadsheets/d/1234567890abcde/edit#gid=0
  // ID: 1234567890abcde
  'SHEET_ID': '1BYauLIjtl5UT6lUMtbu0jEedCIL5sK6HvPlCyoSM0bM',
  
  // SHEET NAMES
  'SHEET_NAMES': {
    'DATA_SHEET': 'Data', // sheet in which dates are stored.
    'WISH_SHEET': 'Messages' // sheet in which texts are stored.
  },

  // DATA RANGES
  'RANGES': {
    'HEADER': true, // set to false if first row is also data.
    'DOB_COLUMN': 'DOB', // column for birthdates (name).
    'ANNIV_COLUMN': 'Joining', // column for joining dates (name).
    'RTCAMPERS_COLUMN': 'rtCamper', // column for rtCamper's names. 
  }
};
// STOP EDITING

/**
 * Generates random wish text.
 * 
 * @returns {string}
 */
function getRandomMessage( wishType ) {
  wishText = '';

  switch( wishType ){
    case 'birthday': wishText = getRandomBirthdayMessage();
    break;

    case 'anniversary': wishText = getRandomAnniversaryMessage();
    break;

    default: getRandomMessage( 'birthday' )
  }

  return wishText;
}

/**
 * Generates random birthday wish text.
 * 
 * @returns {string}
 */
function getRandomBirthdayMessage() {
  return 'hello1';
}

/**
 * Generates random anniversary wish text.
 * 
 * @returns {string}
 */
function getRandomAnniversaryMessage() {
  return 'hello1';
}

/**
 * Gets values of a column by name.
 * 
 * @param {Array} data - Sheet data.
 * @param {string} colName - Name of the column to get the data of.
 * @param {boolean} multiCols - Whether to grab multiple columns.
 * 
 * @returns {Array} Returns the values of the column.
 */
function getValuesByColName( data, colName, multiCols ) {
  // if only one column data to extract.
  if ( false === multiCols ) {
    let col = data[0].indexOf( colName );

    if ( -1 != col ) {
      let i = 0;
      let colVals = [];
      data.forEach( row => {
        if ( 0 !== i ) { 
          colVals.push( row[col] );
        }
        ++i;
      } );

      return colVals;
    }
  }

  return getValuesByMultiColNames( data, colName );
}

/**
 * Gets values of a mutliple columns by name.
 * 
 * @param {Array} data - Sheet values.
 * @param {Array} colNames - Name of columns to get data of.
 * 
 * @returns {Array} Returns the values of the columns as an n-dim array.
 */
function getValuesByMultiColNames( data, colNames ) {
  let colIdxs = [];

  // obtain index of each column.
  colNames.forEach( colName => {
    colIdxs.push( data[0].indexOf(colName) );
  } );

  if ( 0 < colIdxs.length ) {
    var colValsArr = [];
    let colValsObj = {};
    let i = 0;

    data.forEach( row => {
      if ( 0 !== i ) {
        // get value for each column and append to object.
        colIdxs.forEach( colIdx => {
          colValsObj[ data[0][colIdx] ] = row[colIdx];
        } );
        colValsArr.push(colValsObj);
        colValsObj = {}; // reset the object.
      }
      ++i;
    } );

  }

  return colValsArr;
}

/**
 * Gets events (birthdays/anniversaries) of a given date.
 * 
 * @param {Array} eventsData - Array (of objects) of dates and other data.
 * @param {Object} date - Date object.
 * 
 * @returns {Array} Returns matching events.
 */
function getEvents( eventsData, date ) {

}

/**
 * Main function.
 */
function main() {
  let sheets = SpreadsheetApp.openById( config.SHEET_ID );
  let dataSheet = sheets.getSheetByName( config.SHEET_NAMES.DATA_SHEET );
  let textSheet = sheets.getSheetByName( config.SHEET_NAMES.WISH_SHEET );

  let data = dataSheet.getDataRange().getValues();
  let text = textSheet.getDataRange().getValues();

  // Early return if no headers are passed.
  if ( false === config.RANGES.HEADER ) {
    return;
  }

  let birthdates = getValuesByColName( data, [config.RANGES.RTCAMPERS_COLUMN, config.RANGES.DOB_COLUMN], true );
  getEvents( birthdates, new Date().getDate ); // get today's birthdays.
}

main();
