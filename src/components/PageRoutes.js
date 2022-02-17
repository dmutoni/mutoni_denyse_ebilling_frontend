import React from "react"
import {BrowserRouter as Router ,Route} from "react-router-dom"
import Index from "../pages";
import addmeter from "../pages/addmeter";
import addclient from "../pages/addclient";

export default function PageRoutes() {
    return (
        <Router>
            {/* <div className="App"> */}
                {/* <NavbarComponent /> */}
                <Route exact path="/" component={Index} />
                <Route path="/addclient" component={addclient}/>
                <Route path="/addmeter" component={addmeter}/>
            {/* </div> */}
        </Router>
    )
}
