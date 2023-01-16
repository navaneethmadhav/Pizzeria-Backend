const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/food',()=>{
    console.log('Connected to MongoDB');
})

const Product=mongoose.model('Product',{
    id:Number,
    name:String,
    description:String,
    ingredients:Array,
    spicy:String,
    vegetarian:String,
    price:Number,
    image:String
})

module.exports={
    Product
}