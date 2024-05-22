import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
	const form = useRef();
	const [done, setDone] = useState(false);
	const [notDone, setNotDone] = useState(false);
	const [formData, setFormData] = useState({
		from_name: '',
		reply_to: '',
		message_title: '',
		phone: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setDone(false);
		setNotDone(false);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		if (!formData.from_name || !formData.reply_to || !formData.message) {
			setNotDone(true);
		} else {
			console.log(JSON.stringify(formData));
			fetch(
				'https://9adgy4tm57.execute-api.us-east-1.amazonaws.com/prod/prod/submit',
				{
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				},
			)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					if (data.message === 'Form submitted successfully') {
						setDone(true);
						setFormData({
							from_name: '',
							reply_to: '',
							message_title: '',
							phone: '',
							message: '',
						});
					}
				})
				.catch((error) => {
					console.error(error);
					setNotDone(true);
				});
		}
	};

	return (
		<Container style={{ paddingTop: '50px' }}>
			<Row>
				<Col
					md={6}
					className='c-left'>
					<h1>Get in Touch</h1>
					<h3 className='yellow'>
						Thank you for visiting my page. If you want to get in
						touch with me, directly mail me at
						abels.seyoum@gmail.com or use any of the social links
						provided.
						<br />
						You can also use the contact form and I will get back to
						you as soon as I see your message.
					</h3>

					<h1 className='yellow'>Thank you!</h1>
				</Col>
				<Col
					md={6}
					className='c-right'>
					<form
						ref={form}
						onSubmit={sendEmail}>
						<h1 className='yellow'>Contact Form</h1>
						<input
							type='text'
							name='from_name'
							className='user'
							placeholder='Name'
							onChange={handleChange}
							value={formData.from_name}
						/>
						<input
							type='email'
							name='reply_to'
							className='user'
							placeholder='Email'
							onChange={handleChange}
							value={formData.reply_to}
						/>
						<input
							type='text'
							name='message_title'
							className='user'
							placeholder='Message Title'
							onChange={handleChange}
							value={formData.message_title}
						/>
						<input
							type='text'
							name='phone'
							className='user'
							placeholder='Phone (Optional)'
							onChange={handleChange}
							value={formData.phone}
						/>
						<textarea
							name='message'
							className='user'
							placeholder='Message'
							onChange={handleChange}
							value={formData.message}
						/>
						<span className='not-done'>
							{notDone && 'Please, fill all the required fields.'}
						</span>
						<Button
							type='submit'
							className='button'
							disabled={done}>
							Send
						</Button>
						<span className='done'>
							{done &&
								'Thank you for shooting me a message! I have received your message and will get back to you soon.'}
						</span>
					</form>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
