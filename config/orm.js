const connection = require('./connection')

// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

const orm = {

    selectAll: (tableInput, cb) => {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (table, colName, val, cb) => {
        var queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [table, colName, val], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // UPDATE burgers SET devoured = ? WHERE id = ?;
    updateOne: (table, colName, boolean, id, cb) => {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";
        connection.query(queryString, [table, colName, boolean, id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    deleteOne: (table, id, cb) => {
        var queryString = "DELETE FROM ?? WHERE id = ?;";
        connection.query(queryString, [table, id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

//    * Export the ORM object in `module.exports`.
module.exports = orm;