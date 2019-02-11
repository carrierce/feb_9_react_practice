import React from "react";

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: ""
    };
  }

  formChange = e => {
    this.setState({ toDo: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.formChange(this.state.toDo);
    this.setState({ toDo: "" });
  };

  render() {
    return (
      <div>
        <h4>Hello from ToDoForm!</h4>
        <form onSubmit={e => this.submitForm(e)}>
          <h5>My Form</h5>
          <input value={this.state.toDo} onChange={e => this.formChange(e)} />
        </form>
      </div>
    );
  }
}

export default ToDoForm;
