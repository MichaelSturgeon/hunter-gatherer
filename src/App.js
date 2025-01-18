import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom'
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';

function App() {
  return (
    <div className={styles.App}>
      <NavBar/>
      <Container className={styles.Main}>
        <Switch>
          <Route exact path='/' render={() => <h1>Home Page</h1>} />        
          <Route exact path='/login' render={() => <SignInForm/>} />
          <Route exact path='/register' render={() => <SignUpForm/>} />
          <Route render={() => <h1>404 Page not found!</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;