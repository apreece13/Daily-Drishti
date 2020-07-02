import React, { Component } from "react";
import { Card, Button, Col, ProgressBar } from 'react-bootstrap'
import Moment from "react-moment"
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
    let progressVariant = "danger";
    if(counterProgress===100){
      progressVariant = "primary"
    } else if(counterProgress>60) {
      progressVariant = "success"
    } else if (counterProgress>20){
      progressVariant = "warning"
    }
    return(
      progressVariant
    )
  }
  
//   dateString = (date) =>  {
//  date = new Date();
//   var dateString = date.getFullYear()-("0" + date.getMonth()).slice(-2)-("0" + date.getDate()).slice(-2)
//   return(
//     dateString
//   )
// }


  render() {

    return (
      <Card
        border="success"
        bg="light"
        style={{ width: '30rem'}}
        className="text-center" >
          
        <Card.Header>
          Date:{<Moment format="MM/DD/YYYY HH:mm">
               {new Date(this.props.drishtiProp.date)}</Moment>}
        </Card.Header>

        <ProgressBar animated variant={this.handleVariant()} now={this.handleCounter()} />

        <Col>
          <Button
            style={{ margin: '.5em' }}
            variant="outline-secondary"
            size="sm"
            type="button"
            onClick={() => { this.props.history.push(`/drishti/${this.props.drishtiProp.id}/edit`) }}>View Details</Button>

          <Button
            style={{ margin: '.5em' }}
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