import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";
import AnotherForm from "./components/AnotherForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
      <NewTodoForm />
      <AnotherForm />
    </div>
  );
};

export default App;
