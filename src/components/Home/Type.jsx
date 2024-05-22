import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
	return (
		<Typewriter
			options={{
				strings: [
					'Software Engineer | Full Stack Developer',
					'Java Developer',
					'Compitetive Gamer',
					'Back End Developer',
					'Effective Problem Solver',
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
};

export default Type;
