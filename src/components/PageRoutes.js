import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import addmeter from "../pages/addmeter";
import addclient from "../pages/addclient";
import BuyElectricityPage from "../pages/BuyElectricityPage";

export default function PageRoutes() {
  return (
    <Router>
      <Route exact path="/" component={BuyElectricityPage} />
      <Route path="/addclient" component={addclient} />
      <Route path="/addmeter" component={addmeter} />
      {/* </div> */}
    </Router>
  );
}
