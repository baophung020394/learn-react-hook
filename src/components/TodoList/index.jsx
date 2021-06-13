import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

// onTodoClick={() => handleTodoClick(index)}
function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleTodoClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleTodoClick(todo)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
