import nc from 'next-connect'
import connectDB from '../../../config/db';

import { GetAllProducts } from '../../../controllers/productController'

const handler = nc();

connectDB();

handler.get(GetAllProducts)

export default handler