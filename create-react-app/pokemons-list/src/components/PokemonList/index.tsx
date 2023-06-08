import { useEffect } from "react";
import useSelectPokemon, {
  addAllPokemons,
  pokemons as pokemonState,
} from "../../atoms/Pokemon";
import { useAtom } from "jotai";

import style from "./PokemonList.module.css";

const PokemonList = () => {
  const [, addPokemons] = useAtom(addAllPokemons);
  const [pokemons] = useAtom(pokemonState);
  const [, setSelectPokemon] = useSelectPokemon();

  const fetchPokemons = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/kevinuehara/microfrontends/main/mocks/pokemonList.json"
    );
    const jsonData = await response.json();
    addPokemons(jsonData);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className={style.container}>
      <h1>Pokémon List Micro Frontend</h1>
      <div className={style.pokemonCardContainer}>
        {pokemons.map((pokemon) => {
          return (
            <div
              className={style.pokemonCard}
              key={pokemon.id}
              onClick={() => setSelectPokemon(pokemon)}
            >
              <img
                src={pokemon.sprite}
                aria-label={`Image of pokemon ${pokemon.name}`}
              />
              <label>{pokemon.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
