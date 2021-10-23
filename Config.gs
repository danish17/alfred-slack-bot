// Configuration Constant
// EDIT THIS
const config = {
  // SLACK API AUTH
  'SLACK_API_AUTH': YOUR_OAUTH_HERE, // not used: initialize to ''
  'SLACK_WEBHOOK' : YOUR_SLACK_WEBHOOK_URL_HERE, // https://api.slack.com/messaging/webhooks
  
  // GOOGLE SHEET ID 
  // Example: https://docs.google.com/spreadsheets/d/1234567890abcde/edit#gid=0
  // ID: 1234567890abcde
  'SHEET_ID': YOUR_GOOGLE_SHEET_ID_HERE,
  
  // SHEET NAMES
  'SHEET_NAMES': {
    'DATA_SHEET': DATA_SHEET_NAME_HERE, // sheet in which dates are stored.
    'WISH_SHEET': WISH_MESSAGE_SHEET_NAME_HERE // sheet in which texts are stored.
  },

  // DATA RANGES
  'RANGES': {
    'HEADER': true, // set to false if first row is also data.
    'DOB_COLUMN': DATE_OF_BIRTH_COLUMN_NAME_HERE, // column for birthdates (name).
    'ANNIV_COLUMN': JOINING_COLUMN_NAME_HERE, // column for joining dates (name).
    'RTCAMPERS_COLUMN': NAMES_COLUMN_HERE, // column for recipients' names. 
  },

  // SLACK CONFIG
  // Text doesn't support markdown!
  'SLACK_CONFIG': {
    'BIRTHDAY_HEADER': 'Birthday Bash',
    'ANNIVERSARY_HEADER': 'Cheers to one more year at the company',
    'BIRTHDAY_TITLE': 'Today, these folks are celebrating their birthday :birthday::',
    'ANNIVERSARY_TITLE': 'Today, these folks are celebrating their anniversary at rtCamp :partying_face::',
    'BIRTHDAY_IMAGE_URL': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTetKToM-jBKFX89ZxYclubrA5rkqeJhJ2JcQ&usqp=CAU',
    'ANNIVERSARY_IMAGE_URL': 'https://i.pinimg.com/736x/53/62/20/536220dd51e9c770b986ba364c13cf27.jpg',
  }
};
// STOP EDITING
