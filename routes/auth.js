import {Router} from 'express'
import { getMain, postMain } from '../controllers/auth.js'
const router = Router()

router.get('/', getMain)
router.post('/', postMain)

export default router