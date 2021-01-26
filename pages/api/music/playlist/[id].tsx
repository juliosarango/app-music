import { IncomingMessage, ServerResponse } from 'http'
import { getPlayList } from '@config/spotify'

import enablePublicAccess from '@cors'

export default async (req, res) => {

    const id = req.query.id

    const response = await getPlayList(id)    
    const playlists = await response.json();    

    return res.status(200).json({ playlists })          
}

