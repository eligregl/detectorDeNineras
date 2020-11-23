import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import { Home } from '../screens/Home';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Router = () => {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Route exact path="/" component={App} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default Router;
