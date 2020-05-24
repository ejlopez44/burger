// require express, define Router:

const express = require('express')
const router = express.Router();

// require burger.js:
const burger = require('../models/burger.js')

// Create a router for the app and export the router at the end of this file

router.get('/', function (req, res) {
    burger.readAll(function (data) {
        console.log(data)
        res.render("index", { burgers: data })
    })

})

// need to investigate ways to post...
router.post('/api/burgers', function (req, res) {
    console.log(req.body)
    let burgerName = req.body.burger_name
    burger.create(burgerName, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            console.log(result.insertId)
            res.status(200).end();
        }
    })
})

router.put('/api/burgers/:id', function (req, res) {
    burger.devour(req.params.id, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})

module.exports = router;