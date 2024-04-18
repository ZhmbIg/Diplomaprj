import { DataTypes } from "sequelize"
import { sequelize } from "./init.js"

export const Class = sequelize.define(
    'class',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        class_type_id: {
            type: DataTypes.INTEGER
        },
        discipline_id: {
            type: DataTypes.INTEGER
        },
        professor_id: {
            type: DataTypes.INTEGER
        }

    },
    {
        underscored: true
    }

)