import { Container } from 'react-bootstrap';
import Blogs from '../components/Blogs/Blogs';
import Particle from '../components/Particle';

const Blog = () => {
	return (
		<Container
			fluid
			className='about-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					<strong className='yellow'>Blog posts</strong>
				</h1>

				<Blogs />
			</Container>
		</Container>
	);
};

export default Blog;
