import "./App.css";

import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
import TotalCompleteItems from "./components/Todos/TotalCompleteTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Test ReduxToolkit</h1>
        <div className="App container">
          <AddTodoForm />
          <TodoList />
          <TotalCompleteItems />
        </div>
      </div>
    </Provider>
  );
}

export default App;
