import React, { Component } from 'react';
import DrishtiManager from '../../modules/DrishtiManager';
import { Form, Col, Row, Button } from 'react-bootstrap';
import "./Drishti.css"

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

    handleFieldChangeChecked = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.checked
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

        DrishtiManager.post(dailyDrishti)
            .then(() => this.props.history.push("/drishti"));
    }


    render() {

        return (
            <>
            <div className="drishtiFormStyle">
                <Form>

                    <div>
                        <Row>
                            <Col>
                                    <label htmlFor="bed">Did I make my bed?&nbsp;</label>
                                    <input
                                        type="checkbox"
                                        onChange={this.handleFieldChangeChecked}
                                        id="bed"                               
                                    />
                            </Col>
                            <Col>
                                    <label htmlFor="title">Did I sleep more than 7 hours?&nbsp;</label>
                                    <input
                                        type="checkbox"
                                        onChange={this.handleFieldChangeChecked}
                                        id="sleep"
                                    />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <label htmlFor="title">Did I brush my teeth?&nbsp;</label>
                                <input
                                    type="checkbox"
                                    onChange={this.handleFieldChangeChecked}
                                    id="teeth"
                                />
                            </Col>
                            <Col>
                                <label htmlFor="title">Did I eat 2 vegtables today? (potatoes don't count)&nbsp;</label>
                                <input
                                    type="checkbox"
                                    onChange={this.handleFieldChangeChecked}
                                    id="veggie"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="title">Did I eat a fruit today?&nbsp;</label>
                                <input
                                    type="checkbox"
                                    onChange={this.handleFieldChangeChecked}
                                    id="fruit"
                                />
                            </Col>
                            <Col>
                                <label htmlFor="title">Did I drink plenty of water today?&nbsp;</label>
                                <input
                                    type="checkbox"
                                    onChange={this.handleFieldChangeChecked}
                                    id="water"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="title">Did I eat enough protein today?&nbsp;</label>
                                <input
                                    type="checkbox"
                                    onChange={this.handleFieldChangeChecked}
                                    id="protein"
                                />
                            </Col>
                            <Col>
                                <label htmlFor="title">Did I laugh today?&nbsp;</label>
                                <input
                                    type="checkbox"
                                    onChange={this.handleFieldChangeChecked}
                                    id="laughed"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="title">Did I meditate or take time for myself today? &nbsp;</label>
                                <input
                                    type="checkbox"
                                    onChange={this.handleFieldChangeChecked}
                                    id="meditation"
                                />
                            </Col>
                            <Col>
                                <label htmlFor="title">Did I treat people with kindness today?&nbsp;</label>
                                <input
                                    type="checkbox"
                                    onChange={this.handleFieldChangeChecked}
                                    id="kindness"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="title">Was I grateful for something today?&nbsp;</label>
                                <input
                                    type="checkbox"
                                    onChange={this.handleFieldChangeChecked}
                                    id="grateful"
                                />
                            </Col>
                            <Col>
                                <label htmlFor="title">Did I do something hard or challenging today to better myself?&nbsp;</label>
                                <input
                                    type="checkbox"
                                    onChange={this.handleFieldChangeChecked}
                                    id="hardThing"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="movement">Movement of the Day:</label>
                                <textarea
                                    onChange={this.handleFieldChange}
                                    id="movement"
                                    placeholder="Movement"
                                    rows="5"
                                    cols="50"
                                    
                                    
                                />
                            </Col>
                            <Col>
                                <label htmlFor="food">Food for the Day:</label>
                                <textarea
                                   
                                    onChange={this.handleFieldChange}
                                    id="food"
                                    placeholder="Food"
                                    rows="5"
                                    cols="50"
                                />
                            </Col>
                            <Col>
                                <label htmlFor="notes">Notes: </label>
                                <textarea
                                    onChange={this.handleFieldChange}
                                    id="notes"
                                    placeholder="Notes"
                                    rows="5"
                                    cols="50"
                                />
                            </Col>
                        </Row>
                    </div>

                    <div className="alignRight">
                        <Button
                            type="button"
                            disabled={this.state.loadingStatus}
                            onClick={this.constructNewDrishti}
                        >Submit</Button>
                    </div>

                </Form>
                </div>
            </>
        )
    }
};


export default DrishtiForm