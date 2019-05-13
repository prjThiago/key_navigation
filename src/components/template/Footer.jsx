import React from 'react';

import './Footer.css';

export default (props) => {
  const { focused, index } = props;

  return (
    <footer className="footer">
      <ul>
        <li className={focused && index === 0 ? 'focused' : ''}>Sala de estar</li>
        <li className={focused && index === 1 ? 'focused' : ''}>Piscina</li>
        <li className={focused && index === 2 ? 'focused' : ''}>Academia</li>
        <li className={focused && index === 3 ? 'focused' : ''}>Chuveiro</li>
      </ul>
    </footer>
  );
};
