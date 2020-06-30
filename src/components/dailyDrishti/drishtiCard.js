import React, { Component } from "react";
import { Card, Button, Col, ProgressBar } from 'react-bootstrap'
// import DrishtiManager from '../../modules/DrishtiManager';


// counter = 0, if counter equals true counter = ++ conditional needs to be in the loop



// bed: {this.props.drishtiProp.bed}
// loop over object
// conditional to find out the console log is true
// counter


class DrishtiCard extends Component {

  handleCounter = () => {
    const object = this.props.drishtiProp;
    let counter = 0;
    for (const property in object) {
      if (object[property]===true) {
        counter++
      }
    }
    const counterProgress = (counter/12)*100;
    return(
      counterProgress
    )
  }

  handleVariant = () => {
    const counterProgress = this.handleCounter();
    let progressVariant = "warning";
    if(counterProgress>50){
      progressVariant = "success"
    }
    return(
      progressVariant
    )
  }


  render() {

    return (
      <Card
        style={{ width: '30rem' }}
        className="text-center" >
        <Card.Header>
          Date:{" "}
          <span>{this.props.drishtiProp.date}</span>
        </Card.Header>

        <ProgressBar animated variant={this.handleVariant()} now={this.handleCounter()} />

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