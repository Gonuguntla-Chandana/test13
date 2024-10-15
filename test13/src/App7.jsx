import { Component } from "react";
class App extends Component{
  render(){
    return(
      <div>
        <h2>This is Class component</h2>
        <Test/>
      </div>
    )
  }
}
class Test extends Component{
  render(){
    return(
      <div>
        <h2>This is Test class component</h2>
      </div>
    )
  }
}
export default App;