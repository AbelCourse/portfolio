import React from 'react';
import AOP from '../../assets/AOP.png';
import './Blog.css';

const Blog = () => {
	const post = {
		link: 'https://abelseyoum.medium.com/intro-into-spring-aop-5b1adeee21c6',
		title: 'Intro into AOP',
		description:
			'Aspect-oriented programming (AOP) is a programming paradigm that allows developers to modularize cross-cutting...',
		thumbnail: AOP, // Replace with actual thumbnail URL
	};

	return (
		<div className='blogContainer'>
			<a
				href={post.link}
				target='_blank'
				rel='noopener noreferrer'
				className='blogPostLink'>
				<div className='blogPost'>
					<img
						src={post.thumbnail}
						alt='Post Thumbnail'
						className='thumbnail'
					/>
					<h2 className='title'>{post.title}</h2>
					<p className='description'>{post.description}</p>
				</div>
			</a>
		</div>
	);
};

export default Blog;
