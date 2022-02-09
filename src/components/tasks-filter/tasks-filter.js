import React from 'react';
import PropTypes from 'prop-types';

function TasksFilter({ tab, clickHandler }) {
  TasksFilter.defaultProps = {
    tab: '',
    clickHandler: () => {},
  };

  TasksFilter.propTypes = {
    tab: PropTypes.string,
    clickHandler: PropTypes.func,
  };

  return (
    <ul className="filters">
      <li>
        <button type="button" className={tab === 'all' ? 'selected' : ''} onClick={() => clickHandler('all')}>
          All
        </button>
      </li>
      <li>
        <button type="button" className={tab === 'active' ? 'selected' : ''} onClick={() => clickHandler('active')}>
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          className={tab === 'сompleted' ? 'selected' : ''}
          onClick={() => clickHandler('сompleted')}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TasksFilter;
