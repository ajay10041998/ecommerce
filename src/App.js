import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import HomePage from './components/HomePage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Signup}/>
        < Route exact  path='/login' component={Signin}/>
        <Route exact path='/home' component={HomePage}/>
      </Switch>     
    </BrowserRouter>
    
  );
}

export default App;
