import React, { Component } from "react";

class BusinessCard extends Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
      <center style={{ paddingTop: "20%" }}>
          <div >
            <div class="ui card raised">
                <div class=" content" style={{
                            backgroundImage:
                            "url(" +
                            "https://previews.123rf.com/images/nalinn/nalinn1504/nalinn150401690/38910529-collection-of-cute-giant-panda-faces-page-border-frame.jpg" +")",backgroundSize: "cover"}}>
                    <div> hello</div>
                    <div class="header"></div>
                    <div class="meta"><span class="date">Joined in 2015</span></div>
                    <div class="description"> is a musician living in Nashville.</div>
                    <h1>
                    <i aria-hidden="true" class="user icon"></i> {this.props.fname} 
                    </h1>
                    
                </div>
            </div>  
        </div>
      </center>
    );
  }
}
export default BusinessCard;
