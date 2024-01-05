const { updateDocument } = require("../../helper");


const updateNotes = async (req, res) => {
	const notes_id = req.params.id;
	const { name, description } = req.body;
	try {
		const note = await updateDocument("notes", { _id: notes_id, user_id: req.userId }, { name: name, description: description });
		return res.status(200).send({ status: 200, note });
	} catch (e) {
		res.status(400).send({ status: 400, message: e.message });
	}
};

module.exports = updateNotes;