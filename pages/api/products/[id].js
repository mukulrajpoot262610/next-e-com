import nc from 'next-connect'
import connectDB from '../../../config/db';

import { GetProduct } from '../../../controllers/productController'

const handler = nc();

connectDB();

handler.get(GetProduct)

export default handler