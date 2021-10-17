import nc from 'next-connect'
import firebaseAuth from '../../../middlewares/firebaseAuth';
import connectDB from '../../../config/db';

import { GetProfile } from '../../../controllers/userController'

const handler = nc();

connectDB();

handler.use(firebaseAuth).get(GetProfile)

export default handler