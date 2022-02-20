import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Task = ({ handleRemove, onToggle, onSetEdit, onEditActiveItem, item }) => {
  const{name, isDone, isActive, id} = item
  Task.defaultProps = {
    name: '',
    id: 0,
    handleRemove: () => {},
    onToggle: () => {},
    onSetEdit: () => {},
    isDone: false,
    isActive: false,
    onEditActiveItem: '() => { }',
  };

  Task.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    handleRemove: PropTypes.func,
    onToggle: PropTypes.func,
    onSetEdit: PropTypes.func,
    isDone: PropTypes.bool,
    isActive: PropTypes.bool,
    onEditActiveItem: PropTypes.func,
  };

  const task = (
    <li className={isDone ? 'completed' : ''}>
      <div className="view">
        <input id="checkbox" className="toggle" type="checkbox" onChange={() => onToggle(id)} defaultChecked={isDone} />
        <label htmlFor="checkbox" onClick={() => onToggle(id)}>
          <span className="description" autoFocus>
            {name}
          </span>
          <span className="created">{formatDistanceToNow(id)}</span>
        </label>
        <button title="" type="button" className="icon icon-edit" onClick={() => onSetEdit(id)}></button>
        <button title="" type="button" className="icon icon-destroy" onClick={() => handleRemove(id)}></button>
      </div>
    </li>
  );

  const activeTask = (
    <li className="editing">
      <div className="view">
        <input id="editing" className="toggle" type="checkbox" />
        <label htmlFor="editing">
          <span className="description">{name}</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button title="edit" type="button" className="icon icon-edit"></button>
        <button title="remove" type="button" className="icon icon-destroy"></button>
      </div>
      <input
        id="editing"
        autoFocus
        type="text"
        className="edit"
        defaultValue={name}
        onKeyUp={(event) => onEditActiveItem(id, event)}
      />
    </li>
  );
  return isActive ? activeTask : task;
};
export default Task;
