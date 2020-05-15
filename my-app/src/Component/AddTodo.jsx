import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };

  addNewTodo = (newTodo) => this.setState({ title: newTodo.target.value });

  onSubmit = (submitTodo) => {
    submitTodo.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add to your Todo List"
          style={{ flex: 10, padding: "5px" }}
          value={this.state.title}
          onChange={this.addNewTodo}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: 1 }}
        />
      </form>
    );
  }
}

export default AddTodo;
