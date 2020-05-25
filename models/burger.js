// Need to require orm.js:
const orm = require('../config/orm.js')

// Create code that will call the ORM functions using burger specific input for the ORM...

const burger = {
    // simple, just reading all rows from the burgers table
    readAll: (cb) => {
        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },
    create: (name, cb) => {
        orm.insertOne("burgers", "burger_name", name, function (res) {
            cb(res)
        })
    },
    devour: (id, cb) => {
        orm.updateOne("burgers", "devoured", true, id, function (res) {
            cb(res)
        })
    },
    delete: (id, cb) => {
        orm.deleteOne("burgers", id, function (res) {
            cb(res)
        })
    },
}

// Export this file
module.exports = burger;