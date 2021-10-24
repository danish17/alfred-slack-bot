/**
 * Class alfredConfig
 */
class AlfredConfig {
  constructor(WEBHOOK_URL) {
    this.SLACK_WEBHOOK = WEBHOOK_URL
    this.RANGES = {}
    this.SLACK_CONFIG  = {}
    this.SHEET_NAMES   = {}
    this.RANGES.HEADER = true
  }

  // Setters & Getters.
  set sheetId (SHEET_ID) {
    this.SHEET_ID = SHEET_ID
  }

  get sheetId() {
    return this.SHEET_ID
  }

  set dataSheet (DATA_SHEET) {
    this.SHEET_NAMES.DATA_SHEET = DATA_SHEET
  }

  get dataSheet () {
    return this.SHEET_NAMES.DATA_SHEET
  }

  set messageSheet (WISH_SHEET) {
    this.SHEET_NAMES.WISH_SHEET = WISH_SHEET
  }

  get messageSheet () {
    return this.SHEET_NAMES.WISH_SHEET
  }

  set dataHasHeader (HEADER) {
    this.RANGES.HEADER = HEADER
  }

  get dataHasHeader () {
    return this.RANGES.HEADER
  }

  set dobColumnKey (DOB_COLUMN) {
    this.RANGES.DOB_COLUMN = DOB_COLUMN
  }

  get dobColumnKey () {
    return this.RANGES.DOB_COLUMN
  }

  set annivColumnKey (ANNIV_COLUMN) {
    this.RANGES.ANNIV_COLUMN = ANNIV_COLUMN
  }

  get annivColumnKey () {
    return this.RANGES.ANNIV_COLUMN
  }

  set namesColumnKey (NAMES_COLUMN) {
    this.RANGES.NAMES_COLUMN = NAMES_COLUMN
  }

  get namesColumnKey () {
    return this.RANGES.NAMES_COLUMN
  }

  set birthdayHeader (BIRTHDAY_HEADER) {
    this.SLACK_CONFIG.BIRTHDAY_HEADER = BIRTHDAY_HEADER
  }

  get birthdayHeader () {
    return this.SLACK_CONFIG.BIRTHDAY_HEADER
  }

  set birthdayImage (BIRTHDAY_IMAGE_URL) {
    this.SLACK_CONFIG.BIRTHDAY_IMAGE_URL = BIRTHDAY_IMAGE_URL
  }

  get birthdayImage () {
    return this.SLACK_CONFIG.BIRTHDAY_IMAGE_URL
  }

  set birthdayTitle (BIRTHDAY_TITLE) {
    this.SLACK_CONFIG.BIRTHDAY_TITLE = BIRTHDAY_TITLE
  }

  get birthdayTitle () {
    return this.SLACK_CONFIG.BIRTHDAY_TITLE
  }

  set anniversaryHeader (ANNIVERSARY_HEADER) {
    this.SLACK_CONFIG.ANNIVERSARY_HEADER = ANNIVERSARY_HEADER
  }

  get anniversaryHeader () {
    return this.SLACK_CONFIG.ANNIVERSARY_HEADER
  }

  set anniversaryImage (ANNIVERSARY_IMAGE_URL) {
    this.SLACK_CONFIG.ANNIVERSARY_IMAGE_URL = ANNIVERSARY_IMAGE_URL
  }

  get anniversaryImage () {
    return this.SLACK_CONFIG.ANNIVERSARY_IMAGE_URL
  }

  set anniversaryTitle (ANNIVERSARY_TITLE) {
    this.SLACK_CONFIG.ANNIVERSARY_TITLE = ANNIVERSARY_TITLE
  }

  get anniversaryTitle () {
    return this.SLACK_CONFIG.ANNIVERSARY_TITLE
  }

  set dateToMatch (DATE) {
    this.DATE_TO_MATCH_OR_TODAY = DATE
  }

  get dateToMatch () {
    return this.DATE_TO_MATCH_OR_TODAY
  }
}

/**
 * Factory method for alfredConfig class.
 *
 * @param {string} SLACK_WEBHOOK - Slack Webhook URL.
 */
function createConfig (SLACK_WEBHOOK) {
  return new AlfredConfig(SLACK_WEBHOOK)
}
