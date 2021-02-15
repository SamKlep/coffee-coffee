import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'
import './App.css'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import ProductScreen from './screens/ProductScreen'
import OrderScreen from './screens/OrderScreen'
import MenuScreen from './screens/MenuScreen'
import FeaturesScreen from './screens/FeaturesScreen'
import ProfileScreen from './screens/ProfileScreen'
import MyDrinksScreen from './screens/MyDrinksScreen'
import InboxScreen from './screens/InboxScreen'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Header />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/mydrinks' component={MyDrinksScreen} />
        <Route path='/inbox' component={InboxScreen} />
        <Route path='/order' component={OrderScreen} />
        <Route path='/menu' component={MenuScreen} />
        <Route path='/features' component={FeaturesScreen} />
        <Route path='/products/:id' component={ProductScreen} />
        <Route path='/' component={HomeScreen} exact />
      </Router>
    </React.Fragment>
  )
}

export default App
