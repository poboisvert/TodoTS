import * as React from "react";
import * as ReactDOM from "react-dom";

interface IProps {
  color?: string;
}

interface State {
  counter: number;
}
class App extends React.Component<IProps, State> {
  // this.state = { counter: 0 }; // Property method

  constructor(props: IProps) {
    super(props);
    this.state = { counter: 0 }; // Constructor Method
  }

  onIcrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.onIcrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
