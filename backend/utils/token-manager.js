const jwt = require("jsonwebtoken");

exports.createToken = (id, email, expiresIn) => {
	const payload = { id, email };

	const token = jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn,
	});

	return token;
};
