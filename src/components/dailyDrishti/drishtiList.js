import React, { Component } from 'react'
import DrishtiCard from './drishtiCard'
import DrishtiManager from '../../modules/DrishtiManager'


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

handleDelete = () => {
  this.setState({ loadingStatus: true });
  DrishtiManager.delete(this.props.drishtiId).then(() =>
    this.props.history.push("/drishti")
  );
};


render(){
    return(
      <>
      <section>
    <button type="button"
        className="btn"
        onClick={() => {this.props.history.push("/drishti/new")}}>
        New Drishti
    </button>
  </section>
        <div >
            {this.state.dailyDrishti.sort((a,b)=>{return new Date(b.date)- new Date(a.date) }).map(drishtiInLoop => <DrishtiCard key={drishtiInLoop.id} drishtiProp={drishtiInLoop} deleteDrishti={this.deleteDrishti} {...this.props}/>)}
        </div>
        </>
    )
}
}

export default DrishtiList