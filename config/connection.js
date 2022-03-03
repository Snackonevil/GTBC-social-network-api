const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/socialapi",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log(
            `Connected to Mongo on host:${mongoose.connection.host}, port: ${mongoose.connection.port}\nUsing '${mongoose.connection.name}' database`
                .cyan.underline
        );
    }
);

module.exports = mongoose.connection;
