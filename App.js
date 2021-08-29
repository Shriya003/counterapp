//import logo from './logo.svg';
import react, { Component } from "react"
import Counter from "./Counter";
import './App.css';
import './index.css'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Counter App</h1>
        <Counter/>
      </div>
    );
  
  }
}
export default App;
