import React, { Component } from "react"
import DrishtiManager from "../../modules/DrishtiManager"


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
            date: this.state.date,
        };

      DrishtiManager.update(editedDrishti)
      .then(() => this.props.history.push("/dailyDrishti"))
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
                                onChange={this.handleFieldChange}
                                id="bed"
                                value={this.state.bed}
                            />
                            <label htmlFor="title">Did I sleep more than 7 hours?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="sleep"
                                value={this.state.sleep}
                            />
                            <label htmlFor="title">Did I brush my teeth</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="teeth"
                                value={this.state.teeth}
                            />
                            <label htmlFor="title">Did I eat 2 vegtables today? -potatoes don't count-</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="veggie"
                                value={this.state.veggie}
                            />
                            <label htmlFor="title">Did I eat a fruit today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="fruit"
                                value={this.state.fruit}
                            />
                            <label htmlFor="title">Did I drink plenty of water today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="water"
                                value={this.state.water}
                            />
                            <label htmlFor="title">Did I eat enough protein today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="protein"
                                value={this.state.protein}
                            />
                            <label htmlFor="title">Did I laugh today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="laughed"
                                value={this.state.laughed}
                            />
                            <label htmlFor="title">Did I meditate or take time for myself today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="meditation"
                                value={this.state.meditation}
                            />
                            <label htmlFor="title">Did I treat people with kindness today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="kindness"
                                value={this.state.kindness}
                            />
                            <label htmlFor="title">Was I grateful for something today?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="grateful"
                                value={this.state.grateful}
                            />
                            <label htmlFor="title">Did I do something hard or challenging today to better myself?</label>
                            <input
                                type="checkbox"
                                onChange={this.handleFieldChange}
                                id="hardThing"
                                value={this.state.hardThing}
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