import { Pokemon } from "@/app/_types"

export async function fetchPokemon(): Promise<Pokemon> {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
  return await response.json()
}
