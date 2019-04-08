import { addGames, getGames, getMeta } from 'client/actions/GamesActions';
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
            loading: false,
            config: {
                sort: '',
                provider: '',
                page: 0,
            }
        };
    }

    componentDidMount(): void {
        getGames();
        getMeta();

        window.onscroll = () => {
            const fullHeight = window.innerHeight + document.documentElement.scrollTop;
            if (fullHeight >= document.documentElement.offsetHeight) {
                this.loadMore();
            }
        }
    }

    onChange = (value: { provider?: string, sort?: string }) => {
        if (!_.isEqual(value, this.state.config)) {
            const config = _.merge({}, this.state.config, {...value, page: 0});
            this.setState({ config });
            getGames(config);
        }
    };

    loadMore = () => {
        const { loading, config } = this.state;
        if (loading) return;
        const newConfig = _.merge({}, this.state.config, { page: config.page + 1 });
        this.setState({ loading: true });
        addGames(newConfig)
            .then(() => this.setState({loading: false, config: newConfig}))
            .catch(() => this.setState({loading: false }));
    };

    renderGames = () => {
        const { available } = this.props;
        return available.length ?
            available.map((game, i) => <GameThumbnail key={ i } { ...game } />) :
            'No games available';
    };

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
