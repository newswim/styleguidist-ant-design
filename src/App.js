import React, { Component } from 'react'
import './App.css'
import 'antd/dist/antd.less'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi!</h1>
        <hr style={{ width: 350 }} />
        <p>
          {`The purpose of this project is to show the effects of
            the Ant Design framework being overridden by custom variables.`}
        </p>
      </div>
    )
  }
}

export default App
