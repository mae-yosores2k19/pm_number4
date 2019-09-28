import React, { Component } from 'react'

class BusinessCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <center>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                ]<div class="ui card">
                    <div class="image"><img src="/images/avatar/large/matthew.png" /></div>
                    <div class="content">
                        <div class="header">{this.props.fname}</div>
                        <div class="meta"><span class="date">Joined in 2015</span></div>
                        <div class="description">Matthew is a musician living in Nashville.</div>
                    </div>
                    <div class="extra content">
                        <a>
                            <i aria-hidden="true" class="user icon"></i>
                            22 Friends
    </a>
                    </div>
                </div>
                
            </center>
        )
    }
}
export default BusinessCard;