const Invoice = require("../model/Invoice")



exports.allInvoice=async(req,res)=>{
    try{
        const invoice=await Invoice.find();
        res.status(200).json(invoice);
    }catch(err){
        res.status(400).json({'message':'error in fetching invoice'});
    }
}

exports.createInvoice=async(req,res)=>{
    try{
        const invoice =await Invoice(req.body);
        const  doc=await invoice.save();
        res.status(200).json(doc);
    }catch(err){
        res.status(400).json({'message':'error in creating invoice'});
    }

}