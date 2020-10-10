import React, { Component } from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard'
export default class PokemonList extends Component {
    state ={
        url: 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
        pokemon: []
    }
    
    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({pokemon: res.data['results']});
    }
    render() {
        return (
            <div>
            {this.state.pokemon ? (<div className="row">
            {this.state.pokemon.map(pokemon => (
                <PokemonCard 
                name = {pokemon.name}
                url ={pokemon.url}
                key={pokemon.name}/>
            ))}
        </div>) : <h1>Loading Pokemon</h1>}
        </div>  
        )
    }
}
