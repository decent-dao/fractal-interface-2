import { Outlet } from 'react-router-dom'
import { Container, Box, Divider } from '@chakra-ui/react'
import Header from './Header'

function Layout () {
  return (
    <Container my={2}>
      <Box mb={2}>
        <Header />
      </Box>
      <Divider mb={2} />
      <Outlet />
    </Container>
  )
}

export default Layout
