
import React, { Component } from 'react'
import { Route, withRouter, Redirect } from "react-router-dom"
// import Home from './home/Home'
import DrishtiList from './dailyDrishti/drishtiList'
import DrishtiForm from './dailyDrishti/drishtiForm'
import DrishtiCard from './dailyDrishti/drishtiCard'
import DrishtiEditForm from './dailyDrishti/drishtiEditForm'



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        {/* <Route exact path="/" render={(props) => {
          return <Home />
        }} /> */}
        <Route path="/drishti" render={(props) => {
          return <DrishtiList {...props} />
        }} />
        <Route path="/drishti/new" render={(props) => {
          return <DrishtiForm {...props} />
        }} />
        <Route path="/drishti/:drishtiId(\d+)/edit" render={(props) => {
          return <DrishtiEditForm {...props} />
        }} />
        <Route exact path="/drishti/:drishtiId(\d+)" render={(props) => {
          return <DrishtiCard drishtiId={props.match.params.drishtiId} {...props} />;
        }}
        />
      </React.Fragment>
    )
  }
}

export default ApplicationViews