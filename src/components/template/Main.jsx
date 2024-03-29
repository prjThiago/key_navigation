import React from 'react';

import './Main.css';

export default (props) => {
  const { focused, index } = props;
  const button1 = focused && index === 0 ? 'focused btn btn-light btn-watch' : 'btn btn-dark btn-watch';
  const button2 = focused && index === 1 ? 'focused btn-more btn btn-light' : 'btn btn-dark btn-more';
  let bgid = 'img-default';

  if (props.railindex) {
    bgid = `img-${props.index}`;
  }

  return (
    <main className={`content ${bgid}`}>
      <button type="button" className={button1}>
        Assista
      </button>
      <button type="button" className={button2}>
        Veja Mais
      </button>
    </main>
  );
};
