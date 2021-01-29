import React, {FC} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Switch, Route} from 'react-router-dom'

const App: FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={() => <h1>Hello World</h1>} exact />
      </Switch>
    </HashRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
