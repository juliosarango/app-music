import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Track from '@components/Track/Track'
import { Container, Header } from 'semantic-ui-react'
const Tracks = () => {

  const { query } = useRouter()

  const [tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {  
    if (query.id && isLoading) {
      fetch(`/api/music/tracks/${query.id}`)
      .then(res => res.json())
      .then( response => {
        if (isLoading) {          
          setTracks(response) 
          setIsLoading(false)
        }
      })
      .catch(e => console.log(e))    
    }
  },[query.id])       

  if (isLoading) {
    return (
      <h1>Cargando...</h1>
    )
  }

  return (
    Object.entries(tracks)  && tracks.tracks.items.length > 0 &&  
    <>
      <Header> Canciones disponibles para reproducir </Header>
      <Container>
      {
        tracks.tracks.items.map ( (item) => (
          <Track key={item.track.id} item={item} />
        ))
      }
      </Container>          
    </>
  )
}

export default Tracks