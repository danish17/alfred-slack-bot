function alfredExample() {
  // Instantiate a new config object with the Slack Webhook URL.
  const config = createConfig(YOUR_SLACK_WEBHOOK_HERE)

  // Set parameters.
  config.dataSheet = DATA_SHEET_NAME_HERE // Set name of the sheet containing data.
  config.messageSheet = MESSAGE_SHEET_NAME_HERE // Set name of the sheet containing messages.
  config.dobColumnKey = DOB_COLUMN_KEY_HERE // Birthdate column key.
  config.annivColumnKey = JOINING_DATE_KEY_HERE // Joining Date/Anniversary column key.
  config.namesColumnKey = NAMES_KEY_HERE // Names column key.
  const date = new Date() // Init a date object.
  date.setDate(date.getDate() - 1) // Example: match events for yesterday.
  config.dateToMatch = date // Set date.

  // Configure messages.
  config.birthdayHeader = BIRTHDAY_HEADER_HERE
  config.birthdayImage = BIRTHDAY_IMAGE_URL_HERE
  config.birthdayTitle = BIRTHDAY_MESSAGE_TITLE_HERE // supports markdown.
  config.anniversaryHeader = ANNIVERSARY_HEADER_HERE
  config.anniversaryImage = ANNIVERSARY_IMAGE_URL_HERE
  config.anniversaryTitle = ANNIVERSARY_MESSAGE_TITLE_HERE // supports markdown.

  // Run Alfred.
  runAlfred(config);
}
