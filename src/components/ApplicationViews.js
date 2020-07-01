
import React, { Component } from 'react'
import { Route, withRouter, Redirect } from "react-router-dom"
import Home from './home/Home'
import Login from './auth/Login'
import RegisterForm from './auth/Register'
import DrishtiList from './dailyDrishti/DrishtiList'
import DrishtiForm from './dailyDrishti/DrishtiForm'
import DrishtiCard from './dailyDrishti/DrishtiCard'
import DrishtiEditForm from './dailyDrishti/DrishtiEditForm'
import Profile from './profile/profilePage'



class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("userId") !== null;

  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />

        <Route exact path="/" render={(props) => {
          return <Home authProp={this.isAuthenticated()} {...props} />;
        }} />

        <Route exact path="/register" render={(props) => {
          return <RegisterForm {...props} />;
        }} />

        <Route exact path="/profile" render={(props) => {
          return <Profile {...props} />
        }} />

        <Route exact path="/drishti" render={(props) => {
          return <DrishtiList {...props} />
        }} />

        <Route exact path="/drishti/new" render={(props) => {
          return <DrishtiForm {...props} />
        }} />

        <Route exact path="/drishti/:drishtiId(\d+)/edit" render={(props) => {
          return <DrishtiEditForm {...props} />
        }} />

        <Route exact path="/drishti/:drishtiId(\d+)" render={(props) => {
          return <DrishtiCard drishtiId={props.match.params.drishtiId} {...props} />;
        }} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews