import React,{useState} from 'react'
import './css/App.css';
import { Switch ,Route} from 'react-router-dom'
import Main from './pages/index'
import Login from './pages/login'
import Signup from './pages/Signup'
import Chooseplan from './pages/chooseplan'

function App() {
  
  return (
    <div className="App">
      
      <Switch>
        <Route  exact path="/" component={Main} />
        <Route  exact path="/login" component={Login} />
        <Route  exact path="/signup" component={Signup}  />
        <Route  exact path="/signup/chooseplan" component={Chooseplan}  />
        
      
      </Switch>

     </div>
  );
}

export default App;
