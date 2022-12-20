const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Partner = new Schema(
    {
        name: { type: String },
        address: { type: String },
    }
)

module.exports = mongoose.model('partner', Partner, 'partner')
