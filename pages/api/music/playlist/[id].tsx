import { NextApiRequest, NextApiResponse } from 'next'
import { getPlaylist } from '@config/spotify'

import enablePublicAccess from '@cors'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const id: String = req.query.id as String

    const response = await getPlaylist(id)    
    const playlists = await response.json();    

    return res.status(200).json({ playlists })          
}

