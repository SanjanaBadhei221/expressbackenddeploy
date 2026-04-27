


// // const mongoose = require("mongoose")

// // const itemSchema = new mongoose.Schema({
// //     name: String,
// //     price: Number,
// //     image: String
// // })

// // const ItemModel = mongoose.model("Item", itemSchema)

// // module.exports = ItemModel






// const mongoose = require("mongoose")

// const itemSchema = new mongoose.Schema({
  
//     price: Number,
//     image: String,
//     rating: Number,
//     description: String
// })
// const userSchema=new mongoose.Schema({
//     username:String,
//     age:Number,
//     email:String,
//     password:String,
//     role:String
// })
// const ItemModel = mongoose.model("Item", itemSchema)
// const UserModel= mongoose.model("user", userSchema)
// module.exports ={ ItemModel,UserModel}


// const mongoose = require("mongoose")

// const itemSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     image: String
// })

// const ItemModel = mongoose.model("Item", itemSchema)

// module.exports = ItemModel






// const mongoose = require("mongoose")

// const itemSchema = new mongoose.Schema({
  
//     price: Number,
//     image: String,
//     rating: Number,
//     description: String
// })
// const userSchema=new mongoose.Schema({
//     username:String,
//     age:Number,
//     email:String,
//     password:String,
//     role:String
// })
// const ItemModel = mongoose.model("Item", itemSchema)
// const UserModel= mongoose.model("user", userSchema)
// module.exports ={ ItemModel,UserModel}



const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
  price: Number,
  image: String,
  rating: Number,
  description: String
})

const userSchema = new mongoose.Schema({
  username: String,
  age: Number,
  email: String,
  password: String,
  role: String
})

const ItemModel = mongoose.model("Item", itemSchema)
const UserModel = mongoose.model("User", userSchema)

// ✅ export separately
module.exports = UserModel