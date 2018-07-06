import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      productName: "",
      imageUrl: "",
      price: ""
    };
  }
  handleName(name) {
    this.setState({ productName: name });
  }
  handleImage(img) {
    this.setState({ imageUrl: img });
  }
  handlePrice(num) {
    this.setState({ price: num });
  }

  handleInventory(id) {
    axios
      .post("/api/product", {
        name: this.state.productName,
        price: this.state.price,
        image: this.state.imageUrl
      })
      .then(() => {
        this.props.get();
      });
  }
  handleCancel() {
    this.setState({
      productName: "",
      imageUrl: "",
      price: ""
    });
  }
  render() {
    console.log(this.props);

    return (
      <div>
        <input
          value={this.state.productName}
          className="name"
          placeholder="Name"
          onChange={e => this.handleName(e.target.value)}
        />
        <input
          value={this.state.imageUrl}
          className="image"
          placeholder="Image"
          onChange={e => this.handleImage(e.target.value)}
        />
        <input
          value={this.state.price}
          className="price"
          placeholder="Price"
          onChange={e => this.handlePrice(e.target.value)}
        />
        <button className="button" onClick={id => this.handleInventory(id)}>
          Add to Inventory
        </button>
        <button className="button" onClick={() => this.handleCancel()}>
          Cancel
        </button>
      </div>
    );
  }
}
export default Form;
