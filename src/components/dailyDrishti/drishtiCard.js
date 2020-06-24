import React, { Component } from "react";

class DrishtiCard extends Component {

render() {

return (
    <div >
      <div >
        <h3>
          Date:{" "}
          <span>{this.props.drishtiProp.date}</span>
        </h3>
        <button
          type="button"
          disabled={this.props.loadingStatus}
          onClick={() => this.props.deleteDrishti(this.props.drishtiProp.id)}
        >
          Delete
        </button>
        <button type="button"
      onClick={() => {this.props.history.push(`/drishti/${this.props.drishtiProp.id}/edit`)}}>View Details</button>
      </div>
    </div>
  );
}

}

export default DrishtiCard;