const {Router} = require('express');
const router = Router();
const path = require('path');
const fs = require('fs')
const express = require('express'),
    app = express()

router.post('/asyn', async (req, res) => {
    const response = await req.body
    console.log(response);
    // const data = await JSON.stringify(req.body);
   
})

router.get('/asyn', async (req, res) => {
    fs.readFile(path.join(__dirname, 'file.txt'), async (err, data)=> {
        const newDate = await JSON.parse(data)
        console.log(newDate);
        res.json(newDate)
        // console.log(newDate);
        if(err) {
            console.log('Error', err);
        } else {
        // console.log(`Данные успешно записаны ${data}`);
        }
    });
})

module.exports = router;