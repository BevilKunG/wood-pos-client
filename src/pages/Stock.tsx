import React, { FC } from 'react'
import CoverSvg from '../assets/cover_image.svg'
import styled from 'styled-components'

const Container = styled.div`
  flex: 3;
  height: 100%;
`

const SideContainer = styled.div`
  flex: 1;
  height: 100%;
`

const SideDetail: FC = () => {
  console.log(CoverSvg)
  return (
    <SideContainer className="p-2">
      <div className="bg-white h-full rounded">
        <figure className="bg-gray-400 rounded-t">
          <img src={CoverSvg} className="object-cover w-full h-48" />
        </figure>
      </div>
    </SideContainer>
  )
}

const Stock: FC = () => {
  return (
    <div className="w-full h-full flex flex-row">
      <Container></Container>
      <SideDetail />
    </div>
  )
}

export default Stock