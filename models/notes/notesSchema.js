const mongoose = require("mongoose");
const schemaType = require("../../types");

const notesSchema = new mongoose.Schema(
	{
		name: {
			type: schemaType.TypeString,
			required: true
		},
		description: {
			type: schemaType.TypeString,
			required: true
		},
		user_id: {
			type: schemaType.ObjectID,
			required: true,
		},
		shared_by: {
			type: schemaType.ObjectID,
			required: true
		},
	},
	{ timestamps: true }
);

module.exports = notesSchema;