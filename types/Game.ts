export interface IGame {
    'db_id': string,
    'status': string,
    'gameProvider': string,
    'startType': string,
    'isFreeplayAllowed': boolean,
    'nextOpeningTimeUtc': string,
    'nextClosingTimeUtc': string,
    'openingTimeUtc': string,
    'closingTimeUtc': string,
    'showIsLeavingJurisdiction': boolean,
    'allowedOrientation': string,
    'tags': [string],
    'gameCollectionIds': [string],
    'gameId': string,
    'name': string,
    'width': number,
    'height': number,
    'description': string,
    'themeUrl': string,
    'thumbnailUrl': string,
    'helpUrl': string,
    'trivia': [string],
    'seoName': string,
    'friendlyName': string
}
