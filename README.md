# Alfred Slack Bot
### Your personal slack butler 🤵‍♂️ 
Alfred helps you to automatically send birthday and anniversary wishes on Slack using Google App Script, Google Triggers, and Google Sheets.

## Getting Started
```js
function alfredExample() {
  // Instantiate a new config object with the Slack Webhook URL.
  const config = createConfig('https://hooks.slack.com/services/xyz123456789/abcdef/123xyz')

  // Set parameters.
  config.dataSheet = 'Data' // Set name of the sheet containing data.
  config.messageSheet = 'Messages' // Set name of the sheet containing messages.
  config.dobColumnKey = 'DOB' // Birthdate column key.
  config.annivColumnKey = 'Joining' // Joining Date/Anniversary column key.
  config.namesColumnKey = 'E-Name' // Names column key.
  const date = new Date() // Init a date object.
  date.setDate(date.getDate() - 1) // Example: match events for yesterday.
  config.dateToMatch = date // Set date.

  // Configure messages.
  config.birthdayHeader = 'Birthday Bash!'
  config.birthdayImage = 'https://i.pinimg.com/736x/ee/f0/36/eef036f583e91a438896a377716ea85e.jpg'
  config.birthdayTitle = 'Today, these folks are celebrating their birthdays :birthday::'
  config.anniversaryHeader = 'Cheers to another year at rtCamp!'
  config.anniversaryImage = 'https://i.pinimg.com/736x/53/62/20/536220dd51e9c770b986ba364c13cf27.jpg'
  config.anniversaryTitle = 'These folks are celebrating their work anniversary today :partying_face::'

  // Run Alfred.
  runAlfred(config);
}
```
## Docs
### `Alfred.main()`
Run Alfred and send message(s)

### `Alfred.setWebhook( SLACK_WEBHOOK )`
Set Slack Webhook
```
// Example
function fooBar() {
  Alfred.setSlackWebhook( 'https://hooks.slack.com/services/XYZ987/1234/ABCD' );
  Alfred.main();
}
```

## Files
- `Run.gs` - Main runner
- `Core.gs` - Core functions to handle data
- `Slack.gs` - Slack-related functions to post wishes
- `Config.gs` - Configuration file

### Script ID: `1u4gU_yqTtdvhckO5JymTXz87MDKerxg8jc2bPeO4x6ATRS8O7cEs7eoj`
