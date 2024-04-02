import { fetchPokemon } from '@/app/_apiclient/pokeapi'
import Image from 'next/image'

export default async function Page() {
  // Next14では、getServerSideProps()を使わず、関数コンポーネント内で直接fetchすることができる。便利！
  const pokemon = await fetchPokemon()
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              width={200}
              height={200}
              className="h-48 w-full object-cover md:w-48"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">#{pokemon.id}</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{pokemon.name}</a>
            <p className="mt-2 text-gray-500">
              Types: {pokemon.types.map((type, index) => (
                <span key={index} className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{type.type.name}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
