import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
	SiAmazonaws,
	SiApachemaven,
	SiAwslambda,
	SiDocker,
	SiIntellijidea,
	SiJenkins,
	SiKubernetes,
	SiPostman,
	SiPrometheus,
	SiSplunk,
} from 'react-icons/si';

const Toolstack = () => {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiIntellijidea />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiAmazonaws />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiApachemaven />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiJenkins />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiDocker />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiKubernetes />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiSplunk />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiPrometheus />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiAwslambda />
			</Col>

			<Col
				xs={4}
				md={2}
				className='tech-icons'>
				<SiPostman />
			</Col>
		</Row>
	);
};

export default Toolstack;
