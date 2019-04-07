import GamesList from 'client/components/GamesList';
import Store from 'client/stores/Store';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './app.scss';
import './index.html';

class App extends React.Component<any, any> {
    render() {
        return (
            <Provider store={ Store }>
                <h2 className="app-title">Casino Las Vegas</h2>
                <GamesList/>
            </Provider>
        );
    }
}

const rootNode = document.getElementById('app');
ReactDOM.render(<App/>, rootNode);
