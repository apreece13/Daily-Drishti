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

    constructNewDrishti = evt => {
        evt.preventDefault();
        this.setState({ loadingStatus: true });
        const dailyDrishti = {
            bed: this.state.bed,
            sleep: this.state.sleep,
            teeth: this.state.teeth,
            veggie: this.state.veggie,
            fruit: this.state.fruit,
            water: this.state.water,
            protein: this.state.protein,
            laughed: this.state.laughed,
            meditation: this.state.meditation,
            kindness: this.state.kindness,
            grateful: this.state.grateful,
            hardThing: this.state.hardThing,
            movement: this.state.movement,
            food: this.state.food,
            notes: this.state.notes,
            userId: 1,
            date: this.state.date,
        };

        // Create the animal and redirect user to animal list
        DrishtiManager.post(dailyDrishti)
            .then(() => this.props.history.push("/drishti"));
    }


    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor="title">Did I make my bed?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="bed"
                            />
                            <label htmlFor="title">Did I sleep more than 7 hours?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="sleep"
                            />
                            <label htmlFor="title">Did I brush my teeth</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="teeth"
                            />
                            <label htmlFor="title">Did I eat 2 vegtables today? -potatoes don't count-</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="veggie"
                            />
                            <label htmlFor="title">Did I eat a fruit today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="fruit"
                            />
                            <label htmlFor="title">Did you sleep more than 7 hours?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="bed"
                            />
                            <label htmlFor="title">Did I drink plenty of water today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="water"
                            />
                            <label htmlFor="title">Did I eat enough protein today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="protein"
                            />
                            <label htmlFor="title">Did I laugh today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="laughed"
                            />
                            <label htmlFor="title">Did I meditate or take time for myself today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="meditation"
                            />
                            <label htmlFor="title">Did I treat people with kindness today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="kindness"
                            />
                            <label htmlFor="title">Was I grateful for something today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="grateful"
                            />
                            <label htmlFor="title">Did I do something hard or challenging today to better myself?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="hardThing"
                            />

                            <label htmlFor="movement">Movement of the Day</label>
                            <input
                                type="text"
                                onChange={this.handleFieldChange}
                                id="movement"
                                placeholder="Movement"
                            />
                            <label htmlFor="food">Food for the Day</label>
                            <input
                                type="text"
                                onChange={this.handleFieldChange}
                                id="food"
                                placeholder="Food"
                            />
                            <label htmlFor="notes">Notes</label>
                            <input
                                type="text"
                                onChange={this.handleFieldChange}
                                id="notes"
                                placeholder="Notes"
                            />
                        </div>

                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewDrishti}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
};


export default DrishtiForm