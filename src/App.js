import {Route,BrowserRouter,Switch} from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Signup}/>
        < Route exact  path='/login' component={Signin}/>
      </Switch>     
    </BrowserRouter>
    
  );
}

export default App;
