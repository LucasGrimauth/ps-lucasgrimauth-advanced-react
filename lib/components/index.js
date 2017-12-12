import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    answer: 43,
  }
  asyncFunction = () => {
    return Promise.resolve(37);
  }
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunction()
    });
  }
  render() { 
    return ( <h2>Hello World -- {this.state.answer}</h2> )
  }
}
 
export default App;

ReactDOM.render (
  <App />,
  document.getElementById('root')
);