const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

//New var for storing data
const products =[];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product',{pageTitle:'Add Product',path:'/admin/add-product', formsCSS:true, productCSS:true, activeAddProduct:true})
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  //console.log(req.body);
  products.push({title: req.body.title });
  res.redirect('/');
});

//module.exports=router;

//expoting routes and products
exports.routes=router;
exports.products=products;
