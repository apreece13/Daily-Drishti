
import React, { Component } from 'react'
import { Route, withRouter, Redirect } from "react-router-dom"
// import Home from './home/Home'
import DrishtiList from './dailyDrishti/drishtiList'
import DrishtiForm from './dailyDrishti/drishtiForm'



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        {/* <Route exact path="/" render={(props) => {
          return <Home />
        }} /> */}
        <Route path="/drishti" render={(props) => {
          return <DrishtiList {...props}/>
        }} />
        <Route path="/drishti/new" render={(props) => {
          return <DrishtiForm {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews