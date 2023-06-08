import { atom, useAtom } from "jotai";
import { IPokemon } from "../types/Pokemon";

type SelectPokemon = IPokemon | undefined;

export const pokemons = atom<IPokemon[]>([]);
export const addAllPokemons = atom(
  null,
  (_, set, fetchedPokemons: IPokemon[]) => {
    set(pokemons, fetchedPokemons);
  }
);
export const selectPokemon = atom<SelectPokemon>(undefined);

const useSelectPokemon = () => useAtom(selectPokemon);
export default useSelectPokemon;
