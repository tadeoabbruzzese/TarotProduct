// ******** REQUIRE'S ******** //

const express = require('express');
const path = require('path');


// ******** EXPRESS () - (dont touch) ******** //
const app = express();




// ******** Middlewares - (dont touch) ******** //
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded()); //por que no se usa {extended: false} ??

// ******** Template Engine - (dont touch) ******** //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views')); //define la ubicacion

// ******** WRITE YOUR CODE FROM HERE ******** //
// ******** Route System require and use () ******** //
const mainRouters = require('./routers/mainRouters');

app.use('/', mainRouters);



// VISTA ERROR 404
app.use((req, res, next) => {
    res.status(404).render('not-found')
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`servidor ${port} funcionando`)
})