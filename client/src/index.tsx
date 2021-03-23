import * as React from "react";
import * as ReactDOM from "react-dom";

interface IColor {
  color: string;
}

class App extends React.Component<IColor> {
  render() {
    return <div>{this.props.color}</div>;
  }
}
ReactDOM.render(<App color="red" />, document.querySelector("#root"));
