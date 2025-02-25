import React, {Profiler} from "react";
import logo from "./logo.svg";
import "./App.css";
import { ToDoPage } from "./pages/todo/todo-page.container";
import { ToDoContextProvider } from "./features/todo/todo.view-model";


function App() {
  return (
    <ToDoContextProvider>
      <Profiler id="ToDOPage" onRender={(id,_, actDuration) => console.log(`Render time for ${id}: `, actDuration)} >
        <ToDoPage />
      </Profiler>
    </ToDoContextProvider>
  );
}

export default App;
