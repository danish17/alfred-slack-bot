function alfredExample() {
  // Instantiate a new config object with the Slack Webhook URL.
  var config = new alfredConfig( 'https://hooks.slack.com/services/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' );

  // Set parameters.
  config.dataSheet      = 'Data'; // Set name of the sheet containing data.
  config.messageSheet   = 'Messages'; // Set name of the sheet containing messages.
  config.dobColumnKey   = 'DOB';
  config.annivColumnKey = 'Joining';
  config.namesColumnKey = 'rtCamper';
  var date = new Date();
  date.setDate(date.getDate() - 1);
  config.dateToMatch    = date;

  // Configure messages.
  config.birthdayHeader = 'Birthday Bash!';
  config.birthdayImage =  'https://hooks.slack.com/services/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';
  config.birthdayTitle = 'Today, these rtCampers are celebrating their birthdays :birthday::';
  config.anniversaryHeader = 'Cheers to another year at rtCamp!';
  config.anniversaryImage =  'https://i.pinimg.com/736x/53/62/20/536220dd51e9c770b986ba364c13cf27.jpg';
  config.anniversaryTitle = 'These rtCampers are celebrating their work anniversary today :partying_face::';

  // Run Alfred.
  runAlfred( config );
}
