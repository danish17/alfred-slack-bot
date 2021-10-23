/**
 * Generate wish for event.
 * 
 * @param {Array} events - list of events.
 * @param {Array} wishSheet - data of wishes.
 * @param {string} nameKey - key to identify names in object.
 * @param {string} wishType - type of message (birthday | anniversary ).
 * 
 * @returns {string}  Returns formatted wish text. 
 */
function generateWish( events, wishSheet, nameKey, wishType ) {
  let wishText = '';

  if ( 'birthday' === wishType ) {
    wishText = getRandomBirthdayMessage( wishSheet );
  } else if ( 'anniversary' === wishType ) {
    wishText = getRandomAnniversaryMessage( wishSheet );
  }

  let names = events.map( event => event[nameKey] );

  wishText = replaceNames( wishText, names, '<names>' ); // replace placeholder text <names> with names.

  return wishText;
}

/**
 * Replace placeholder text with names.
 * 
 * @param {string} wishText - Message.
 * @param {Array} names - Names of recipients.
 * @param {string} placeholder - Placeholder text (default: <names>).
 * 
 * @returns {string} Returns the message with names.
 */
function replaceNames( wishText, names, placeholder='<names>' ) {
  if ( !names.length ) {
    return wishText;
  }

  wishText = String(wishText).replace( placeholder, createTextFromNames => {
    if ( 1 < names.length ) {
      names[ names.length - 1] = 'and ' + names[ names.length - 1 ]; // add 'and' to last name
    }
    return names.join( ', ' );
  } );

  return wishText;
}

/**
 * Generates random birthday wish text.
 * 
 * @returns {string}
 */
function getRandomBirthdayMessage( wishSheet ) {
  let data = getValuesByColName( wishSheet, ['Text', 'Type'], true );
  let birthdayWishes = data.filter( wish => 'Birthday' === wish['Type'] );
  let randIdx = Math.floor((Math.random() * birthdayWishes.length) + 0);

  return birthdayWishes[randIdx]['Text'];
}

/**
 * Generates random anniversary wish text.
 * 
 * @returns {string}
 */
function getRandomAnniversaryMessage( wishSheet ) {
  let data = getValuesByColName( wishSheet, ['Text', 'Type'], true );
  let anniversaryWishes = data.filter( wish => 'Anniversary' === wish['Type'] );
  let randIdx = Math.floor((Math.random() * anniversaryWishes.length) + 0);

  return anniversaryWishes[randIdx]['Text'];
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
  var colIdxs = [];

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
 * @param {string} key - Name of the key for dates.
 * 
 * @returns {Array} Returns matching events.
 */
function getEvents( eventsData, date, key ) {
  var todaysEvents = [];
  eventsData.forEach( entry => {
    let eventDate = new Date( entry[key] );
    if ( eventDate.getMonth() === date.getMonth() && eventDate.getDate() === date.getDate() ) {
      todaysEvents.push( entry );
    }
  } );

  return todaysEvents;
}

/**
 * Get list of recipients for an event.
 * 
 * @param {}
 */
function getRecipientNames( eventsData, key ) {
  let namesArr = eventsData.map( event => event[key] );
  let namesList = namesArr.join( '\n' );

  return namesList;
}
