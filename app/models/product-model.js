const mongoose=require("mongoose")
const {Schema,model}=mongoose
const productSchema=new Schema({
    productId:String,
    name:String,
    quantity:String,
    prize:String,
    total:String,
    userId:{type:String,ref:"user"}
},{timestamps:true})
const productModel=model("product",productSchema)
module.exports=productModel
