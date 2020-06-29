import React, { Component } from "react";
import { Card, Button, Col, ProgressBar } from 'react-bootstrap'
// import DrishtiManager from '../../modules/DrishtiManager';

// const object = { bed: true, sleep: false, teeth: true };
// counter = 0, if counter equals true counter = ++ conditional needs to be in the loop
// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);

// loop over object
// conditional to find out the console log is true
// counter


class DrishtiCard extends Component {

  render() {

    return (
      <Card
        style={{ width: '30rem' }}
        className="text-center" >
        <Card.Header>
          Date:{" "}
          <span>{this.props.drishtiProp.date}</span>
        </Card.Header>

        <ProgressBar animated variant="success" now={45} />

        <Col>
          <Button

            style={{ width: '14rem' }}
            variant="outline-secondary"
            size="sm"
            type="button"
            onClick={() => { this.props.history.push(`/drishti/${this.props.drishtiProp.id}/edit`) }}>View Details</Button>

          <Button
            style={{ width: '14rem' }}
            variant="outline-danger"
            type="button"
            size="sm"
            disabled={this.props.loadingStatus}
            onClick={() => this.props.deleteDrishti(this.props.drishtiProp.id)}
          >
            Delete
        </Button>
       </Col>
      </Card>
    );
  }

}

export default DrishtiCard;