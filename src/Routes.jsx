import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Retrieve from "./components/Retrieve";
import HomeSignIn from "./pages/HomeSignIn";
import userDetails from "./pages/userDetails";

export default function Routes() {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomeSignIn} />
        <Route path="/userDetails" component={userDetails} />
        <Route path="/retrieve" component={Retrieve} />
      </Router>
    </>
  );
}
