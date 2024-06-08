import { fetchPokemon } from "@/_apiclient/pokeapi"

describe("fetchPokemon", () => {
  it("PokeAPIをフェッチして正しい値を返却する", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      new Promise((resolve) => {
        resolve({
          ok: true,
          status: 200,
          json: async () => ({
            id: 1,
            name: "bulbasaur",
            types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
            sprites: { other: { "official-artwork": { front_default: "https://example.com/1.png" } } },
          })
        })
      })
    );

    const actual = await fetchPokemon();

    expect(actual.id).toBe(1);
    expect(actual.name).toBe("bulbasaur");
    expect(actual.types[0].type.name).toBe("grass");
    expect(actual.types[1].type.name).toBe("poison");
    expect(actual.sprites.other["official-artwork"].front_default).toBe("https://example.com/1.png");
  })
})
