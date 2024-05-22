import React from 'react';

const Post = ({ post }) => {
	return (
		<a href={post.link._text}>
			<div className='post'>
				<h2>{post.title._text}</h2>
				<p>{post.description._text}</p>
			</div>
		</a>
	);
};

export default Post;
