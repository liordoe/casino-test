import { getGames, getProviders } from 'client/actions/GamesActions';
import { GameThumbnail } from 'client/components/GameThumbnail';
import SearchPanel from 'client/components/SearchPanel';
import React from 'react';
import { connect } from 'react-redux';
import { IGame } from 'types/Game';
import * as _ from 'lodash';

export interface IGamesListProps {
    available: Array<IGame>;
}

class GamesList extends React.Component<IGamesListProps, any> {
    static defaultProps: IGamesListProps = {
        available: [],
    };

    constructor(props) {
        super(props);

        this.state = {
            available: props.available,
            config: {
                sort: '',
                provider: '',
            }
        };
    }

    componentDidMount(): void {
        getGames();
        getProviders();
    }

    onChange = (value: { provider?: string, sort?: string }) => {
        if (!_.isEqual(value, this.state.config)) {
            const config = _.merge({}, this.state.config, value);
            this.setState({ config });
            getGames(config);
        }
    };

    renderGames() {
        const { available } = this.props;
        return available.length ?
            available.map((game, i) => <GameThumbnail key={ i } { ...game } />) :
            'No games available';
    }

    render() {
        return (
            <div id="games-list-page">
                <SearchPanel onFilterChange={ this.onChange }/>
                <div className="games-container">
                    { this.renderGames() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    available: state.Games.available,
});

export default connect(mapStateToProps)(GamesList);
