
const User=require("../models/user-model")
const registerValidation={
    name:{
        in:["body"],
        exists:{
            errorMessage:"Name should be present"
        },
        notEmpty:{
            errorMessage:"Name is required"
        },
        trim:true,
    },
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
        normalizeEmail: true,
    custom: {
      options: async function (value) {
        const user = await User.findOne({ email: value });
        if (user) {
          throw new Error("Email is already taken");
        } else {
          return true;
        }
      },
    },
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
module.exports=registerValidation