const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = 4343;
const mongoose = require("mongoose");
const { checkSchema } = require("express-validator");
const userController = require("./app/controllers/user-controller");
const registerValidation = require("./app/validation/register-validation");
const loginValidation = require("./app/validation/login-validation");
const authenticate = require("./app/middleware/authenticate");
const productValidation = require("./app/validation/product-validation");
const productController = require("./app/controllers/product-controller");

const db=async()=>{
    try{
        await mongoose.connect("const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = 4343;
const mongoose = require("mongoose");
const { checkSchema } = require("express-validator");
const userController = require("./app/controllers/user-controller");
const registerValidation = require("./app/validation/register-validation");
const loginValidation = require("./app/validation/login-validation");
const authenticate = require("./app/middleware/authenticate");
const productValidation = require("./app/validation/product-validation");
const productController = require("./app/controllers/product-controller");

const db=async()=>{
    try{
        await mongoose.connect("const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = 4343;
const mongoose = require("mongoose");
const { checkSchema } = require("express-validator");
const userController = require("./app/controllers/user-controller");
const registerValidation = require("./app/validation/register-validation");
const loginValidation = require("./app/validation/login-validation");
const authenticate = require("./app/middleware/authenticate");
const productValidation = require("./app/validation/product-validation");
const productController = require("./app/controllers/product-controller");

const db=async()=>{
    try{
        await mongoose.connect("mongodb+srv://ravikumargowda2429:ravi12345@cluster0.npk340o.mongodb.net/inventory?retryWrites=true&w=majority&appName=Cluster0")
            console.log("connected to db")

           
    }
    
    catch(err){
        console.log(err)
    }
  

}
db()
app.post("/api/user/create",checkSchema(registerValidation),userController.create)
app.post("/api/user/login",checkSchema(loginValidation),userController.login)
app.get("/api/user",authenticate,userController.show)
app.post("/api/addProduct",authenticate,checkSchema(productValidation),productController.create)
app.get("/api/products",authenticate,productController.show)
app.delete("/api/deleteProduct/:id",authenticate,productController.delete)
app.listen(port,()=>{
    console.log("server is running on port",port)
})")
            console.log("connected to db")

           
    }
    
    catch(err){
        console.log(err)
    }
  

}
db()
app.post("/api/user/create",checkSchema(registerValidation),userController.create)
app.post("/api/user/login",checkSchema(loginValidation),userController.login)
app.get("/api/user",authenticate,userController.show)
app.post("/api/addProduct",authenticate,checkSchema(productValidation),productController.create)
app.get("/api/products",authenticate,productController.show)
app.delete("/api/deleteProduct/:id",authenticate,productController.delete)
app.listen(port,()=>{
    console.log("server is running on port",port)
})")
            console.log("connected to db")

           
    }
    
    catch(err){
        console.log(err)
    }
  

}
db()
app.post("/api/user/create",checkSchema(registerValidation),userController.create)
app.post("/api/user/login",checkSchema(loginValidation),userController.login)
app.get("/api/user",authenticate,userController.show)
app.post("/api/addProduct",authenticate,checkSchema(productValidation),productController.create)
app.get("/api/products",authenticate,productController.show)
app.delete("/api/deleteProduct/:id",authenticate,productController.delete)
app.listen(port,()=>{
    console.log("server is running on port",port)
})
