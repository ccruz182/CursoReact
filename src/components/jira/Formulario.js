import React, { Component } from 'react';

class Formulario extends Component {
  state = {
    nombre: '',
    descripcion: ''
  };

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  guardar = event => {
    event.preventDefault();
    this.props.nuevoToDo(this.state);
    this.setState({nombre: '', descripcion: ''});
  };

  render() {
    return (
      <form class='ui form'>
        <h1>Crear nuevo ToDo</h1>
        <div class='field'>
          <label>Nombre</label>
          <input
            type='text'
            name='nombre'
            placeholder='Nombre'
            onChange={this.handleOnChange}
            value={this.state.nombre}
          />
        </div>
        <div class='field'>
          <label>Descripción</label>
          <input
            type='text'
            name='descripcion'
            placeholder='Descripción'
            onChange={this.handleOnChange}
            value={this.state.descripcion}
          />
        </div>
        <button
          class='ui teal button basic'
          type='submit'
          onClick={this.guardar}
        >
          Añadir
        </button>
      </form>
    );
  }
}

export default Formulario;
