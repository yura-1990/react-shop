import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './Navigation';
import Shop from "../pages/Shop.jsx";
import Contact from '../pages/Contact.jsx'
import Condition from '../pages/Condition.jsx'
import Delivery from '../pages/Delivery.jsx'
import Comment from '../pages/Comment.jsx'
import Certificate from '../pages/Certificate.jsx'


function Header() {


    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/about">
                    <Shop />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/condition">
                    <Condition />
                </Route>
                <Route path="/delivery">
                    <Delivery />
                </Route>
                <Route path="/comment">
                    <Comment />
                </Route>
                <Route path="/certificate">
                    <Certificate />
                </Route>
            </Switch>
        </Router>
    )

}
export default Header