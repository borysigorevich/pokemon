type GetPokemonListQueryResultType = {
	results: { name: string; url: string }[];
};

type GetPokemonListQueryArgumentsType = {
	offset: number;
};

type GetPokemonQueryResultType = {
	order: number;
	weight: number;
	name: string;
	sprites: {
		back_default: string | null;
		back_female: string | null;
		back_shiny: string | null;
		back_shiny_female: string | null;
		front_default: string;
		front_female: string | null;
		front_shiny: string | null;
		front_shiny_female: string | null;
	};
	moves: Record<string, any>[];
	stats: {
		base_stat: number;
		stat: { name: string };
	}[];
	types: {
		type: { name: string };
	}[];
};

type GetPokemonQueryArgumentsType = {
	order: string;
};
