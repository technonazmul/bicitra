import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import signInAndSignUPPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Switch,Route } from 'react-router-dom';
import {auth} from './firebase/firebase.utils';

import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentuser:null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      user => { this.setState({currentuser: user}); console.log(user) }
    )
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentuser={this.state.currentuser} />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={signInAndSignUPPage} />
        
        </Switch>
      </div>
    );
  }
  
}

export default App;
