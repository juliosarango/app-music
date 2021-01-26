import { IncomingMessage, ServerResponse } from 'http'
import { getAllCategories } from '@config/spotify'

import enablePublicAccess from '@cors'

export default async (_, res) => {

    const response = await getAllCategories()
    const { categories } = await response.json();    

    return res.status(200).json({ categories })          
}

