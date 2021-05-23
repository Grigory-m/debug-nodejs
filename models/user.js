import db from '../db.js';
import sequelize from 'sequelize';
const { DataTypes } = sequelize;

export default db.define('user', {
        full_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    });
