import React from 'react'
import Link from 'next/link'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardCategories = ({categorie}) => {    
  return (
    <Link key={categorie.id} href="/categorie/[id]" as={`/categorie/${categorie.id}`} passHref>
      <Card key={categorie.id}>      
        <Image src={categorie.icons[0].url} wrapped ui={false} size='medium' rounded />
        <Card.Content>
          <Card.Header>{categorie.name}</Card.Header>
        </Card.Content>
      </Card>
    </Link>
  )
}

export default CardCategories