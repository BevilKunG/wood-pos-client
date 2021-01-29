import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  background: #181f4e;
  position: relative;
  width: 18rem;
  height: 100%;
`

const Menu: FC = () => {
  const items = [
    {
      title: 'บิล',
      to: '/bill',
    },
    {
      title: 'คลังสินค้า',
      to: '/stock',
    },
  ]

  return (
    <Container>
      <div className="w-full border-b-2 border-white pl-8 py-4">
        <h1 className="text-white font-bold text-3xl">Wood POS</h1>
      </div>

      {items.map(({ title, to }) => (
        <div className="w-full border-b-2 border-white pl-8 py-4">
          <Link to={to}>
            <h1 className="text-white text-xl">{title}</h1>
          </Link>
        </div>
      ))}

      <div className="absolute bottom-0 w-full border-t-2 border-white pl-8 py-2">
        <h1 className="text-white text-lg">ออกจากระบบ</h1>
      </div>
    </Container>
  )
}

export default Menu
