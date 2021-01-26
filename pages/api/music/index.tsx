import { NextApiRequest, NextApiResponse } from 'next'
import { getAllCategories } from '@config/spotify'

import enablePublicAccess from '@cors'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const response = await getAllCategories()
    const { categories } = await response.json();    

    return res.status(200).json({ categories })          
}

