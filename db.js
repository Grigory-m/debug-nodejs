const Sequelize = require('sequelize');
                                //database username   password
const sequelize = new Sequelize('gamedb', 'Grigory-m', 'debug', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)
