import { Student } from "../models/index.js"

export function getMain(req, res) {
    res.render('auth')
}

export async function postMain(req, res) {
    const { username, password } = req.body
    const id = parseInt(username)
    if (isNaN(id)) {
        console.log('Все плохо')
        return
    }
    const student = await Student.findByPk(id)
    console.log(username, password)
    console.log('This is result', student)
    if (student === null) {
        console.log("This user is not found");
        return
    }
    if (student.password !== password) {
        console.log('Wrong pass')
        return
    }
    console.log("You have entered")
    res.redirect('/user')
}


