import React, { Component } from "react";
import "./Todos.css";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        deleteTodo={this.props.deleteTodo}
      />
    ));
  }
}

// For prop validation (its always helpful and a good practise )
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
