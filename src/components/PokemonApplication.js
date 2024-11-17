import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

const PokemonApplication = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.error("Error fetching Pokemon list:", error));
  }, []);

  const fetchPokemonData = () => {
    if (selectedPokemon) {
      fetch(selectedPokemon)
        .then((response) => response.json())
        .then((data) => setPokemonData(data))
        .catch((error) => console.error("Error fetching Pokemon data:", error));
    }
  };

  return (
    <div>
      <h1>Pokemon Application</h1>
      <div>
        <select
          onChange={(e) => setSelectedPokemon(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Välj en Pokemon
          </option>
          {pokemonList.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.url}>
              {pokemon.name}
            </option>
          ))}
        </select>
        <button onClick={fetchPokemonData}>Hämta Pokemon</button>
      </div>
      {pokemonData && <Pokemon data={pokemonData} />}
    </div>
  );
};

export default PokemonApplication;
