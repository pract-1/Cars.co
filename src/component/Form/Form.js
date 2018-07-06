import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      productName: "",
      imageUrl: "",
      price: 0
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
    axios.post(`/api/product`, {
      name: this.state.productName,
      price: this.state.price,
      img: this.state.imageUrl
    });
    // .then(res => {  //finish this step//
    //   res.send(200);
    // });
  }
  render() {
    console.log(this.state);

    return (
      <div>
        <input
          className="name"
          placeholder="Name"
          onChange={e => this.handleName(e.target.value)}
        />
        <input
          className="image"
          placeholder="Image"
          onChange={e => this.handleImage(e.target.value)}
        />
        <input
          className="price"
          placeholder="Price"
          onChange={e => this.handlePrice(e.target.value)}
        />
        <button className="button" onClick={id => this.handleInventory(id)}>
          Add to Inventory
        </button>
        <button className="button" onClick={e => this.handleCancel(e)}>
          Cancel
        </button>
      </div>
    );
  }
}
export default Form;
