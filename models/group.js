import { DataTypes } from "sequelize"
import { sequelize } from "./init.js"

export const Group = sequelize.define(
    'group',
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