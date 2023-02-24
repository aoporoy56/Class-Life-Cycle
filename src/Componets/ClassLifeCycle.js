import React, {Component} from "react";

export default class ClassLifeCycle extends Component {
    constructor(props){
        super(props);
        console.log("Constructor");

        this.state = {
            count : 0
        }
    };
    
    change = () => {
        this.setState({count : this.state.count+1});
    }
    componentWillUnmount(){
        console.log("ComponentWillUnmonunt");
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate");
    }
    componentDidMount(){
        console.log("ComponentDidMount");
    }
    shouldComponentUpdate(){
        console.log("ShouldComponentUpdate");
        return true;
    }
    
  render() {
    console.log("Render")
    return (
        
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.change}>+</button>
      </div>
    )
  }
}
