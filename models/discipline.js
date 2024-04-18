import { DataTypes } from "sequelize"
import { sequelize } from "./init.js"

export const Discipline = sequelize.define(
    'discipline',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        professor: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
    },
    {
        underscored: true
    }

)


export const DisciplineType = sequelize.define(
    'discipline_type',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        type: {
            primaryKey: true,
            type: DataTypes.STRING
        }
    },
    {
        underscored: true
    }

);