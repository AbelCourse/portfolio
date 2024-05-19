import React from 'react';
import { Particles } from 'react-tsparticles';

function Particle() {
	return (
		<Particles
			id='tsparticles'
			params={{
				particles: {
					number: {
						value: 160,
						density: {
							enable: true,
							value_area: 1500,
						},
					},
					line_linked: {
						enable: true,
						opacity: 0.3,
					},
					// move: {
					// 	direction: 'right',
					// 	speed: 0.05,
					// },
					size: {
						value: 1,
					},
					// opacity: {
					// 	anim: {
					// 		enable: true,
					// 		speed: 0.6,
					// 		opacity_min: 0.5,
					// 	},
					// },
				},
				interactivity: {
					events: {
						onclick: {
							enable: true,
							mode: 'push',
						},
						onhover: {
							enable: true,
							mode: 'push',
						},
					},
					modes: {
						push: {
							particles_nb: 2,
						},
					},
				},
				// retina_detect: true,
			}}
		/>
		// <FluidAnimation style={{ height: '100vh' }} />
	);
}

export default Particle;
