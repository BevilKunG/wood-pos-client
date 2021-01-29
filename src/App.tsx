import React, {FC} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Switch, Route} from 'react-router-dom'
import {Layout} from './components'

const App: FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route path="/" component={() => <h1>Hello World</h1>} exact />
        </Switch>
      </Layout>
    </HashRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
