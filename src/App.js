import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProcessPage from './components/ProcessPage'
import NetworkPage from './components/NetworkPage'
import PrivateChatPage from './components/PrivateChatPage'
import KycPage from './components/KycScoreCard'
import TransactionPage from './components/TransactionPage'
import UserBlock from './components/UserDetailsBlock'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/processPage" component={ProcessPage} />
    <Route exact path="/networkPage" component={NetworkPage} />
    <Route exact path="/privatePage" component={PrivateChatPage} />
    <Route exact path="/transactionpage" component={TransactionPage} />
    <Route exact path="/kycPage" component={KycPage} />
    <Route exact path="/userPage" component={UserBlock} />
    <Route component={NotFound} />
  </Switch>
)

export default App
