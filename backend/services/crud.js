const express = require('express');
const dbConfig = require("../config/database");
const router = express.Router();
const db = new dbConfig("CRUD")

db.connect().then(() => {
    router.get('/', (req, res) => {
        res.status(200).send("asd");
    });
    
    router.post('/create', (req, res) => {
        
    });
    
    router.patch('/update', (req, res) => {
        
    });
    
    router.delete('/delete', (req, res) => {
        
    });
})
module.exports = router;