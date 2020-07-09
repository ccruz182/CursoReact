import React, { Component } from 'react';
import Formulario from './Formulario';

class Header extends Component {
  style = {
    padding: '40px'
  };

  render() {
    return (
      <div style={this.style} className='ui fluid card'>
        <Formulario nuevoToDo={this.props.nuevoToDo}/>
      </div>
    );
  }
}

export default Header;
