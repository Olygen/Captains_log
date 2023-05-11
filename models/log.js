// Super bonus:
// as a second argument to mongoose.Schema(), add { timestamps: true }

const { Schema, model } = require('mongoose');

const logSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    entry: {
        type: String,
        required: true
    },
    shipIsBroken: {
        type: Boolean,
        default: true
        // default: false
    }
}, { timestamps: true });


const Log = model('Log', logSchema);
module.exports = Log;