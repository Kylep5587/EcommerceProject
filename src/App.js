import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/component.homepage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Dashboard from './dashboard/Dashboard';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null; // Used to close the connection to onAuthStateChanged

  /* Makes use of firebase method onAuthStateChanged 
  Firebase triggers this method anytime it sees a change in login status
  Communication of the onAuthStateChanged is always open, so no need to manually
  call it each time you want to check the state. This also means we need to close communication before App closes
  *****************************************************/
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); // checks if there is an entry for this user. If not, creates it

        userRef.onSnapshot(snapShot => { // Gets data related to the user
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else {
        this.setState({currentUser: userAuth}); // sets the current user to null if login attempt fails
      }
    });
  }


  /* Closes monitoring of firebase authentication
  ******************************************************/
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path ='/signin' component={SignInAndSignUpPage} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </div>  
    ); 
  }                      
}

export default App;
