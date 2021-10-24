# Alfred Slack Bot 
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/acee0665d7414dd98b6b8959f1d22852)](https://www.codacy.com/gh/danish17/alfred-slack-bot/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=danish17/alfred-slack-bot&amp;utm_campaign=Badge_Grade) 
<a href="https://slack.com/oauth/v2/authorize?client_id=2618518958503.2630472038933&scope=chat:write,incoming-webhook&user_scope="><img alt="Add to Slack" height="20" width="70" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>

### Your personal slack butler 🤵‍♂️ 
Alfred helps you to automatically send birthday and anniversary wishes on Slack using Google App Script, Google Triggers, and Google Sheets.

## Getting Started
1. [Install](https://slack.com/oauth/v2/authorize?client_id=2618518958503.2630472038933&scope=chat:write,incoming-webhook&user_scope=) the app in your Slack workspace
2. Create an Incoming Slack Webhook [Learn more](https://api.slack.com/messaging/webhooks)
3. Create a Google Script for your Google Sheet using `Tools > Script Editor`
5. Add a Library - Import Alfred using the ID - `1u4gU_yqTtdvhckO5JymTXz87MDKerxg8jc2bPeO4x6ATRS8O7cEs7eoj` 
6. Create a file and use the `alfredExample()` as a reference
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
### To setup automatic messaging, use Google Triggers ([Time-driven Google Timers](https://developers.google.com/apps-script/guides/triggers/installable#time-driven_triggers))

### ➡️ Script ID: `1u4gU_yqTtdvhckO5JymTXz87MDKerxg8jc2bPeO4x6ATRS8O7cEs7eoj`

![](https://danishshakeel.me/wp-content/uploads/2021/10/Screenshot-2021-10-24-at-7.28.03-PM.png)
