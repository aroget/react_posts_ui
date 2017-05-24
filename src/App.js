import React from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'

import { auth } from './utils/auth';

import Tags from './containers/Tags';
import Login from './containers/Login';
import Posts from './containers/Posts';
import Media from './containers/Media';
import Profile from './containers/Profile';
import Compose from './containers/Compose';
import Protected from './containers/Protected';
import PostsByTag from './containers/PostsByTag';
import PostDetails from './containers/PostDetails';

import TopBar from './components/TopBar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// const auth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100) // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class App extends React.Component {
  render() {
    const container = {
      padding: '15px 0',
      maxWidth: '900px',
      margin: '0 auto'
    }
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <TopBar/>
            <div style={container}>
              <Route exact path="/" component={Posts}/>
              <Route path="/tags" component={Tags}/>
              <Route path="/post/:id" component={PostDetails}/>
              <Route path="/posts/tag/:id" component={PostsByTag}/>
              <Route path="/create" component={Compose}/>
              <Route path="/login" component={Login}/>
              <Route path="/media" component={Media}/>
              <Route path="/profile" component={Profile}/>
              <PrivateRoute path="/protected" component={Protected}/>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
