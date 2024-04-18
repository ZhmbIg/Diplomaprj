import { DataTypes } from "sequelize"
import { sequelize } from "./init.js"

export const Student = sequelize.define(
    'student',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        surname: {
            type: DataTypes.STRING
        },
        group_id: {
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING
        },
        faculty_id: {
            type: DataTypes.INTEGER
        },
    },
    {
        underscored: true
    }
)

export const StudentDescipline = sequelize.define(
    'student_descipline',
    {
        student_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        descpline_id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        }
    },
    {
        underscored: true
    }

)