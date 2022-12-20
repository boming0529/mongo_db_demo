const Partner = require('../models/partner-model')


getPartner = async (req, res) => {
    await Partner.find({}, (err, record) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!record.length) {
            return res
                .status(404)
                .json({ success: false, error: `Partner not found` })
        }
        return res.status(200).json({ success: true, data: record })
    }).catch(err => console.log(err))
}

module.exports = {
    getPartner
}