const productValidation={
    productId:{
        in:["body"],
        exists:{
            errorMessage:"productId is required"
        },
        notEmpty:{
            errorMessage:"productId cannot be empty"
        }
    }
}
module.exports=productValidation