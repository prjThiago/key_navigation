import React from 'react';

import './Footer.css';

export default (props) => {
  const { focused, index } = props;

  return (
    <footer className="footer">
      <ul>
        <li className={focused && index === 0 ? 'focused' : ''}>Toyota</li>
        <li className={focused && index === 1 ? 'focused' : ''}>Honda</li>
        <li className={focused && index === 2 ? 'focused' : ''}>GM</li>
        <li className={focused && index === 3 ? 'focused' : ''}>Nissan</li>
      </ul>
    </footer>
  );
};
