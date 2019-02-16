import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [],
      data: []
    };
  }

  componentDidMount() {
    this.getDataFromDb();
    // if (!this.state.intervalIsSet) {
    //   let interval = setInterval(this.getDataFromDb, 1000);
    //   this.setState({ intervalIsSet: interval });
    // }
    // this.setState({ toDos: [...this.state.toDos, this.state.data.toDo] });
    console.log(this.state.data);
  }

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  // I think here we need to so something about a set state of the data from the DB into the toDos: using
  // something like toDos: [...this.state.toDos, toDo]. Make sure the formatting is correct.

  formChange = toDo => {
    this.setState({ toDos: [...this.state.toDos, toDo] });

    axios.post("http://localhost:3001/api/putData", {
      toDo: toDo
    });
    console.log(this.state.data);
    console.log(this.state.toDos);
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
