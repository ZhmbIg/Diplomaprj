import { Student } from "../models/index.js"

export function getRegistartion(req, res) {
    res.render('registration')
}

export async function postRegistration(req, res) {
    const { username, password, confirmPass } = req.body
    console.log(req.body)
    console.log(username, password, confirmPass)
    if (username === '' || password === '' || confirmPass === '') {
        console.log("empty fields")
        return
    }
    if (password !== confirmPass) {
        console.log('Passes are not eaqual')
        return
    }
    const id = parseInt(username)
    if (isNaN(id)) {
        console.log('Все плохо')
        return
    }
    const student = await Student.findByPk(id)
    if (student !== null) {
        console.log("user already exists")
        return
    }
    
    await Student.create({id: username, password: password})

    console.log("registration successful")
    res.redirect('/auth')
}
