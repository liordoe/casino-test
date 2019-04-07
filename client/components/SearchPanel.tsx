import { BasicFilter } from 'client/components/shared/Filter';
import React from 'react';
import { connect } from 'react-redux';

export interface ISearchPanelProps {
    providers: Array<string>;
    collectionIds: Array<string>;
    onFilterChange: (value) => void;
}

export interface ISearchPanelState {
    provider: string;
    cId: string;
    ids: boolean;
    name: string;
}

const ArrayToOptions = (array: Array<string> = []) => array.map(item => ({ value: item, label: item }));

class SearchPanel extends React.Component<ISearchPanelProps, ISearchPanelState> {
    static defaultProps: ISearchPanelProps = {
        providers: [],
        collectionIds: [],
        onFilterChange: () => {
        },
    };

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            provider: '',
            cId: '',
            ids: null,
        };
    }

    onChange = (type) => {
        const { onFilterChange } = this.props;
        return event => {
            onFilterChange({ [type]: event.target.value });
        };
    };

    render() {
        const { providers, collectionIds } = this.props;
        const providerOptions = ArrayToOptions(providers);
        const collectionOptions = ArrayToOptions(collectionIds);

        return (
            <div className="search-panel">
                <BasicFilter label="Provider" options={providerOptions} onChange={this.onChange('provider')}/>
                <BasicFilter label="Collection" options={collectionOptions} onChange={this.onChange('collection')}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    providers: state.Games.providers,
    collectionIds: state.Games.collections,
});

export default connect(mapStateToProps)(SearchPanel);
