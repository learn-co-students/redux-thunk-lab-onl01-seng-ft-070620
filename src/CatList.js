import React, { Component } from "react";

class CatList extends Component {
  renderImages = () => {
    return this.props.catPics.map((cat) => (
      <img key={cat.id} src={cat.url} alt={cat.id} />
    ));
  };
  render() {
    // debugger;
    return <div>{this.renderImages()}</div>;
  }
}

export default CatList;
