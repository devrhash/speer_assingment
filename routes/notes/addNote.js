const { insertNewDocument } = require("../../helper");


const addNote = async (req, res) => {
	const body = { user_id: req.userId, shared_by: req.userId, ...req.body };
	try {
		const note = await insertNewDocument("notes", body);
		return res.status(200).send({ status: 200, note });
	} catch (e) {
		res.status(400).send({ status: 400, message: e.message });
	}
};

module.exports = addNote;