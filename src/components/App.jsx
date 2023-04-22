import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from './PokemonForm/PokemonForm';
import PokemonInfo from './PokemonInfo/PokemonInfo';

export class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  //   componentDidMount() {
  //     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //       .then(res => res.json())
  //       .then(pokemon => this.setState({ pokemon })); // short hand- нужно разобраться еще как сделать такую запись
  //   }

  render() {
    return (
      <>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer />
      </>
    );
  }
}

// {
//   this.state.pokemon && (
//     <div>Рендер покемона: {this.state.pokemon.name}</div>
//   );
// }
