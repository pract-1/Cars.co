import React, { Component } from "react";
import axios from "axios";
import "./home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }
  componentDidMount() {
    this.gettingProd();
  }
  gettingProd() {
    axios.get("/api/inventory").then(res => {
      this.setState({ inventory: res.data });
    });
  }
  render() {
    console.log(this.state.inventory);
    let invenList = this.state.inventory.map((e, i) => {
      return (
        <div>
          <div className="push">
            <div key={i}>
              <div className="prod">
                <div>
                  <img
                    alt="prop"
                    className="pic"
                    src={e.image}
                    width="320"
                    height="200"
                  />
                </div>
                <div className="information">
                  <div> {e.name}</div>
                  <div className="price">Price: ${e.price}</div>
                </div>
              </div>
              <hr className="divider" />
            </div>
          </div>
        </div>
      );
    });
    return <div className="alli">{invenList}</div>;
  }
}
export default Home;
