import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncidents from './pages/NewIncident';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Logon}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/incidents/new" component={NewIncidents}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
