import React, { Component } from 'react'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppNavbar from './components/AppNavbar'
import CharacterList from './components/CharacterList'
import CharacterDetails from './components/CharacterDetails'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <AppNavbar />
            <Container>
              <Switch>
                <Route path={`/`} exact component={CharacterList} />
                <Route path={`/:charName`} component={CharacterDetails} />
              </Switch>
            </Container>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
