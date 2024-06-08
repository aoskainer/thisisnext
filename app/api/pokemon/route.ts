import { fetchPokemon } from "@/_apiclient/pokeapi";

export async function GET() {
  // 適当に時間かかる処理
  let cnt = 0
  for (let i = 0; i < 2000000000; i++) {
    cnt++
  }

  const response = await fetchPokemon();
  return new Response(
    JSON.stringify(response),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
