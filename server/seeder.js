const products = require('./data/products.json');
const Product = require('./models/productModel');
const dotenv = require('dotenv');
const connectDatabase = require('./db');

dotenv.config({path:'.env'});

connectDatabase();

const seedProducts = async ()=>{
    try{
        await Product.deleteMany();
        console.log('Products deleted!')
        await Product.insertMany(products);
        console.log('All products added!');
    }catch(error){
        console.log(error.message);
    }
    process.exit();
}

seedProducts();