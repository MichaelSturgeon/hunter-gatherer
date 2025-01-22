import appStyles from './App.module.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom'
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import HomePage from './pages/home/HomePage';
import NotFound from './pages/help/NotFound';


function App() {
  
  return (
    <div className={appStyles.App}>
      <NavBar/>
      <Container className={appStyles.Main}>
        <Switch>
          <Route exact path='/' render={() => <HomePage/>} />        
          <Route exact path='/login' render={() => <SignInForm/>} />
          <Route exact path='/register' render={() => <SignUpForm/>} />
          <Route render={() => <NotFound/>} />
        </Switch>
      </Container>
    </div>        
  );
}

export default App;