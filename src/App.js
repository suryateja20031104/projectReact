import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProcessPage from './components/ProcessPage'
import NetworkPage from './components/NetworkPage'
import PrivateChatPage from './components/PrivateChatPage'
import KycPage from './components/KycScoreCard'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/processPage" component={ProcessPage} />
    <Route exact path="/networkPage" component={NetworkPage} />
    <Route exact path="/privatePage" component={PrivateChatPage} />
    <Route exact path="/kycPage" component={KycPage} />
    <Route component={NotFound} />
  </Switch>
)

export default App
