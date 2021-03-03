import React from 'react';
import Nav from './navChange';
import Menu from './somethingElse';
import Admin from './auth/admin';
import logout from './auth/logout';
import Cart from './cartChange';
import login from './auth/Login';
import About from './auth/about';
import Contact from './contactChange';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



function App () {
  return (
    <Router>
      <div className= "App">
        <Nav />
        <Switch>
           <Route path= '/menu' exact component= {Menu}/>
           <Route path='/about' exact component={About}/>
           <Route path='/login' component={login}/>
           <Route path='/contact' component={Contact}/>
           <Route Path='/logout'exact component={logout} />
           <Route path='/admin' component={Admin}/>
           <Route path='/cart' component= {Cart}/>
           



        </Switch>
      </div>
    </Router>
  );
}


export default App;


