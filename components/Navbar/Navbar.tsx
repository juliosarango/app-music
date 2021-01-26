import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'
import HomeIcon from '@components/Icon/HomeIcon'

const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Link href="/" passHref>
          <Menu.Item 
            active={pathname === '/'}
            title="Inicio | Todos"
          >        
            <HomeIcon />
            Inicio    
          </Menu.Item>
        </Link>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
        }
      `}</style>

    </Menu>
  )
}

export default Navbar