import React from "react";

class ToDoList extends React.Component {
  render() {
    const listToDisplay = this.props.toDos.map((toDo, index) => {
      // the return acts like a .push so everytime I return something it is pushed into listToDisplay
      return <li key={index}>{toDo}</li>;
    });
    return <ul>{listToDisplay}</ul>;
  }
}

export default ToDoList;
