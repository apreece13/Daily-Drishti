import React, { Component } from 'react';
import RegisterManager from "../../modules/RegisterManager"

class Profile extends Component {
    state = {
        name: "",
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    updateExistingUser = evt => {
        evt.preventDefault();
        this.setState({ loadingStatus: true });
        const editedUser = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
        };

      RegisterManager.update(editedUser)
      .then(() => this.props.history.push("/"))
    }

    componentDidMount() {
        RegisterManager.get(this.props.match.params.userId)
        .then(profileInfo => {
            this.setState({
              name: profileInfo.name,
              username: profileInfo.username,
              email: profileInfo.email,
              password: profileInfo.password,
              phoneNumber: profileInfo.phoneNumber,
            });
        });
      }

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="name"
                                value={this.state.name}
                            />

                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="username"
                                value={this.state.username}
                            />

                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="email"
                                value={this.state.email}
                            />

                            <label htmlFor="synopsis">Password</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="password"
                                value={this.state.password}
                            />

                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="phoneNumber"
                                value={this.state.phoneNumber}
                            />
                        </div>

                        <div>
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateExistingUser}
                            >Save Changes</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default Profile