import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalculator,
  faCube,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'

type ItemContainerProps = {
  active?: boolean
}

const Container = styled.div`
  background: #181f4e;
`

const ItemContainer = styled.div<ItemContainerProps>`
  ${({ active }) =>
    active
      ? `
    background: white;
    & {
      * {
        color: #181f4e;
      }
    }
  `
      : `
    color: white;
    &:hover {
      background: rgba(255, 255, 255, 0.9);
      * {
        color: #181f4e;
      }
    }
  `}
`

const Menu: FC = () => {
  const location = useLocation()
  const items = [
    {
      text: 'บิล',
      pathname: '/bill',
      icon: faCalculator,
    },
    {
      text: 'คลังสินค้า',
      pathname: '/stock',
      icon: faCube,
    },
  ]

  return (
    <Container className="w-56 h-full relative">
      <div className="w-full border-b-2 border-white pl-5 py-4">
        <h1 className="text-white font-bold text-2xl">Wood POS</h1>
      </div>

      {items.map(({ text, pathname, icon }) => (
        <ItemContainer
          key={pathname}
          className="w-full border-b-2 border-white"
          active={location.pathname === pathname}
        >
          <Link to={pathname}>
            <div className="flex flex-row items-center pl-5 py-4">
              <FontAwesomeIcon icon={icon} size="lg" />
              <h1 className="text-lg font-medium ml-4">{text}</h1>
            </div>
          </Link>
        </ItemContainer>
      ))}

      <div className="absolute bottom-0 w-full border-t-2 border-white pl-5 py-2">
        <div className="flex flex-row items-center">
          <FontAwesomeIcon icon={faSignOutAlt} color="white" size="sm" />
          <h1 className="text-white text-md font-medium ml-4">ออกจากระบบ</h1>
        </div>
      </div>
    </Container>
  )
}

export default Menu
