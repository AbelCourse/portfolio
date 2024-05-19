import React from 'react';
import { Row } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
			<h1
				className='project-heading'
				style={{ paddingBottom: '20px' }}>
				Days I <strong className='yellow'>Code</strong>
			</h1>
			<GitHubCalendar
				username='AbelCourse'
				blockSize={15}
				blockMargin={5}
				color='#6102ce'
				fontSize={16}
			/>
		</Row>
	);
};

export default Github;
