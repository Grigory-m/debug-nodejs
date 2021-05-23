import Sequelize from 'sequelize';
                                //database username   password
const sequelize = new Sequelize('gamedb', 'Grigory-m', 'debug', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    })
    
export default sequelize;
