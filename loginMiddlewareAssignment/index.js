const express = require('express');
const fs = require('fs');
const PORT = 4001;

const app = express();


const products = [
    {
        id:1,
        name:'Ipone 13',
    },
    {
        id:2,
        name:'Samsung',
    },
]
//Logger function
function requestLogger(req, res, next) {
    const {method, url, ip, header} = req;
    const timestamp = new Date();
    fs.appendFile('logger.log', `\n  IP: ${ip}, URL: ${url}, Method: ${method}, timestamp: ${timestamp}`, (err)=>{
        if (err) {
            console.error('Error writing to logger.log:', err);
        } else {
            console.log('Data logged successfully.');
        }
    });
    console.log('logger.log', `\n  IP: ${ip}, URL: ${url}, Method: ${method}, timestamp: ${timestamp}`)

    next();
}

app.use(requestLogger)

//routes
app.get('/', (req, res) => {
    res.json({
        status: true,
    })
})

app.get('/products', (req, res)=>{
    res.json({
        status:true,
        products: products,
    })
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})