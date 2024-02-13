import { Container } from '@chakra-ui/react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <Container my={2}>
      <Header />
      <Outlet />
    </Container>
  )
}

export default Layout
