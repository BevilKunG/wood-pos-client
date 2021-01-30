import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter, Switch, Route } from 'react-router-dom'
import { Layout } from './components'
import { Bill, Stock } from './pages'

const App: FC = () => {
  return (
    <MemoryRouter initialEntries={['/bill']}>
      <Layout>
        <Switch>
          <Route path="/bill" component={Bill} />
          <Route path="/stock" component={Stock} />
        </Switch>
      </Layout>
    </MemoryRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
