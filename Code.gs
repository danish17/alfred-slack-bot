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
function generateWish (events, wishSheet, nameKey, wishType) {
  let wishText = ''

  if (wishType === 'birthday') {
    wishText = getRandomBirthdayMessage(wishSheet)
  } else if (wishType === 'anniversary') {
    wishText = getRandomAnniversaryMessage(wishSheet)
  }

  const names = events.map(event => event[nameKey])

  wishText = replaceNames(wishText, names, '<names>') // replace placeholder text <names> with names.

  return wishText
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
function replaceNames(wishText, names, placeholder = '<names>') {
  if (!names.length) {
    return wishText
  }

  wishText = String(wishText).replace(placeholder, createTextFromNames => {
    if (names.length > 1) {
      names[names.length - 1] = 'and ' + names[names.length - 1] // add 'and' to last name
    }
    return names.join(', ')
  })

  return wishText
}

/**
 * Generates random birthday wish text.
 *
 * @param {Array} wishSheet - Wish Shet Data.
 * @returns {string}
 */
function getRandomBirthdayMessage (wishSheet) {
  const data = getValuesByColName(wishSheet, ['Text', 'Type'], true)
  const birthdayWishes = data.filter(wish => wish.Type === 'Birthday')
  const randIdx = Math.floor((Math.random() * birthdayWishes.length) + 0)

  return birthdayWishes[randIdx].Text
}

/**
 * Generates random anniversary wish text.
 *
 * @param {Array} wishSheet - Wish Sheet Data.
 * @returns {string}
 */
function getRandomAnniversaryMessage (wishSheet) {
  const data = getValuesByColName(wishSheet, ['Text', 'Type'], true)
  const anniversaryWishes = data.filter(wish => wish.Type === 'Anniversary')
  const randIdx = Math.floor((Math.random() * anniversaryWishes.length) + 0)

  return anniversaryWishes[randIdx].Text
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
function getValuesByColName (data, colName, multiCols) {
  // if only one column data to extract.
  if (multiCols === false) {
    const col = data[0].indexOf(colName)

    if (col !== -1) {
      let i = 0
      const colVals = []
      data.forEach(row => {
        if (i !== 0) {
          colVals.push(row[col])
        }
        ++i
      })

      return colVals
    }
  }

  return getValuesByMultiColNames(data, colName)
}

/**
 * Gets values of a mutliple columns by name.
 *
 * @param {Array} data - Sheet values.
 * @param {Array} colNames - Name of columns to get data of.
 *
 * @returns {Array} Returns the values of the columns as an n-dim array.
 */
function getValuesByMultiColNames(data, colNames) {
  const colIdxs = []

  // obtain index of each column.
  colNames.forEach(colName => {
    colIdxs.push(data[0].indexOf(colName))
  })

  const colValsArr = []

  if (colIdxs.length > 0) {
    let colValsObj = {}
    let i = 0

    data.forEach(row => {
      if (i !== 0) {
        // get value for each column and append to object.
        colIdxs.forEach(colIdx => {
          colValsObj[data[0][colIdx]] = row[colIdx]
        })
        colValsArr.push(colValsObj)
        colValsObj = {} // reset the object.
      }
      ++i
    })
  }

  return colValsArr
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
function getEvents (eventsData, date, key) {
  const todaysEvents = []
  eventsData.forEach(entry => {
    const eventDate = new Date( entry[key])
    if (eventDate.getMonth() === date.getMonth() && eventDate.getDate() === date.getDate()) {
      todaysEvents.push(entry)
    }
  })

  return todaysEvents
}

/**
 * Get list of recipients for an event.
 *
 * @param {Array} eventsData - Data of the event.
 * @param {string} key - Key for the names col.
 */
function getRecipientNames (eventsData, key) {
  var namesArr = eventsData.map(event => event[key])
  namesArr = namesArr.map( name => '*' + name + '*') // bold names.

  const namesList = replaceNames( '<names>', namesArr, '<names>') // get list of names separated by commas.

  return namesList
}
