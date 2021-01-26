import React from 'react'
import Link from 'next/link'
import { Card, Image } from 'semantic-ui-react'

const Categorie = ( { item } = props  ) => {  
  return (    
    <Link key={item.id} href="/tracks/[id]" as={`/tracks/${item.id}`} passHref>
    <Card>                
      <Image src={item.images[0].url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          {item.name}
        </Card.Header>
        <Card.Description>
          {item.description}
        </Card.Description>
      </Card.Content>
    </Card>  
    </Link>        
  )
}

export default Categorie