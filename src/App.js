import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import './App.scss';
// import renderEntireTree from './redux/state'

const App = props => {
    return (
        <BrowserRouter>
            <div className='app'>
                <div className="wrapper">
                    <Header />
                    <Nav />
                    <main className="content">
                        {/*<Route path="/dialogs" component={Dialogs} />*/}
                        {/*<Route path="/profile" component={Profile} />*/}

                        <Route path="/dialogs"
                               render={() => <Dialogs store={props.store} />} />

                        <Route path="/profile"
                               render={() => <Profile
                                   state={props.state.profilePage}
                                   dispatch={props.dispatch} />} />
                    </main>
                </div>
            </div>
        </BrowserRouter>
  );
};

export default App;
