import React from 'react';

import './Nav.css';

export default (props) => {
  const { focused, index } = props;

  return (
    <aside className="menu-area">
      <ul>
        <li className={focused && index === 0 ? 'focused' : ''}>Busca</li>
        <li className={focused && index === 1 ? 'focused' : ''}>Início</li>
        <li className={focused && index === 2 ? 'focused' : ''}>Agora na Globo</li>
        <li className={focused && index === 3 ? 'focused' : ''}>Categorias</li>
        <li className={focused && index === 4 ? 'focused' : ''}>Minha Conta</li>
      </ul>
    </aside>
  );
};
