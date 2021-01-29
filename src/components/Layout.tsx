import React, {FC} from 'react'
import {Menu} from './'

const Layout: FC = ({children}) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  )
}

export default Layout