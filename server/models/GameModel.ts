import { Document, Model, model, Schema } from 'mongoose';
import { IGame } from 'types/Game';

interface IGameDocument extends IGame, Document {
}

const GameSchema: Schema = new Schema<IGame>({
    'id': {
        type: String,
        required: true,
    },
    'status': String,
    'gameProvider': String,
    'startType': String,
    'isFreeplayAllowed': Boolean,
    'nextOpeningTimeUtc': String,
    'nextClosingTimeUtc': String,
    'openingTimeUtc': String,
    'closingTimeUtc': String,
    'showIsLeavingJurisdiction': Boolean,
    'allowedOrientation': String,
    'tags': {
        type: [String],
    },
    'gameCollectionIds': {
        type: [String],
    },
    'gameId': String,
    'name': String,
    'width': Number,
    'height': Number,
    'description': String,
    'themeUrl': String,
    'thumbnailUrl': String,
    'helpUrl': String,
    'trivia': [String],
    'seoName': String,
    'friendlyName': String
}, {
    toJSON: {
        virtuals: false,
        transform: function (doc, ret) {
            delete ret.__v;
            delete ret._id;
        },
    },
});

export interface IGameModel extends Model<IGameDocument> {
}

export const GameModel: IGameModel = model<IGameDocument>('Game', GameSchema);
