import querystring from 'querystring'
import { USER_URL, CATEGORIES_URL, PLAYLIST_URL } from '@config/Constants'

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

const getAccessToken = async() => {
  const response = await fetch(USER_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response.json()
}

export const getAllCategories = async() => {
  const { access_token } = await getAccessToken()  

  return fetch(CATEGORIES_URL, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getCategorie = async(categorie:String) => {
  const { access_token } = await getAccessToken()

  return fetch(`${CATEGORIES_URL}/${categorie}/playlists`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getPlaylist = async(id:String) => {
  const { access_token } = await getAccessToken()

  return fetch(`${PLAYLIST_URL}/${id}/tracks`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getTracks = async(id:String) => {
  const { access_token } = await getAccessToken()

  return fetch(`${PLAYLIST_URL}/${id}/tracks`, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}