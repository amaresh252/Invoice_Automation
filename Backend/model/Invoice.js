const mongoose=require('mongoose')



const invoiceSchema=mongoose.Schema({
    amount:{type:String},
    dueDate:{type:String},
    recipientName:{type:String},
    address:{type:String},
    email:{type:String}
})


module.exports=mongoose.model('Invoice',invoiceSchema);