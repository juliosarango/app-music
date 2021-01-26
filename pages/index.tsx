import React, { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import Categories from '@components/Categories/Categories'

const Index = () => {

  const [ categories, setCategories ] = useState([])

  useEffect( () => {
    async function loadCategories() {
      try {
        const categories = await fetch('/api/music')
        const json = await categories.json()    
        setCategories(json.categories)    
      } catch(e) {
        console.error(e)
      }
    }    

    loadCategories()
  },[])    
  
  if (categories.items) {
    return (
      <Container>
        <Categories categories={categories} />
        <style jsx global>{`
          div.ui.container {
            display:flex !important;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap
          }
          div.ui.card {                                    
            flex-grow: 4;   
            align-self: auto;
            order:5;
            padding:10px;    
          }
      `}</style>
      </Container>      
    )
  }
    return(<h1>Cargando....</h1>)
  
}

export default Index