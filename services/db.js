const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/food',()=>{
    console.log('Connected to MongoDB');
})

const Product=mongoose.model('Product',{
    id:Number,
    name:String,
    description:String,
    ingredients:[],
    spicy:String,
    vegetarian:String,
    price:Number,
    image:String
})

// const Food=mongoose.model('Food',{
//     id:Number,
//     name:String,
//     categoryId:Number,
//     description:String,
//     ingredients:[],
//     spicy:String,
//     vegetarian:String,
//     price:Number,
//     image:String
// })

const User=mongoose.model('User',
{
    username:String,
    password:String,
    email:String,
    phone:Number
})

module.exports={
    Product,
    // Food,
    User
}