import React, {FC} from 'react'
import {Menu} from './'
import styled from 'styled-components'

const Container = styled.div`
  background: #deebf7;
  display: flex;
  flex-direction: flex-row;
  width: 100vw;
  height: 100vh;
`

const Layout: FC = ({children}) => {
  return (
    <Container>
      <Menu />
      {children}
    </Container>
  )
}

export default Layout