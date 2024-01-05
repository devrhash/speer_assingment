const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { SECRET } = require("../../../Config");
const { findOne } = require("../../../helper");

const loginUser = async (req, res) => {

	const { UserName, password } = req.body;
	try {
		const populatedUser = await findOne(
			"users",
			{ UserName }
		);
		const user = populatedUser;
		if (user) {
			const passwordIsValid = bcrypt.compare(password, user.password);
			if (!passwordIsValid) {
				return res
					.status(404)
					.send({ status: 400, message: "Invalid Email or Password!" });
			}
			user.password = undefined;
			var token = jwt.sign({ id: user._id }, SECRET);
			res.status(200).send({ status: 200, user, token });
		} else {
			return res
				.status(404)
				.send({ status: 404, message: "User does not exist!" });
		}
	} catch (e) {
		res.status(400).send({ status: 400, message: e.message });
	}
};

module.exports = loginUser;