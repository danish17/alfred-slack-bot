/**
 * Sends a Slack message.
 *
 * @param {string} message - Message to send.
 */
function sendSlackBdayMessage (message, names, config) {
  const payload = {
    "blocks": [
      {
        "type": 'header',
        "text": {
          "type": 'plain_text',
          "text": config.SLACK_CONFIG.BIRTHDAY_HEADER
        }
      },
      {
        "type": 'section',
        "text": {
          "type": 'plain_text',
          "emoji": true,
          "text": config.SLACK_CONFIG.BIRTHDAY_TITLE
        }
      },
      {
        "type": 'section',
        "text": {
          "type": 'mrkdwn',
          "text": names
        },
        "accessory": {
          "type": 'image',
          "image_url": config.SLACK_CONFIG.BIRTHDAY_IMAGE_URL,
          "alt_text": 'Birthday Image'
        }
      },
      {
        "type": 'divider'
      }
    ],
    "attachments": [
		{
			"color": "#ED1C46",
			"blocks": [
				{
        "type": 'section',
        "text": {
          "type": 'plain_text',
          "text": message
        }
      }
			]
		},
    {
      "blocks": [
        {
          "type": 'context',
          "elements": [
            {
              "type": 'plain_text',
              "text": 'Yours Truly,\nAlfred :man_in_tuxedo:'
            }
          ]
          }
      ]
    }
	]
  }

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  }

  Logger.log('Sending Birthday Message...')
  return UrlFetchApp.fetch(config.SLACK_WEBHOOK, options)
}

/**
 * Sends a Slack message.
 *
 * @param {string} message - Message to send.
 */
function sendSlackAnniversaryMessage (message, names, config) {
  const payload = {
    "blocks": [
      {
        "type": "header",
        "text": {
          "type": "plain_text",
          "text": config.SLACK_CONFIG.ANNIVERSARY_HEADER
        }
      },
      {
        "type": "section",
        "text": {
          "type": "plain_text",
          "emoji": true,
          "text": config.SLACK_CONFIG.ANNIVERSARY_TITLE
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": names
        },
        "accessory": {
          "type": "image",
          "image_url": config.SLACK_CONFIG.ANNIVERSARY_IMAGE_URL,
          "alt_text": "Anniversary Image"
        }
        },
      {
        type: "divider"
      }
    ],
    "attachments": [
		{
			"color": "#1C7AED",
			"blocks": [
				{
        "type": "section",
        "text": {
          "type": "plain_text",
          "text": message
        }
      }
			]
		},
    {
      "blocks": [
        {
          "type": "context",
          "elements": [
            {
              "type": "plain_text",
              "text": "Yours Truly,\nAlfred :man_in_tuxedo:"
            }
          ]
          }
      ]
    }
	]
  }

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  }

  Logger.log('Sending Anniversary Message...')
  return UrlFetchApp.fetch(config.SLACK_WEBHOOK, options)
}
