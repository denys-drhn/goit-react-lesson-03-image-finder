import { Component } from 'react';
import css from './PokemonInfo.module.css';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
  };
  componentDidMount() {
    //  console.log(this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      // console.log('изменилось имя покемона');

      this.setState({ loading: true });
      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
          .then(res => res.json())
          .then(pokemon => this.setState({ pokemon })) // короткие свойства обьекта
          .finally(() => this.setState({ loading: false }));
      }, 2000);
    }
  }

  render() {
    const { pokemon, loading } = this.state;
    return (
      <div className={css.pokemonInfo}>
        {loading && <div>Loading...</div>}
        {!this.props.pokemonName && <div>Enter pokemon name.</div>}
        {pokemon && !loading && <div>{pokemon.name}</div>}
      </div>
    );
  }
}
