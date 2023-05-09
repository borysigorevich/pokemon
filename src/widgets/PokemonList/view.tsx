'use client';
import { PokemonCard } from '@/entities/PokemonCard';
import { useAppSelector } from '@/hooks';
import { useLazyGetPokemonsListQuery } from '@/services';
import React from 'react';

const Pokemons = () => {
	const [offset, setOffset] = React.useState(0);
	const pokemons = useAppSelector((state) => state.pokemon.pokemonList);
	const [getPokemons, { isFetching }] = useLazyGetPokemonsListQuery();

	const incrementOffset = () => setOffset((state) => ++state);

	const defaultAmountOfPokemons = 12

	React.useEffect(() => {
		getPokemons({ offset: defaultAmountOfPokemons * offset });
	}, [offset]);

	return (
		<div className="md:w-1/2 text-center py-10 md:h-full mt-[-100px] md:mt-0">
			<div
				className="overflow-auto md:overflow-visible flex py-10 md:py-0 md:grid
            grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3 gap-y-8"
			>
				{isFetching || !pokemons.length
					? [...Array(pokemons.length || 12)].map((_, index) => (
							<div
								key={index}
								className="min-w-[230px] h-[150px] animate-pulse bg-slate-300 rounded-2xl"
							/>
					  ))
					: pokemons.map((pokemonInfo) => (
							<PokemonCard
								key={pokemonInfo.url}
								pokemonUrl={pokemonInfo.url}
							/>
					  ))}
			</div>
			<button
				className="bg-primary rounded-lg py-4 w-full max-w-[350px]
				text-center text-white text-xl mt-10"
				onClick={incrementOffset}
			>
				Load more
			</button>
		</div>
	);
};

export default Pokemons;
