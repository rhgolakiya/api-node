const mongoose = require('mongoose');

const db = process.env.MONGO_URL;

mongoose.connect(db) .then(() => {
    console.log("Database Connected");
})
    .catch((err) => {
        console.log(err);
    });