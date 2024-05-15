// console.log('hi')

const express = require('express');
const axios = require('axios');
const PORT = 8081;

//create server instance
const app = express();

//Defining a route for joke generator

app.get('/api/jokes/random', async (req, res) => {

    try{
        //to use 3rd party api
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single');
    const joke = response.data.joke;
    
    res.json({
        success:true,
        joke: joke
    })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:'Failed to fetch data'
        })
    }
    
})

//route for image generator

app.get('/api/images/random', async (req, res) => {

    try{
        const response = await axios.get('https://source.unsplash.com/random')
        const imageUrl = response.request.res.responseUrl;
        // console.log(imageUrl)
        res.json({
            success:true,
            url:imageUrl
        })
    }
    catch(err){
        console.error('Error fetching image:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch image'
        });
    }
   
})

//start the server

app.listen(PORT, ()=>{
    console.log('listening on port', PORT);
})

