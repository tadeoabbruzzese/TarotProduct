const express = require('express');
const path = require('path');


const renderHome = (req,res) =>{
    res.render('../views/index.ejs')
}


module.exports = {renderHome}