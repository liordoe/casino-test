import { BasicFilter } from 'client/components/shared/Filter';
import React from 'react';
import { connect } from 'react-redux';

export interface ISearchPanelProps {
    providers: Array<string>;
    onFilterChange: (value) => void;
}

export interface ISearchPanelState {
    provider: string;
    ids: boolean;
    name: string;
}

const ArrayToOptions = (array: Array<string>) => array.map(item => ({ value: item, label: item }));

class SearchPanel extends React.Component<ISearchPanelProps, ISearchPanelState> {
    static defaultProps: ISearchPanelProps = {
        providers: [],
        onFilterChange: () => {
        },
    };

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            provider: '',
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
        const { providers } = this.props;
        const providerOptions = ArrayToOptions(providers);
        const sortOptions = [ { value: '1', label: 'ASC' }, { value: '-1', label: 'DESC' } ];

        return (
            <div className="search-panel">
                <BasicFilter label="Providers" options={providerOptions} onChange={this.onChange('provider')}/>
                <BasicFilter label="Sort (id)" options={sortOptions} onChange={this.onChange('sort')}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    providers: state.Games.providers,
});

export default connect(mapStateToProps)(SearchPanel);
