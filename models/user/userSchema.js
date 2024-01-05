const mongoose = require("mongoose");
const schemaType = require("../../types");

const userSchema = new mongoose.Schema(
	{
		UserName: {
			type: schemaType.TypeString,
			required: true
		},
		password: {
			type: schemaType.TypeString,
			required: true
		}
	},
	{ timestamps: true }
);

module.exports = userSchema;