import Header from './components/Header';
import SignUp from './components/register';
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Product" component={Product}/>  
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Cart" component={Cart}/>
        <Route exact path="/register" component={SignUp}/>
        <Route exact path="/SignIn" component={SignIn}/>
        <Redirect exact path="/" />
      </Switch>
    
    </div>
  );
}

export default App;
