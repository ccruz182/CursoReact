import React, { useState, useEffect } from 'react';

const Hooks = () => {
  const [contador, setContador] = useState(0);
  const [colorIcon, setColorIcon] = useState('orange');
  const [coordenadas, setCoordenadas] = useState({
    x: 0,
    y: 0
  });

  const [loading, setLoading] = useState(false);
  const [claseBtn, setClaseBtn] = useState('');

  const handleOnClick = () => {
    setContador(contador + 1);

    if (contador >= 20) {
      setColorIcon('violet');
    }
    if (contador >= 50) {
      setColorIcon('green');
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
  });

  const handleMouseMove = event => {
    /*
    setCoordenadas({
        x: event.clientX,
        y: event.clientY
    });
    */
  };

  useEffect(() => {
    if (loading) {
      setClaseBtn('');
    } else {
      setClaseBtn('fluid');
    }
  }, [loading]);

  const cambioLoading = () => {
    setLoading(!loading);
  };

  return (
    <div>
      <div>
        <h2 className='ui header'>
          <i className={`${colorIcon} anchor icon`}></i>
          <div className='content'>Hook - useState / setState </div>
        </h2>
        <button className='ui violet basic button' onClick={handleOnClick}>
          Clicks: {contador}
        </button>
      </div>
      <div className='ui divider'></div>

      <div>
        <h2 className='ui header'>
          <i className={`violet anchor icon`}></i>
          <div className='content'>Hook - useEffect</div>
        </h2>
        <button
          className={`ui red basic ${claseBtn} button`}
          onClick={cambioLoading}
        >
          Da click!
        </button>
      </div>
    </div>
  );
};

export default Hooks;
