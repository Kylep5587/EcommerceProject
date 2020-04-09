import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/component.homepage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Dashboard from './dashboard/Dashboard';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null; // Used to close the connection to onAuthStateChanged

  /* Makes use of firebase method onAuthStateChanged 
  Firebase triggers this method anytime it sees a change in login status
  Communication of the onAuthStateChanged is always open, so no need to manually
  call it each time you want to check the state. This also means we need to close communication before App closes
  *****************************************************/
  componentDidMount() {
    const { setCurrentUser } = this.props; // destructures setCurrentUser from props so we can call "setCurrentUser" instead of "this.props.setCurrentUser"

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); // checks if there is an entry for this user. If not, creates it

        userRef.onSnapshot(snapShot => { // Gets data related to the user
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else {
        setCurrentUser(userAuth); // sets the current user to null if login attempt fails
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
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path ='/signin' render={() => 
            this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage />)} /> 
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </div>  
    ); 
  }                      
}

/* Redirects user from login page once logged in
*********************************/
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

/* Gets user login status
*********************************/
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
