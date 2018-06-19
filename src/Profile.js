import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
          <div>
            <h2>{this.props.name}</h2>
            <h4>{this.props.phone}</h4>
            <h4>{this.props.email}</h4>
            <img src={this.props.picture}></img>
          </div>
        )
    }
}

export default Profile
