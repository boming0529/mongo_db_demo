const express = require('express')

const PartnerCtrl = require('../controllers/partner-ctrl')

const router = express.Router()


router.get('/partner', PartnerCtrl.getPartner)



module.exports = router