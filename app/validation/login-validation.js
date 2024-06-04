

const loginValidation={
   
    email:{
        in:["body"],
        exists:{
            errorMessage:"Email should be present"
        },
        notEmpty:{
            errorMessage:"Email is required"
        },
        isEmail:{
            errorMessage:"Email is not valid"
        },
        trim:true,
    },
    password:{
        in:["body"],
        exists:{
            errorMessage:"Password should be present"
        },
        notEmpty:{
            errorMessage:"Password is required"
        },
        isLength:{
            options: {
                min: 8,
                max: 128,
              },
              errorMessage:"Password should be between 8 and 128 characters"

        },
        trim:true,

    }
}
module.exports=loginValidation