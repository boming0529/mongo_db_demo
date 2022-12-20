const mongoose = require('mongoose')

mongoose
    .connect('mongodb://testuser:testuser@mongodb-standalone-1/demo', { })
    .then(() => {
        console.log('Connected !!')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db