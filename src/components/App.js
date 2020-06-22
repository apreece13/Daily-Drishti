import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
// import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        {/* <ApplicationViews /> */}
      </>
    );
  }
}

export default App;