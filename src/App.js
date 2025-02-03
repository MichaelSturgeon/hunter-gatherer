// Imports
import React from 'react';
import appStyles from './App.module.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom'
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import HomePage from './pages/home/HomePage';
import NotFound from './pages/help/NotFound';
import ProductList from './pages/products/ProductList';
import ProductDetail from './pages/products/ProductDetail';
import Profile from './pages/auth/Profile';
// The main App component
function App() {  
  return (
    <div className={appStyles.App}>
      <NavBar/>
      <Container className={appStyles.Main}>
        <Switch>
          {/* Defining different routes for the app */}
          <Route exact path='/' render={() => <HomePage/>} />        
          <Route exact path='/products/boardgames' render={() => <ProductList/>} />        
          <Route exact path='/products/boardgames/:id' render={() => <ProductDetail/>} />        
          <Route exact path='/login' render={() => <SignInForm/>} />
          <Route exact path='/register' render={() => <SignUpForm/>} />
          <Route exact path='/profiles/:id' render={() => <Profile/>} />
          <Route render={() => <NotFound/>} />
        </Switch>
      </Container>
    </div>        
  );
}

export default App;