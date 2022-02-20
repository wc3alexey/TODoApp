import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';

const TodoList = ({ todos, handleRemove, onToggle, onSetEdit, onEditActiveItem, item }) => {
  TodoList.defaultProps = {
    item :{},
    todos: [],
    handleRemove: () => {},
    onToggle: () => {},
    onSetEdit: () => {},
    onEditActiveItem: () => {},
  };
  TodoList.propTypes = {
    item:PropTypes.object,
    todos: PropTypes.arrayOf(PropTypes.object),
    onToggle: PropTypes.func,
    handleRemove: PropTypes.func,
    onSetEdit: PropTypes.func,
    onEditActiveItem: PropTypes.func,
  };

  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map((item) => (
          <Task
              item ={item}
            key={item.id}
            handleRemove={handleRemove}
            onToggle={onToggle}
            onSetEdit={onSetEdit}
            onEditActiveItem={onEditActiveItem}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
