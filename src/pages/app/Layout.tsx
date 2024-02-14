import { Outlet } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import Header from './Header'

function Layout () {
  return (
    <Container my={2}>
      <Header />
      <Outlet />
    </Container>
  )
}

export default Layout
