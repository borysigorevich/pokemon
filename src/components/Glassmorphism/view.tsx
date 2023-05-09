'use client';
import { useAppSelector } from '@/hooks';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Glassmorphism = () => {
	const pokemon = useAppSelector((state) => state.pokemon.selectedPokemon);
	const cardRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (cardRef.current) {
			VanillaTilt.init(cardRef.current!, {
				max: 15,
				speed: 100,
				glare: true,
				transition: true,
			});
		}
	}, [cardRef.current]);

	return (
		<div
			className={`w-full mt-60 h-full md:w-fit grid place-content-center mx-auto md:mt-0 
            md:fixed md:right-[12%] md:top-1/2 -translate-y-1/2 transition-all
            	${pokemon ? 'scale-100 h-auto' : 'scale-0 h-0'}
            `}
		>
			<div
				className="relative rounded-[20px] [transform-style:preserve-3d] group"
				ref={cardRef}
			>
				<div
					className="relative w-[375px] md:w-[400px] min-h-[500px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px]
                    border border-[rgba(255,255,255,0.5)]
                    border-l-[rgba(255,255,255,0.75)]
                    border-t-[rgba(255,255,255,0.75)]
                    shadow-[0,25px,45px,rgba(0,0,0,0.05)]
                    rounded-[20px] [transform-style:preserver-3d]
                    "
				></div>

				<div
					className="absolute top-0 left-[15px] md:top-[50px] md:left-[-30px] w-[150px] h-[150px]
                    bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.75)]
                    border-t-[rgba(255,255,255,0.75)] z-10 backdrop-blur-[10px] rounded-[10px]
                    shadow-[0,25px,45px,rgba(0,0,0,0.05)]
                    "
					style={{
						transform: 'translateZ(80px)',
					}}
				>
					{pokemon?.sprites?.back_default && (
						<Image
							className="p-5 transition-opacity opacity-100 duration-500 group-hover:opacity-100"
							src={pokemon?.sprites?.back_default}
							alt="quote"
							fill
						/>
					)}
				</div>

				<div
					className="absolute right-[30px] md:right-[60px] top-0  w-[170px] h-[170px] p-[10px]
                    bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.75)]
                    border-t-[rgba(255,255,255,0.75)] z-10 backdrop-blur-[10px] rounded-[10px]
                    shadow-[0,25px,45px,rgba(0,0,0,0.05)]
                    "
					style={{
						transform: 'translateZ(120px)',
					}}
				>
					{pokemon?.sprites?.front_default && (
						<Image
							className="p-5 transition-opacity opacity-100 duration-500 group-hover:opacity-100"
							src={pokemon?.sprites?.front_default}
							alt="quote"
							fill
						/>
					)}
				</div>

				<div
					className="absolute right-[0] bottom-[175px] w-[100%] h-[120px] p-[10px] text-center md:text-right text-[#644651]
                     z-10 rounded-[10px] text-[2rem] font-semibold transition-all delay-[0.25s] opacity-100
                     group-hover:opacity-100 duration-500
                    "
					style={{
						transform: 'translateZ(100px)',
					}}
				>
					<h2 className="capitalize">{pokemon?.name}</h2>
				</div>

				<div
					className="absolute right-5 md:right-[-20px] bottom-[-100px] w-[90%] min-h-[300px] p-[10px] flex items-center justify-center
                    bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.75)]
                    border-t-[rgba(255,255,255,0.75)] z-10 backdrop-blur-[10px] rounded-[10px] text-center
                    shadow-[0,25px,45px,rgba(0,0,0,0.05)] [transform:translateZ(180px)]"
				>
					<div
						className="relative text-[#644651] text-[0.85rem] opacity-100 transition-opacity delay-500
                    group-hover:opacity-100"
					>
						<div className="grid grid-cols-3 gap-5 text-sm md:text-lg">
							<div className="flex flex-col gap-1">
								<p className="font-semibold">Type</p>
								<p className="font-semibold capitalize bg-amber-50 py-1 px-4 rounded-xl">
									{pokemon?.types[0].type.name}
								</p>
							</div>

							{pokemon?.stats.map((stat, index) => (
								<div
									className="flex flex-col gap-1"
									key={index}
								>
									<p className="font-semibold capitalize">
										{stat.stat.name.replace(
											'special-',
											'SP '
										)}
									</p>
									<p className="bg-amber-50 py-1 px-4 rounded-xl">
										{stat.base_stat}
									</p>
								</div>
							))}

							<div className="flex flex-col gap-1">
								<p className="font-semibold">Weight</p>{' '}
								<p className="bg-amber-50 py-1 px-4 rounded-xl">
									{pokemon?.weight}
								</p>
							</div>

							<div className="flex flex-col gap-1">
								<p className="font-semibold">Moves</p>{' '}
								<p className="bg-amber-50 py-1 px-4 rounded-xl">
									{pokemon?.moves.length}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*</Tilt>*/}
		</div>
	);
};

export default Glassmorphism;
