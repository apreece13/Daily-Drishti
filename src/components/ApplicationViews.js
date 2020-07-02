
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
          return <RegisterForm {...props} />
        }} />

        <Route exact path="/profile" render={(props) => {
          if (this.isAuthenticated()) {
            return <Profile userId={props.match.params.userId} {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/drishti" render={(props) => {
          if (this.isAuthenticated()) {
            return <DrishtiList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/drishti/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <DrishtiForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/drishti/:drishtiId(\d+)/edit" render={(props) => {
          if (this.isAuthenticated()) {
            return <DrishtiEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/drishti/:drishtiId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <DrishtiCard drishtiId={props.match.params.drishtiId} {...props} />;
          } else {
            return <Redirect to="/login" />
          }
        }} />
        
      </React.Fragment>
    )
  }
}

export default ApplicationViews