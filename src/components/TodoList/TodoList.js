import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task';

function TodoList({ todos, handleRemove, onToggle, onSetEdit, onEditActiveItem }) {
  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map((item) => (
          <Task
            key={item.id}
            name={item.name}
            isDone={item.isDone}
            isActive={item.isActive}
            handleRemove={handleRemove}
            id={item.id}
            onToggle={onToggle}
            onSetEdit={onSetEdit}
            onEditActiveItem={onEditActiveItem}
          />
        ))}
      </ul>
    </section>
  );
}

TodoList.defaultProps = {
  todos: [],
  handleRemove: () => {},
  onToggle: () => {},
  onSetEdit: () => {},
  onEditActiveItem: () => {},
};
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onToggle: PropTypes.func,
  handleRemove: PropTypes.func,
  onSetEdit: PropTypes.func,
  onEditActiveItem: PropTypes.func,
};

export default TodoList;
