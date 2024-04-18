import { sequelize } from "./init.js"
import { DataTypes } from "sequelize"

export const Mark = sequelize.define(
    'mark',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        mark: {
            type: DataTypes.INTEGER
        },
        student_id: {
            type: DataTypes.INTEGER
        },
        desciplie_id: {
            type: DataTypes.INTEGER
        },
        type_id: {
            type: DataTypes.INTEGER
        },
    },
    {
        underscored: true
    }

)