import { useEffect } from 'react'
import { Router, Switch, Route } from 'react-router'
import history from '../../services/history'
import { HOME, LOGIN } from '../../util/routes'
import Login from '../Login'
import Home from '../Home'
import Header from '../Header'
import Footer from '../Footer'
const App = ({ appMounted, appWillUnmount, value, changeValue, t }) => {
  useEffect(() => {
    appMounted()
    return () => {
      appWillUnmount()
    }
  }, [appMounted, appWillUnmount])

  return (
    <div className='App'>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={LOGIN} component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
