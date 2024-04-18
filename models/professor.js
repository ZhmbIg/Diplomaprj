import { DataTypes } from "sequelize"
import { sequelize } from "./init.js"

export const Professor = sequelize.define(
    'professor',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        surname: {
            type: DataTypes.STRING
        },
    },
    {
        underscored: true
    }
)