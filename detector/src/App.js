import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import LandingPage from '../src/screens/Landing';
import Register from '../src/screens/Register';
import Login from '../src/screens/Login';
import PasswordForgetPage from '../src/screens/PasswordForget';
import HomePage from '../src/screens/Home';
import UserProfile from '../src/screens/UserProfile';
import SitterProfile from '../src/screens/SitterProfile';
import Admin from './screens/Admin';
 
import * as ROUTES from './constants/routes';

class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      authUser: null,
    }
  }
    render() {
      return (
        <Router>
          <Header />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={Register} />
            <Route path={ROUTES.SIGN_IN} component={Login} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.USERPROFILE} component={UserProfile} />
            <Route path={ROUTES.SITTERPROFILE} component={SitterProfile} /> 
            <Route path={ROUTES.ADMIN} component={Admin} />
            <Footer />
        </Router>
      );
    }
}

export default App;


