'use client';
import { colorScheme } from '@/entities/PokemonCard/constants/colorScheme';
import { normalizeOrderNumber } from '@/entities/PokemonCard/tools/normalizeOrderNumber';
import { PokemonCardProps } from '@/entities/PokemonCard/types';
import { useAppDispatch } from '@/hooks';
import { useGetPokemonQuery } from '@/services';
import { selectPokemon } from '@/store/pokemonSlice';
import Image from 'next/image';
import React from 'react';

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonUrl }) => {
	const dispatch = useAppDispatch();
	const pokemonOrderNumber = normalizeOrderNumber(pokemonUrl);
	const { data: pokemon } = useGetPokemonQuery({ order: pokemonOrderNumber });

	if (!pokemon)
		return <div className="w-[230px] h-[150px] border rounded-2xl"></div>;
	const handleSelectPokemon = () => {
		dispatch(selectPokemon(pokemon));
	};

	return (
		<div
			className={`min-w-[230px] max-w-[250px] h-[150px] border rounded-2xl shadow-md transition-all duration-300
            hover:scale-[1.05] hover:shadow-xl cursor-pointer bg-white text-center p-5 relative`}
			onClick={handleSelectPokemon}
		>
			<Image
				src={pokemon.sprites.front_default}
				alt="pokemon"
				width={100}
				height={100}
				className="-mt-14 text-center mx-auto"
			/>
			<div>
				<h2 className="font-semibold text-lg capitalize">
					{pokemon.name}
				</h2>

				<div className="flex gap-2 justify-center">
					{pokemon.types.map((type) => (
						<span
							key={type.type.name}
							style={{
								background:
									colorScheme[
										type.type
											.name as keyof typeof colorScheme
										],
							}}
							className="py-1 px-4 rounded-xl"
						>
							{type.type.name}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default React.memo(PokemonCard);
