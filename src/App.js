import "./App.css";
import store from "./features/store";
import { Provider } from "react-redux";

import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
import TotalCompleteItems from "./components/Todos/TotalCompleteTodo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Test ReduxToolkit</h1>
        <div className="App container">
          {/* <h1>hi saheb !</h1> */}
          {/* <CounterComp /> */}
          <AddTodoForm />
          <TodoList />
          <TotalCompleteItems />
        </div>
      </div>
    </Provider>
  );
}

export default App;
