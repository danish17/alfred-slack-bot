/**
 * Class alfredConfig
 */
class alfredConfig {
  constructor( WEBHOOK_URL ) {
    this.SLACK_WEBHOOK = WEBHOOK_URL;
    this.RANGES        = {};
    this.SLACK_CONFIG  = {};
    this.SHEET_NAMES   = {};
    this.RANGES.HEADER = true;
  }

  /**
   * Setter method - Set Sheet ID.
   * 
   * @param {string} SHEET_ID - Google Sheet ID.
   */
  set sheetId( SHEET_ID ) {
    this.SHEET_ID = SHEET_ID;
  }

  /**
   * Setter method - Set Sheet ID.
   * 
   * @param {string} DATA_SHEET - Name of the sheet containing data.
   */
  set dataSheet( DATA_SHEET ) {
    this.SHEET_NAMES.DATA_SHEET = DATA_SHEET;
  }

  set messageSheet( WISH_SHEET ) {
    this.SHEET_NAMES.WISH_SHEET = WISH_SHEET;
  }

  set dataHasHeader( HEADER ) {
    this.RANGES.HEADER = HEADER;
  }

  set dobColumnKey( DOB_COLUMN ) {
    this.RANGES.DOB_COLUMN = DOB_COLUMN;
  }

  set annivColumnKey( ANNIV_COLUMN ) {
    this.RANGES.ANNIV_COLUMN = ANNIV_COLUMN;
  }

  set namesColumnKey( NAMES_COLUMN ) {
    this.RANGES.NAMES_COLUMN = NAMES_COLUMN;
  }

  set birthdayHeader( BIRTHDAY_HEADER ) {
    this.SLACK_CONFIG.BIRTHDAY_HEADER = BIRTHDAY_HEADER;
  }

  set birthdayImage( BIRTHDAY_IMAGE_URL ) {
    this.SLACK_CONFIG.BIRTHDAY_IMAGE_URL = BIRTHDAY_IMAGE_URL;
  }

  set birthdayTitle( BIRTHDAY_TITLE ) {
    this.SLACK_CONFIG.BIRTHDAY_TITLE = BIRTHDAY_TITLE;
  }

  set anniversaryHeader( ANNIVERSARY_HEADER ) {
    this.SLACK_CONFIG.ANNIVERSARY_HEADER = ANNIVERSARY_HEADER;
  }

  set anniversaryImage( ANNIVERSARY_IMAGE_URL ) {
    this.SLACK_CONFIG.ANNIVERSARY_IMAGE_URL = ANNIVERSARY_IMAGE_URL;
  }

  set anniversaryTitle( ANNIVERSARY_TITLE ) {
    this.SLACK_CONFIG.ANNIVERSARY_TITLE = ANNIVERSARY_TITLE;
  }

  set dateToMatch( DATE ) {
    this.DATE_TO_MATCH_OR_TODAY = DATE;
  }
}
