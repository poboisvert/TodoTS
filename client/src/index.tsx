import * as React from "react";
import * as ReactDOM from "react-dom";

interface IProps {
  color?: string;
}

const App = (props: IProps): JSX.Element => {
  return <div>{props.color}</div>;
};

export default ReactDOM.render(
  <App color="blue" />,
  document.querySelector("#root")
);

/* 

class App extends React.Component<IProps> {
  state = { counter: 0 }; // Property method

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
 */
