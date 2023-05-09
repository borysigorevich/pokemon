import { pokemonApi } from '@/services/pokemonApi';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PokemonSliceType = {
	pokemonList: { name: string; url: string }[];
	selectedPokemon: GetPokemonQueryResultType | null;
};

const initialState: PokemonSliceType = {
	pokemonList: [],
	selectedPokemon: null,
};

export const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		selectPokemon: (
			state,
			{ payload }: PayloadAction<GetPokemonQueryResultType>
		) => {
			state.selectedPokemon = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			pokemonApi.endpoints.getPokemonsList.matchFulfilled,
			(state, { payload }) => {
				state.pokemonList.push(...payload.results);
			}
		);
	},
});

export const { selectPokemon } = pokemonSlice.actions;
