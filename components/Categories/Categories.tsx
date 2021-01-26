import React from 'react'
import CardCategories from '@components/Card/CardCategories'

const Categories = ( {categories} ) => {       
  return (            
    categories.items.map( item => (      
      <CardCategories key={item.id} categorie={item} />
    ))    
  )
  }

export default Categories