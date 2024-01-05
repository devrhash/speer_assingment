const { find } = require("../../helper");


const finduser = async (req, res) => {
	try {
		const user = await find("users", {});
		return res.status(200).send({ status: 200, user });
	} catch (e) {
		res.status(400).send({ status: 400, message: e.message });
	}
};

module.exports = finduser;