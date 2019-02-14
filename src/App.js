import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      toDos: []
    };
  }

  formChange = toDo => {
    this.setState({ toDos: [...this.state.toDos, toDo] });
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
    // What the while statement does is look at current is loop through all the data in the state
    // and check the data's id and if the id equals the current value of idToBeAdded, the value of
    // idToBeAdded increases by 1. This ensures that we have unique id that is one larger than all existing ideas.
    axios.post("http://localhost:3001/api/putData", {
      id: idToBeAdded,
      toDo: toDo
    });
  };

  // so I need to figure how to push the id in with the toDo. That needs to be done with setState

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
