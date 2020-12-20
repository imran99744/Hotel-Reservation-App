import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Room from "./Pages/Room";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/room" component={Room} />
        <Route exact path="/room/:slug" component={SingleRoom} />
        <Route exact path="/error" component={Error} />
        <Error />
        <Room />
      </Switch>
    </>
  );
}

export default App;
