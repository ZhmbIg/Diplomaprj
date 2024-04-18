import { DataTypes } from "sequelize"
import { sequelize } from "./init.js"

export const Faculty = sequelize.define(
    'faculty',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    },
    {
        underscored: true
    }

)
