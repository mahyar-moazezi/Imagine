import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Jungle from "./Components/Jungle/Jungle";
import Sea from "./Components/Sea/Sea";
import Mountain from "./Components/Mountain/Mountain";
import ImageContextProvider from "./Context/ImageContext";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
const App = () => (
  <div>
    <ImageContextProvider>
      <div className="bg-app"></div>
      <Navbar />
      <Header />
      <div
        className="mx-auto d-flex justify-content-center
     align-items-center bg-light container rounded"
      >
        <Switch>
          <Route exact path="/jungle" component={Jungle} />
          <Route exact path="/sea" component={Sea} />
          <Route exact path="/mountain" component={Mountain} />
          <Route exact path="/" component={Home} />
          <Route path="/not-found" component={ErrorPage} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </ImageContextProvider>
  </div>
);

export default App;
