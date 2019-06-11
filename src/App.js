import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import UsersContainer from "./components/users/UsersContainer";

import DialogsContainer from "./components/dialogs/DialogsContainer";

import './App.scss';

const App = () => {
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
                               render={() => <DialogsContainer />} />

                        <Route path="/profile"
                               render={() => <Profile />} />

                        <Route path="/users"
                               render={() => <UsersContainer />} />
                    </main>
                </div>
            </div>
        </BrowserRouter>
  );
};

export default App;
