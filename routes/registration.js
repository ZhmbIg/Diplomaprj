import {Router} from 'express'
import { getRegistartion, postRegistration } from '../controllers/registration.js'
const router = Router()

router.get('/',getRegistartion)
router.post('/', postRegistration)

export default router