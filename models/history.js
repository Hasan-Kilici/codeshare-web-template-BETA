const mongoose = require('mongoose')
const Schema = mongoose.Schema


const historySchema = new Schema({

    islemsahipName:{
        type:String,
        require:true
    },
    islemsahipID:{
        type:String,
        require:true
    },
    islem:{
        type:String,
        require:true
    },
    adminkontrol:{
        type:String,
        require:true
    },

} , {timestamps:true})

const history = mongoose.model('history' ,historySchema )
module.exports = history