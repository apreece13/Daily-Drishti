import React, { Component } from "react";
import "./Home.css"

class Home extends Component {
  logoutUser = () => {
    localStorage.clear("userId");
    this.props.history.push("/");
  };

  isAuthenticated = () => localStorage.getItem("userId") !== null;

  checkLogoutButton = () => {
    if (this.isAuthenticated()) {
      return (
        <button
        className="home-btn"
          type="button"
          onClick={() => {
            this.logoutUser();
          }}
        >
          Logout
        </button>
      );
    } else {
      return (
        <>
          <button
          className="home-btn"
            type="button"
            onClick={() => {
              this.props.history.push("/login");
            }}
          >
            Please login.
          </button>
          <button
          className="home-btn"
            type="button"
            onClick={() => {
              this.props.history.push("/register");
            }}
          >
            No acccount? Please register here.
          </button>
        </>
      );
    }
  };

  render() {
    return (
      <section className="home-card">
        <h2 className="home-header-large">Welcome to Daily Drishti</h2>
        <br />
        {this.checkLogoutButton()}
      </section>
    );
  }
}

export default Home;