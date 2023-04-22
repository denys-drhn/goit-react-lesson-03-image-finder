import { Component } from 'react';
import { toast } from 'react-toastify';
import css from './PokemonForm.module.css';

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.pokemonName.trim() === '') {
      // если строка пустая и ми нажали кнопку поиска
      toast.warn('🦄Enter valid pokemon name', {
        // настройки нотификейта.
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    this.props.onSubmit(this.state.pokemonName); // props из App которому мі передаем state из єтого компонента в App
    this.setState({ pokemonName: '' }); // ?
  };

  render() {
    return (
      <form className={css.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
