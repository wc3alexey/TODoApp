import React from "react";
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function Task ({name, isDone, isActive, id, handleRemove,onToggle, onSetEdit, onEditActiveItem}){


  Task.defaultProps = {
    name: '',
    id:0,
    handleRemove: () => { },
    onToggle: () => { },
    onSetEdit: () => { },
    isDone: false,
    isActive:false,
    onEditActiveItem:'() => { }',
  };

  Task.propTypes = {
    name: PropTypes.string,
    id:PropTypes.number,
    handleRemove: PropTypes.func,
    onToggle: PropTypes.func,
    onSetEdit: PropTypes.func,
    isDone: PropTypes.bool,
    isActive:PropTypes.bool,
    onEditActiveItem:PropTypes.func,
  };

    const task = (     
    <li className = {isDone ? 'completed': ''}>
    <div className="view">
    <input className="toggle" type= 'checkbox' onChange={() => onToggle(id)} defaultChecked = {isDone} />
    <label >
        <span className="description">{name}</span>
    <span className="created">{formatDistanceToNow(id)}</span>
    </label>
    <button className="icon icon-edit" onClick={()=> onSetEdit (id)}></button>
    <button className="icon icon-destroy" onClick={()=>handleRemove(id)}></button>
    </div>
    </li>)

    const activeTask =(
        <li className="editing">
            <div className ="view">
              <input className ="toggle" type="checkbox" />
              <label>
                <span className ="description">{name}</span>
                <span className ="created">created 5 minutes ago</span>
              </label>
              <button className ="icon icon-edit"></button>
              <button className ="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit" defaultValue={name} onKeyUp={(event) => onEditActiveItem(id, event)}/>
          </li>
    )
  return  (isActive ? activeTask : task)

   
   
}
export default Task;