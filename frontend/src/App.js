import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'
import './App.css'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Header />
        <Route path='/register' component={RegisterScreen} exact />
        <Route path='/login' component={LoginScreen} exact />
        <Route path='/' component={HomeScreen} exact />
      </Router>
    </React.Fragment>
  )
}

export default App
