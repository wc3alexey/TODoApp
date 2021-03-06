import React from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import Timer from '../Timer/Timer'

const Task = ({
  handleRemove,
  onToggle,
  onSetEdit,
  onEditActiveItem,
  item
}) => {
  const { name, isDone, isActive, id, time } = item
  Task.defaultProps = {
    item: {},
    handleRemove: () => {},
    onToggle: () => {},
    onSetEdit: () => {},
    onEditActiveItem: '() => { }'
  }

  Task.propTypes = {
    item: PropTypes.object,
    handleRemove: PropTypes.func,
    onToggle: PropTypes.func,
    onSetEdit: PropTypes.func,
    onEditActiveItem: PropTypes.func
  }

  const task = (
    <li className={isDone ? 'completed' : ''}>
      <div className="view">
        <input
          id="checkbox"
          className="toggle"
          type="checkbox"
          onChange={() => onToggle(id)}
          defaultChecked={isDone}
        />
        <label htmlFor="checkbox" onClick={() => onToggle(id)}>
          <span className="description" autoFocus>
            {name}
          </span>
        </label>
        <Timer time={time} />
          <span className="created">{formatDistanceToNow(id)}</span>
        <button
          title="edit"
          type="button"
          className="icon icon-edit"
          onClick={() => onSetEdit(id)}
        ></button>
        <button
          title="remove"
          type="button"
          className="icon icon-destroy"
          onClick={() => handleRemove(id)}
        ></button>
      </div>
    </li>
  )

  const activeTask = (
    <li className="editing">
      <div className="view">
        <input id={name} className="toggle" type="checkbox" />
        <label htmlFor={name}>
          <span className="description">{name}</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button title="edit" type="button" className="icon icon-edit"></button>
        <button
          title="remove"
          type="button"
          className="icon icon-destroy"
        ></button>
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
  )
  return isActive ? activeTask : task
}
export default Task

// "husky": {
//   "hooks": {
//     "pre-commit": "lint-staged"
//   }
// },
