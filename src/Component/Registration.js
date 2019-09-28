import React, { Component } from "react";
import BusinessCard from "./BusinessCard";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      fname: "",
      lname: "",
      address: "",
      email: "",
      phoneNumber: 0
    };
  }
  submitHandler = events => {
    events.preventDefault();
    const { fname, lname, address, email, phoneNumber } = this.state;
    if (
      fname !== "" &&
      lname !== "" &&
      address !== "" &&
      email !== "" &&
      phoneNumber !== ""
    ) {
      this.setState({ register: true });
    } else {
      this.setState({ register: false });
      alert("miss");
    }
  };
  render() {
    if (!this.state.register) {
      return (
        <div>
          <center>
            <form style={{ paddingTop: "20%" }}>
              <div class="ui card raised">
                <div
                  class="content"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://previews.123rf.com/images/hermandesign2015/hermandesign20151801/hermandesign2015180100439/93381085-two-cute-pandas-in-a-bamboo-forest.jpg" +
                      ")",
                    backgroundSize: "cover"
                  }}
                >
                <div class="ui left icon input">
                    <input placeholder="First Name.."onChange={e => this.setState({ fname: e.target.value })}></input>
                    <i aria-hidden="true" class="pencil icon"></i>
                </div>
                  <br />
                  <br />
                <div class="ui left icon input">
                    <input placeholder="Last Name.."onChange={e => this.setState({ lname: e.target.value })}></input>
                    <i aria-hidden="true" class="pencil icon"></i>
                </div> 
                  <br />
                  <br />
                <div class="ui left icon input">
                    <input placeholder="Address.."onChange={e => this.setState({ address: e.target.value })}></input>
                    <i aria-hidden="true" class="pencil icon"></i>
                </div>
                  <br />
                  <br />
                <div class="ui left icon input">
                    <input placeholder="E-mail.."onChange={e => this.setState({ email: e.target.value })}></input>
                    <i aria-hidden="true" class="pencil icon"></i>
                </div>
                  <br />
                  <br />
                  <div class="ui left icon input">
                    <input placeholder="Phone Number"onChange={e =>this.setState({ phoneNumber: e.target.value })}></input>
                    <i aria-hidden="true" class="pencil icon"></i>
                </div>
                  <br />
                  <br />
                  <div>
                    <button class="ui primary button" onClick={events => this.submitHandler(events)}>Submit</button>
                    
                  </div>
                  
                </div>
              </div>
            </form>
          </center>
        </div>
      );
    } else {
      return (
        <div>
          {this.state.fname}
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <BusinessCard fnmae={this.state.fname} />
        </div>
      );
    }
  }
}
export default Registration;
