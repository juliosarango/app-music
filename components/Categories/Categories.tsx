import React from 'react'
import CardCategories from '@components/Card/CardCategories'

const Categories = ( {categories}: any ) => {       
  return (            
    categories.items.map( (item:any) => (      
      <CardCategories key={item.id} categorie={item} />
    ))    
  )
  }

export default Categories