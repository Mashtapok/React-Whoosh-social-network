import React, {Component, Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Music = React.lazy(() => import('./components/Music/Music'));
const NotFound = React.lazy(() => import('./components/common/NotFound/NotFound'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Redirect exact from="/" to="/profile"/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' component={NotFound}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route render={() => <NotFound/>}/>
                    </Switch>
                </Suspense>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const WhooshApp = (props) => {
    return <HashRouter basename="/">
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
};

export default WhooshApp;
