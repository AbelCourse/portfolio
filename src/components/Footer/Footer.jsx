import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import logo from '../../assets/sLogo.png';

const Footer = () => {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container
			fluid
			className='footer'>
			<Row>
				<Col
					md='4'
					className='footer-copywright'>
					<span>Empowering Progress with Every Click.</span>
				</Col>
				<Col
					md='4'
					className='footer-copywright'>
					<span>Copyright © {year}</span>
					<img
						src={logo}
						className='img-fluid logo'
						alt='brand'
					/>
				</Col>
				<Col
					md='4'
					className='footer-body'>
					<ul className='footer-icons'>
						<li className='social-icons'>
							<a
								href='https://github.com/AbelCourse/'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='github'>
								<AiFillGithub />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://twitter.com/HugMaster69/'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='twitter'>
								<AiOutlineTwitter />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://www.linkedin.com/in/AbelSeyoum/'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='linkedin'>
								<FaLinkedinIn />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
