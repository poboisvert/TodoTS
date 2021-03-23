import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./components/App";
import { reducers } from "./reducer";
const store = createStore(reducers, applyMiddleware(thunk));

export default ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
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
