import React, {FC} from 'react'
import {Menu} from './'
import styled from 'styled-components'

const Container = styled.div`
  background: #deebf7;
`

const Layout: FC = ({children}) => {
  return (
    <Container className="flex flex-col">
      <Menu />
      {children}
    </Container>
  )
}

export default Layout