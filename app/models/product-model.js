const mongoose=require("mongoose")
const {Schema,model}=mongoose
const productSchema=new Schema({
    productId:String,
    name:String,
    quantity:String,
    prize:String,
    total:String
},{timestamps:true})
const productModel=model("product",productSchema)
module.exports=productModel