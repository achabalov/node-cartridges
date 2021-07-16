const {Router} = require('express');
const router = Router();
const path = require('path');
const fs = require('fs')
const express = require('express'),
    app = express()

router.post('/asyn', async (req, res) => {
    console.log(req.body);
    const response = await req.body
    console.log(response);
})

router.get('/asyn', async (req, res) => {
    console.log('fetch working');
        const newDate = await JSON.parse(data)
        console.log(newDate);
        res.json(newDate)
        // console.log(newDate);
        if(err) {
            console.log('Error', err);
        } else {
        // console.log(`Данные успешно записаны ${data}`);
        }
})

module.exports = router;