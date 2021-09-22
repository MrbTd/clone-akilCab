import React from 'react'
import Entreprise from '../Entreprise'
import Landing from '../Landing'
import Professional from '../Professional'
import Section3 from '../Section3'
import Section4 from '../Section4'
import Footer from '../Footer'
import {
   Route, Switch,

} from "react-router-dom";
import Solutions from '../../Routing/Solutions'

const Home = () => {
    return (
        <div>
            <Landing />
            <Professional />
            <Entreprise />
            <Section3 />
            <Section4 />
            <Footer />

        </div>
    )
}
const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/solutions">
                    <Solutions/>
                </Route>
                
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default App
