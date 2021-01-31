import React, { FC } from 'react'
import { Menu } from './'
import styled from 'styled-components'

const Container = styled.div`
  background: #deebf7;
`

const Layout: FC = ({ children }) => {
  return (
    <Container className="w-screen h-screen flex flex-row">
      <Menu />
      <div className="w-full">{children}</div>
    </Container>
  )
}

export default Layout
