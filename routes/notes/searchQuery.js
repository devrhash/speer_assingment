const { search } = require("../../helper");


const searchQuery = async (req, res) => {

	const body = req.query.q;
	try {
		const note = await search("notes", body);
		return res.status(200).send({ status: 200, note });
	} catch (e) {
		res.status(400).send({ status: 400, message: e.message });
	}
};

module.exports = searchQuery;