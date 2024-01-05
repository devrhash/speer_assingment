const { deleteDocument } = require("../../helper");


const deleteNotes = async (req, res) => {
	const notes_id = req.params.id;
	try {
		await deleteDocument("notes", { _id: notes_id, user_id: req.userId });
		return res.status(200).send({ status: 200, task: "note deleted" });
	} catch (e) {
		res.status(400).send({ status: 400, message: e.message });
	}
};

module.exports = deleteNotes;