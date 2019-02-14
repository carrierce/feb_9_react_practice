import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: []
    };
  }

  formChange = toDo => {
    this.setState({ toDos: [...this.state.toDos, toDo] });
    axios.post("http://localhost:3001/api/putData", {
      id: 10,
      toDo: toDo
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.toDos}</h1>
        <ToDoForm formChange={this.formChange} />
        <ToDoList toDos={this.state.toDos} />
      </div>
    );
  }
}

export default App;
