import { IncomingMessage, ServerResponse } from 'http'
import { getTracks } from '@config/spotify'

import enablePublicAccess from '@cors'

export default async (req, res) => {

    const id = req.query.id

    const response = await getTracks(id)        
    const tracks  = await response.json();        
    return res.status(200).json({ tracks })          
}

