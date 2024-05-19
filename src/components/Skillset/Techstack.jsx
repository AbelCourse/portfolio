import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DiGit, DiNodejs } from 'react-icons/di';
import { FaJava } from 'react-icons/fa6';
import {
	SiExpress,
	SiGraphql,
	SiHibernate,
	SiJavascript,
	SiJunit5,
	SiMongodb,
	SiMysql,
	SiPostgresql,
	SiReact,
	SiRedux,
	SiSpring,
	SiSpringboot,
} from 'react-icons/si';

const Techstack = () => {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<FaJava />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiJavascript />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiSpring />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiSpringboot />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiHibernate />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiJunit5 />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiReact />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiRedux />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<DiNodejs />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiExpress />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiGraphql />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiMysql />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiPostgresql />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiMongodb />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<DiGit />
			</Col>
		</Row>
	);
};

export default Techstack;
