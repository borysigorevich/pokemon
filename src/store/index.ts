import { pokemonApi } from '@/services';
import { pokemonSlice } from '@/store/pokemonSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		[pokemonApi.reducerPath]: pokemonApi.reducer,
		[pokemonSlice.name]: pokemonSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
