const jwt = require('jsonwebtoken')
const User = require('../Modules/JPModule')
const JPAuth = async (req,res,next) =>
{
const {authorization} = req.headers
if(!authorization)
{
    res.status(401).json({error:"invalid Authorization"})
}
const token = authorization.split(' ')[1]
try{
    const {_id} = jwt.verify(token,'Ak$jp')
    req.JP = await User.findOne({_id}).select('_id')
    next()
}
catch(error){
console.log(error)
res.status(401).json({error:"Authorization Required"})
}
} 
module.exports = JPAuth