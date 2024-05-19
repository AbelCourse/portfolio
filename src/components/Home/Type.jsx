import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
	return (
		<Typewriter
			options={{
				strings: [
					'Full Stack Developer | Software Engineer',
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
