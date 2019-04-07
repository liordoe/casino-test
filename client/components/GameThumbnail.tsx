import React from 'react';
import { IGame } from 'types/Game';

export type IGameThumbnailProps = IGame;

export const GameThumbnail: React.FC<IGameThumbnailProps> = props => (
    <div
        className="game">
        <div className="picture"
             style={{ backgroundImage: `url(${props.thumbnailUrl})`}}>
        </div>
            <div className="game-details">
                <p className="name">{ props.name }</p>
                <em className="play-btn">&nbsp;</em>
                <p className="provider">({ props.gameProvider })</p>
            </div>
    </div>
);
