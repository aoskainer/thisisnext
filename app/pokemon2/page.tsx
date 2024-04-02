'use client';

import { Pokemon } from '@/app/_types';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Spinner } from "@nextui-org/spinner";

export default function Page() {
  const [pokemon, setPokemon] = useState<Pokemon>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // 開発時(npm run dev)にuseEffectが2回呼ばれる？
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/pokemon')
      const data = await response.json()
      setPokemon(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <main className="flex flex-col justify-center items-center min-h-screen">
        <Spinner />
      </main>
    )
  }

  if (!pokemon) {
    return (
      <main className="flex flex-col justify-center items-center min-h-screen">
        <p>No data</p>
      </main>
    )
  }

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
