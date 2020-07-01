import React, { Component } from "react"
import DrishtiManager from "../../modules/DrishtiManager"
import { Modal } from "react-bootstrap";


class DrishtiEditForm extends Component {
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

    handleFieldChangeChecked = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.checked
        this.setState(stateToChange);
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingDrishti = evt => {
        evt.preventDefault();
        this.setState({ loadingStatus: true });
        const editedDrishti = {
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
            id: this.props.match.params.drishtiId,
            date: this.state.date,
        };

      DrishtiManager.update(editedDrishti)
      .then(() => this.props.history.push("/drishti"))
    }

    componentDidMount() {
      DrishtiManager.get(this.props.match.params.drishtiId)
      .then(dailyDrishti => {
          this.setState({
            bed: dailyDrishti.bed,
            sleep: dailyDrishti.sleep,
            teeth: dailyDrishti.teeth,
            veggie: dailyDrishti.veggie,
            fruit: dailyDrishti.fruit,
            water: dailyDrishti.water,
            protein: dailyDrishti.protein,
            laughed: dailyDrishti.laughed,
            meditation: dailyDrishti.meditation,
            kindness: dailyDrishti.kindness,
            grateful: dailyDrishti.grateful,
            hardThing: dailyDrishti.hardThing,
            movement: dailyDrishti.movement,
            food: dailyDrishti.food,
            notes: dailyDrishti.notes,
            userId: 1,
            date: dailyDrishti.date,
            loadingStatus: false
          });
      });
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
                                onChange={this.handleFieldChangeChecked}
                                id="bed"
                                checked={this.state.bed === true ? "checked" : ""}
                            />
                            <label htmlFor="title">Did I sleep more than 7 hours?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChangeChecked}
                                id="sleep"
                                checked={this.state.sleep === true ? "checked" : ""}
                            />
                            <label htmlFor="title">Did I brush my teeth</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChangeChecked}
                                id="teeth"
                                checked = {this.state.teeth === true ? "checked" : ""}
                                
                            />
                            <label htmlFor="title">Did I eat 2 vegtables today? -potatoes don't count-</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChangeChecked}
                                id="veggie"
                                checked={this.state.veggie === true ? "checked" : ""}
                            />
                            <label htmlFor="title">Did I eat a fruit today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChangeChecked}
                                id="fruit"
                                checked={this.state.fruit === true ? "checked" : ""}
                            />
                            <label htmlFor="title">Did I drink plenty of water today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChangeChecked}
                                id="water"
                                checked={this.state.water === true ? "checked" : ""}
                            />
                            <label htmlFor="title">Did I eat enough protein today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChangeChecked}
                                id="protein"
                                checked={this.state.protein === true ? "checked" : ""}
                            />
                            <label htmlFor="title">Did I laugh today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChangeChecked}
                                id="laughed"
                                checked={this.state.laughed === true ? "checked" : ""}
                            />
                            <label htmlFor="title">Did I meditate or take time for myself today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChangeChecked}
                                id="meditation"
                                checked={this.state.meditation === true ? "checked" : ""}
                            />
                            <label htmlFor="title">Did I treat people with kindness today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChangeChecked}
                                id="kindness"
                                checked={this.state.kindness === true ? "checked" : ""}
                            />
                            <label htmlFor="title">Was I grateful for something today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChangeChecked}
                                id="grateful"
                                checked={this.state.grateful === true ? "checked" : ""}
                            />
                            <label htmlFor="title">Did I do something hard or challenging today to better myself?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChangeChecked}
                                id="hardThing"
                                checked={this.state.hardThing === true ? "checked" : ""}
                            />

                            <label htmlFor="movement">Movement of the Day</label>
                            <input
                                type="text"
                                onChange={this.handleFieldChange}
                                id="movement"
                                placeholder="Movement"
                                value={this.state.movement}
                            />
                            <label htmlFor="food">Food for the Day</label>
                            <input
                                type="text"
                                onChange={this.handleFieldChange}
                                id="food"
                                placeholder="Food"
                                value={this.state.food}
                            />
                            <label htmlFor="notes">Notes</label>
                            <input
                                type="text"
                                onChange={this.handleFieldChange}
                                id="notes"
                                placeholder="Notes"
                                value={this.state.notes}
                            />
                        </div>

                        <div>
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateExistingDrishti}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
      );
    }
}

export default DrishtiEditForm