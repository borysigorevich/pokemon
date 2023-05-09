import React from 'react';

const Header = () => {
	return (
		<div className="sticky top-0 left-0 py-4 backdrop-blur-2xl z-50 w-[calc(100%+80px)] ml-[-40px]">
			<div
				className="border-2 w-[50%] text-center max-w-[500px] py-4 text-lg md:text-5xl mx-auto top-4 text-[rgb(236,86,97)]
            border-[rgb(236,86,97)] rounded-md"
			>
				Pokedox
			</div>
		</div>
	);
};

export default Header;
