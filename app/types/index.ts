export interface Pokemon {
  id: number
  name: string
  types: PokemonType[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

export interface PokemonType {
  type: {
    name: string
  }
}
