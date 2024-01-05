const { insertNewDocument, findOne } = require("../../helper");


const shareNote = async (req, res) => {
	const { name, description } = req.body;
	const body = { user_id: req.params.id, shared_by: req.userId, name: name, description: description };
	try {
		const note = await insertNewDocument("notes", body);
		return res.status(200).send({ status: 200, note });
	} catch (e) {
		res.status(400).send({ status: 400, message: e.message });
	}


};

module.exports = shareNote;