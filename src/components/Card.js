import React from 'react';

const Card = props => (
  <div style={{marginTop: '2%'}} className="ui fluid card the-card">
    <div className='content'>
      <div className='header'>{props.titulo}</div>
    </div>
    <div className="content">
        {props.children}
    </div>
  </div>
);

export default Card;
