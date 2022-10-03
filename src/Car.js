import React from "react";
import ReactDOM from "react-dom/client";

/*
class Car extends React.Component {
    constructor() {
        super();
        this.state = {color: "volador"};
    }
    render(){
        return <h2>I am a Carro {this.state.color}!</h2>
    }
}
*/
/*
class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.color} Car!</h2>
    }
}*/

class Car extends React.Component {
  constructor(props) {
    super(props); // Siempre debe iniciarte este, así heredamos los métodos del padre
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1984,
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <div>
        <h2>My {this.state.brand}</h2>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button type="button" onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}
export default Car;
