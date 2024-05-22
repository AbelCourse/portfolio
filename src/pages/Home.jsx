import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import homeLogo from '../assets/about.jpg';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import Particle from '../components/Particle';

const Home = () => {
	return (
		<section>
			<Container
				fluid
				className='home-section'
				id='home'>
				<Particle />
				<Container className='home-content'>
					<Row>
						<Col
							md={7}
							className='home-header'>
							<h1
								style={{ paddingBottom: 15 }}
								className='heading'>
								Hi There!{' '}
								<span
									className='wave'
									role='img'
									aria-labelledby='wave'>
									👋🏻
								</span>
							</h1>

							<h1 className='heading-name'>
								I'm
								<strong className='main-name'>
									{' '}
									Abel Seyoum
								</strong>
							</h1>

							<div style={{ padding: 50, textAlign: 'left' }}>
								<Type />
							</div>
						</Col>

						<Col
							md={5}
							style={{ paddingBottom: 20 }}>
							<img
								src={homeLogo}
								alt='home pic'
								className='img-fluid bigImage'
								style={{
									maxHeight: '450px',
								}}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
			<About />
		</section>
	);
};

export default Home;
