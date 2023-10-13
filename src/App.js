import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProcessPage from './components/ProcessPage'
import NetworkPage from './components/NetworkPage'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/processPage" component={ProcessPage} />
    <Route exact path="/networkPage" component={NetworkPage} />
    <Route component={NotFound} />
  </Switch>
)

export default App
