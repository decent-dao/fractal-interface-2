import { Outlet } from 'react-router-dom'
import { Container, Divider } from '@chakra-ui/react'
import Header from './Header'

function Layout () {
  return (
    <>
      <Header />
      <Divider />
      <Container my={2}>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
