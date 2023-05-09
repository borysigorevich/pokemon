import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://pokeapi.co/api/v2/',
	}),
	reducerPath: 'pokemons',
	endpoints: (build) => ({
		getPokemonsList: build.query<
			GetPokemonListQueryResultType,
			GetPokemonListQueryArgumentsType
		>({
			query: ({ offset = 0 }) => ({
				url: `/pokemon?limit=12&offset=${offset}`,
			}),
		}),
		getPokemon: build.query<
			GetPokemonQueryResultType,
			GetPokemonQueryArgumentsType
		>({
			query: ({ order }) => ({
				url: `/pokemon/${order}`,
			}),
		}),
	}),
});

export const { useGetPokemonQuery, useLazyGetPokemonsListQuery } = pokemonApi;
