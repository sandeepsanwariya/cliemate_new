import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ClimateChange from "./ClimateChange";
//import MediaMonitor from "./MediaMonitor";
import SinglePost from "./SinglePost";
//import World from "../pages/World";
import FloridaMap from "../pages/FloridaMap";
import HaitiMap from "../pages/HaitiMap";
import KolkataMap from "../pages/KolkataMap";
import BangkokMap from "../pages/BangkokMap";
import BangladeshMap from "../pages/BangladeshMap";
import UAEMap from "../pages/UAEMap";
//import All_country from "../pages/All_country";
import ClimateChange2 from "./ClimateChange2";
import AmazonDeforestation from "./AmazonDeforestation";
class SiteMain extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/about" exact component={SinglePost}></Route>
          <Route path="/climate-change/" component={ClimateChange}></Route>
          <Route
            path="/climate-change-:fname"
            component={ClimateChange2}
          ></Route>
          <Route
            path="/amazon-deforestation/"
            component={AmazonDeforestation}
          ></Route>
          <Route path="/florida" component={FloridaMap}></Route>
          <Route path="/haiti" component={HaitiMap}></Route>
          <Route path="/kolkata" component={KolkataMap}></Route>
          <Route path="/bangkok" component={BangkokMap}></Route>
          <Route path="/bangladesh" component={BangladeshMap}></Route>
          <Route path="/UAE" component={UAEMap}></Route>
        </Switch>
      </Router>
    );
  }
}
export default SiteMain;
