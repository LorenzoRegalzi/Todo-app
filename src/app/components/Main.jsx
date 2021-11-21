import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store'
import { ConnectedDashboard } from './Dashboard';
import { ConnectedNavigation} from './Navigation';
import { ConnectTaskDetail } from './TaskDetail';
import { Router, Route, Redirect } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedLogin } from './Login';


console.log(store.getState());

const RouteGuard = Component => ({match}) => {
    console.info("Route guard", match);
    if (!store.getState().session.authenticated){
        return <Redirect to="/"/>;
    } {
        return <Component match={match} />;
    }
}


export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation/>
                <Route exact path="/" component={ConnectedLogin}/>
                <Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)}/>
                <Route exact path="/task/:id" render={RouteGuard(ConnectTaskDetail)} />
            </div>
        </Provider>
    </Router>
)

