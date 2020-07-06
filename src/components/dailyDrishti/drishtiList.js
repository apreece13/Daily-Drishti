import React, { Component } from 'react'
import DrishtiCard from './DrishtiCard'
import DrishtiManager from '../../modules/DrishtiManager'
import { CardDeck, Button } from 'react-bootstrap'


class DrishtiList extends Component {
    state = {
        dailyDrishti: [],
        loadingStatus: true,
    }

componentDidMount(){
    DrishtiManager.getAll()
    .then((drishtiData) => {
        this.setState({
            dailyDrishti: drishtiData
        })
    })
}

deleteDrishti = id => {
  DrishtiManager.delete(id)
  .then(() => {
   DrishtiManager.getAll()
    .then((newDrishti) => {
      this.setState({
          dailyDrishti: newDrishti
      })
    })
  })
}

// handleDelete = () => {
//   this.setState({ loadingStatus: true });
//   DrishtiManager.delete(this.props.drishtiId).then(() =>
//     this.props.history.push("/drishti")
//   );
// };


render(){
    return(
      <>
      <section className="dristiList">
    <Button
        variant="outline-success"
        onClick={() => {this.props.history.push("/drishti/new")}}>
        New Drishti
    </Button>
  </section>
        <div className="dristiList" >
            <CardDeck>
            {this.state.dailyDrishti.sort((a,b)=>{return new Date(b.date)- new Date(a.date) }).map(drishtiInLoop => <DrishtiCard key={drishtiInLoop.id} drishtiProp={drishtiInLoop} deleteDrishti={this.deleteDrishti} {...this.props}/> )}
            </CardDeck>
        </div>
        </>
    )
}
}

export default DrishtiList