import React, { Component } from 'react';
import DrishtiManager from '../../modules/DrishtiManager';

class DrishtiForm extends Component {
    state = {
        bed: false,
        sleep: false,
        teeth: false,
        veggie: false,
        fruit: false,
        water: false,
        protein: false,
        laughed: false,
        meditation: false,
        kindness: false,
        grateful: false,
        hardThing: false,
        movement: "",
        food: "",
        notes: "",
        loadingStatus: false,
        date: new Date(),
    };

    handleFieldChange = evt => {
        const stateToChange = {};

        stateToChange[evt.target.id] = evt.target.value;
        console.log("evt.target.id", evt.target.id)
        console.log("stateToChange", stateToChange)
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewNewsArticle = evt => {
        evt.preventDefault();
        if (this.state.title === "" || this.state.synopsis === "" || this.state.url === "") {
            window.alert("Please input all fields");
        } else {
            this.setState({ loadingStatus: true });
            const newsArticle = {
                title: this.state.title,
                synopsis: this.state.synopsis,
                url: this.state.url,
                userId: 1,
                date: this.state.date,
            };

            // Create the animal and redirect user to animal list
            DrishtiManager.post(newsArticle)
                .then(() => this.props.history.push("/news"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div>

                            <label htmlFor="title">Title</label>

                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="title"
                                placeholder="Article Title"
                            />
                            <label htmlFor="synopsis">Synopsis</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="synopsis"
                                placeholder="Synopsis"
                            />
                            <label htmlFor="url">URL</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="url"
                                placeholder="URL"
                            />
                        </div>

                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewNewsArticle}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default DrishtiForm