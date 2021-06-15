import React, {Component} from 'react';

class App extends Component {
  render(){
    const v = "Hi!"
    const d = <h1 className = "foo">{v}</h1>
    return (
      <React.Fragment>
        <label htmlFor = "bar">bar</label>
        <input type = "text" onClick = {() => {console.log("I am clicked")}}/>
      </React.Fragment>
    )
  }
}

export default App;
