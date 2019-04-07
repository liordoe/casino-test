import { Document, Model, model, Schema } from 'mongoose';
import { IGame } from 'types/Game';

interface IGameDocument extends IGame, Document {
}

const GameSchema: Schema = new Schema<IGame>({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
        match: new RegExp('^(https?|ftp)://[^\\s/$.?#].[^\\s]*$'),
    },
    versions: {
        mobile: Boolean,
        desktop: Boolean,
    },
    provider: {
        type: String,
        required: true,
    },
    ageRatings: {
        appstore: Number,
        googleplay: Number,
    },
    description: String,
    picture: String,
    countriesRating: {
        type: Map,
        of: String,
    },
}, {
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            ret.id = doc._id.toHexString();
            delete ret.__v;
            delete ret._id;
        },
    },
});

GameSchema.index({ name: 1, provider: 1 }, { unique: true });

export interface IGameModel extends Model<IGameDocument> {
}

export const GameModel: IGameModel = model<IGameDocument>('Game', GameSchema);
