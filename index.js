import { readFileSync, writeFileSync } from "fs"
import express, { json } from 'express'
import db, { Student } from "./models/index.js"

//import userRouter from './routes/user.routes'

const app = express()
const port = 3000
app.use(json())
app.set('views', './views');
app.set('view engine', 'ejs')
//app.use('/routes', userRouter)

let users = []

function readJson() {
    const fc = readFileSync("models/users.json", "utf8")
    users = JSON.parse(fc)
}

function writeJson() {
    const fc = JSON.stringify(users)
    writeFileSync("models/users.json", fc)
}
app.get('/registration', (req, res) => {
    res.render('registration')
})

app.get('/main', (req, res) => {
    res.render('main')
})

app.get('/user', (req, res) => {
    res.render('user')
})

app.post('/registration', (req, res) => {
    const { username, password, confirmPass } = req.body
    console.log(req.body)
    console.log(username, password, confirmPass)
    console.log(users)
    if (username === '' || password === '' || confirmPass === '') {
        console.log("empty fields")
        return
    }
    readJson()
    const result = users.findIndex((item) => item.username === username)
    if (result !== -1) {
        console.log("user already exists")
        return
    }
    if (password !== confirmPass) {
        console.log('Passes are not eaqual')
        return
    }
    users.push({
        username: username,
        password: password,
        block: false,
        restrict: false,
    })
    console.log(users)
    writeJson()
    console.log("registration successful")
    res.redirect('/main')
})


app.post('/main', (req, res) => {
    const { username, password } = req.body
    readJson()
    const result = users.find((item) => item.username === username)
    console.log(username, password)
    console.log('This is result', result)
    if (result === undefined) {
        console.log("This user is not found");
        return
    }
    if (result.password !== password) {
        console.log('Wrong pass')
        return
    }
    console.log("You have entered")
    res.redirect('/user')
})

try {
    await db.init()
    app.listen(port, async () => {
        console.log(`Example app listening on http://localhost:${port}/main`)
    })
} catch (err) {
    console.log(err)
}
