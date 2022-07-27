const express = require('express');
const app = express();
const cors = require('cors');
const database = require('./config/db')


app.use(cors())
app.use(express.json())

// ======================================

// ======================================

app.get('/products', (req, res) => {
    database.query('SELECT * FROM product WHERE product_id', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// ======================================

app.get('/products/filterBy=ASCPrice', (req, res) => {
    database.query('SELECT * FROM product ORDER BY price ASC', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/products/filterBy=DESCPrice', (req, res) => {
    database.query('SELECT * FROM product ORDER BY price DESC', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// ======================================

app.get('/products/filterBy=olipop', (req, res) => {
    database.query("SELECT * FROM product WHERE brand='olipop' ", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/products/filterBy=taika', (req, res) => {
    database.query("SELECT * FROM product WHERE brand='taika' ", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/products/filterBy=calpico', (req, res) => {
    database.query(" SELECT * FROM product WHERE brand='calpico' ", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/products/filterBy=laCroix', (req, res) => {
    database.query(" SELECT * FROM product WHERE brand='La Croix' ", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// ======================================

app.get('/products/filterBy=milky', (req, res) => {
    database.query(" SELECT * FROM product WHERE category='Milky' ", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/products/filterBy=fruit', (req, res) => {
    database.query(" SELECT * FROM product WHERE category='Fruits' ", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/products/filterBy=coffee', (req, res) => {
    database.query(" SELECT * FROM product WHERE category='Coffee' ", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


// ======================================

app.listen(5500, () => {
    console.log('your server is running on port 5500')
})