import React from 'react';
import PropTypes from 'prop-types';

function Footer({ handleClear, activeCount }) {
  return (
    <footer className="footer">
      <span className="todo-count">{activeCount} items left</span>
      <button type="button" className="clear-completed" onClick={handleClear}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  handleClear: () => {},
  activeCount: 0,
};

Footer.propTypes = {
  handleClear: PropTypes.func,
  activeCount: PropTypes.number,
};

export default Footer;
