import React from 'react';
import { IGame } from 'types/Game';

export type IGameThumbnailProps = IGame;

export const GameThumbnail: React.FC<IGameThumbnailProps> = (props) => (
    <div className="game">
        <a href={ props.url }>
            <img
                className="picture"
                src={ props.picture || '/assets/game.jpeg' }
            />
        </a>
        <p className="provider">{ props.provider }</p>
        <a className="name" href={ props.url }>{ props.name }</a>
        <p className="description">{ props.description }</p>
    </div>
);
