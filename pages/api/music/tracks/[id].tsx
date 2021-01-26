import { NextApiRequest, NextApiResponse } from 'next'
import { getTracks } from '@config/spotify'

import enablePublicAccess from '@cors'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const id: String = req.query.id as String

    const response = await getTracks(id)        
    const tracks  = await response.json();        
    return res.status(200).json({ tracks })          
}

