import React from 'react'
import { Card, Image, Divider } from 'semantic-ui-react'



const Track = ( { item } = props ) => {

  return (   
  <>
      <Card className="card-track">
        { item.track.album.images && 
          <Image src={item.track.album.images[0].url} size='big' wrapped ui={false} />
        }
        <Card.Header>
          {item.track.album.name}
        </Card.Header>
        <Card.Description>
          <p>{item.track.name}</p>
          <Divider/>
          <audio controls>
            <source src={item.track.preview_url} type="audio/ogg" />          
          Your browser does not support the audio element.
          </audio>         
        </Card.Description>      
        <style jsx global>{`
          div.ui.card.card-track {
            width: 350px;
          }
          
      `}</style>
      </Card>       
      <Divider />
    </>
  )

}

export default Track