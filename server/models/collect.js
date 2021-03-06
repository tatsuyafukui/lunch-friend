const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

const CollectSchema = new mongoose.Schema({
		user: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: 'User'
		},
		station: {
				type: String,
				required: true
		},
		store: {
				type: String,
				required: true
		},
  link: {
				type: String,
		  required: true
		},
		num: {
				type: Number,
				required: true
		},
		time: {
				type: String,
				required: true
		},
		minute: {
				type: String,
				required: true
		},
		comment: {
				type: String,
				required: true
		},
		createdAt: {
				type: Date,
				default: now
		}
});

const Collect = mongoose.model('Collect', CollectSchema);

module.exports = {Collect};