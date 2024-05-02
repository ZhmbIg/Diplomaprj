import express, { json } from 'express'
import db, { Student } from "./models/index.js"
import authRouter from './routes/auth.js'
import registrationRouter from './routes/registration.js'
import userRouter from './routes/user.js'

const app = express()
const port = 3000
app.use(json())
app.set('views', './views');
app.set('view engine', 'ejs')

app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/registration', registrationRouter)



try {
    await db.init()
    app.listen(port, async () => {
        console.log(`Example app listening on http://localhost:${port}/main`)
    })
} catch (err) {
    console.log(err)
}
