const { find } = require("../../helper");


const getNotes = async (req, res) => {
	const body = req.params?.id ? { user_id: req.params.id } : {};
	try {
		const note = await find("notes", body);
		return res.status(200).send({ status: 200, note });
	} catch (e) {
		res.status(400).send({ status: 400, message: e.message });
	}
};

module.exports = getNotes;