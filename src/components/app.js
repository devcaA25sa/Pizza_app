import React from 'react';
import Nav from './navChange';
import Menu from './somethingElse';
import Cart from './cartChange';
import SignIn from './auth/signinChange';
import SignUp from './auth/signupChange';
import Contact from './contactChange';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App () {
  return (
    <Router>
      <div className= "App">
        <Nav />
        <Switch>
           <Route path= '/menu' exact component= {Menu}/>
           <Route path='/signin' exact component={SignIn}/>       
           <Route path='/signup' exact component={SignUp}/>
           <Route path='/contact' exact component={Contact}/>
           <Route path='/cart' component= {Cart}/>
           



        </Switch>
      </div>
    </Router>
  );
}


export default App;


