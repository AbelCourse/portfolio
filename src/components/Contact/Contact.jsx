import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
	const form = useRef();
	const [done, setDone] = useState(false);
	const [notDone, setNotDone] = useState(false);
	const [formData, setFormData] = useState({});

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
			//  Please use your own credentials from emailjs or i will recive your email

			emailjs
				.sendForm(
					'service_niilndo',
					'template_6z5idye',
					form.current,
					'VOBt6Akm1LhI5CZG-',
				)
				.then(
					(result) => {
						console.log(result.text);
						setDone(true);
					},
					(error) => {
						console.log(error.text);
					},
				);
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
						<br></br>
						You can also use the contact form and I will get back to
						you as soon as I see you message.
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
						/>
						<input
							type='email'
							name='reply_to'
							className='user'
							placeholder='Email'
							onChange={handleChange}
						/>
						<textarea
							name='message'
							className='user'
							placeholder='Message'
							onChange={handleChange}
						/>
						<span className='not-done'>
							{notDone && 'Please, fill all the input field'}
						</span>
						<Button
							type='submit'
							className='button'
							disabled={done}>
							Send
						</Button>
						<span className='done'>
							{done &&
								'Thanks for contacting me and be sure i have recieved your mail. If you are testing this functionality then i am confirming this thing working perfectly fine. If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin.'}
						</span>
					</form>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
