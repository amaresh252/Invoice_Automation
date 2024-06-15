const User = require("../model/User");


exports.signUp=async(req,res)=>{
    try{
        const user =await User(req.body);
        const  doc=await user.save();
        res.status(201).json(doc);
    }catch(err){
        res.status(400).json({'message':'error in saving user'});
    }
}
exports.logIn=async(req,res)=>{
    try{
        const user=await User.find(req.body);
        res.status(200).json(user);
        
    }catch(err){
        res.status(400).json({'message':'error in fetching user'});
    }
}



