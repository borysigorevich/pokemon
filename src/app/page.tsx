import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Pokemons } from '@/widgets/PokemonList';
const Glassmorphism = dynamic(
	() => import('../components/Glassmorphism/view'),
	{
		ssr: false,
	}
);

export default function Home() {
	return (
		<div className="min-h-full px-10">
			<Header />
			<main className="relative top-12 grid grid-cols-1 md:block gap-10 md:gap-0">
				<Pokemons />
				<Glassmorphism />
			</main>
		</div>
	);
}
