import { Sequelize } from 'sequelize'
const sequelize = new Sequelize('postgres://postgres:123Aar57@localhost:5432/db')

async function init() {
    await sequelize.authenticate()
    return sequelize.sync({alter: true, logging:false})
}

export {
    sequelize,
    init
}
