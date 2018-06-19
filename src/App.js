import React, { Component } from 'react';
import Profile from './Profile';
import './App.css';

class App extends Component {
  state = {
    person: {},
    loading: false
  }

  loadingScreen = () => {
    const { name, email, phone, picture } = this.state.person
    if (!this.state.loading) {
        return (
            <Profile name={name} email={email} phone={phone} picture={picture} />
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
  }

  randomPerson = () => {
    const url = `https://randomuser.me/api`
    this.setState({ loading: true })
    fetch(url).then(
        response => response.json()
    ).then((result) => {
        console.log(result)
        let results = result.results[0]
        let person = {name: results.name.first, email: results.email, phone: results.phone, picture: results.picture.large}
        this.setState({
            person: person,
            loading: false
        })
    })
  }

  componentDidMount() {
      console.log('Profile: didMount')
      this.randomPerson()
  }

  render() {
    const { name, email, phone, picture } = this.state.person
    return (
      <div className="App"> 
      {this.loadingScreen()}
      </div>
    );
  }
}

export default App;
