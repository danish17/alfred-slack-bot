# Alfred Slack Bot
### Your personal slack butler 🤵‍♂️ 
Alfred helps you to automatically send birthday and anniversary wishes on Slack using Google App Script, Google Triggers, and Google Sheets.

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
