import React from 'react';
import Header from './Layout/header'
import Dashboard from './Container/dashboard'
import LineCleaning from './Container/linecleaning'
import { BrowserRouter,Route,Switch } from 'react-router-dom'

const App=()=> {
  return (
    <BrowserRouter>
      <Switch>
        <div>
        <Header/>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route path="/linecleaning" component={LineCleaning}></Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
