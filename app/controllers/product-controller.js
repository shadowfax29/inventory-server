const {validationResult} = require("express-validator");
const Product = require("../models/product-model");

const productController = {};

productController.create = async (req, res) => {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) { // Check if errors are NOT empty
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const existing=await Product.findOne({productId:req.body.productId})
        const body = req.body;
      if(existing){
         existing.quantity+=1
         await existing.save()
         return
      }
       else{
        const product = await Product.create(body);
       product.userId=req.user.id
       await product.save()
        res.status(201).json(product);
          return
       }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

productController.delete = async (req, res) => {
    try {
   
        const productId = req.params.id;

        let item = await Product.findOne({ productId: productId }); // Use _id for MongoDB ObjectId comparison

        if (!item) {
            return res.status(404).json({ error: "Product not found" });
        }

        // Check if the quantity is greater than 1
        if (item.quantity > 1) {
            // Decrement the quantity
            item.quantity -= 1;
            await item.save(); // Save the updated document
            return res.status(200).json({ message: "Product quantity decremented successfully", item });
        } else {
            // Delete the product since its quantity is now 0 or less
            const deletedItem = await Product.findOneAndDelete({ productId: productId });
            if (deletedItem) {
                return res.status(200).json(deletedItem);
            } else {
                return res.status(404).json({ error: "Product not found" });
            }
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

productController.show=async(req,res)=>{
    try{
        const show=await Product.find({userId:req.user.id})
        res.json(show)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = productController;
