import React, { Component } from 'react'

export class Home extends Component {
  render() {
    document.title = "Katz Restaurant"
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}

export default Home