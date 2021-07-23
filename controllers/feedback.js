const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SG_API_KEY);

exports.submit = (req, res) => {
	console.log(req.body);
	// console.log(process.env.SG_API_KEY);

	const {name, email, message, files} = req.body;
	const emailData = {
		to: email,
		from: process.env.EMAIL_FROM,
		// from: email,
		// from: process.env.EMAIL_TO,
		subject: 'Submission successful',
		html: `
			<h3>Customer feedback</h3>
			Customer name: ${name} <br/>
			Customer email: ${email} <br/>
			Customer message: <br/>
			${message}<br/>
			${files.map(url => `<img src='${url}' style='width:300px; padding: 20px' />`)}
			<hr/>`
	};
	sgMail.send(emailData).then(sgRes => {
		console.log('Sendgrid response: \n', sgRes);
		res.json({
			success: true
		})
	}).catch(err => {
		console.warn('SENDGRID MAIL SEND FAILURE.');
		console.log('SENDGRID error:\n', err);
		res.json({
			success: false
		})
	});
};
