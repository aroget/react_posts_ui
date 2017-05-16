import React from 'react';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import Login from './containers/Login';
import Posts from './containers/Posts';
import Media from './containers/Media';
import Profile from './containers/Profile';

import TopBar from './components/TopBar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
              <Route exact path="/login" component={Login}/>
              <Route exact path="/media" component={Media}/>
              <Route exact path="/profile" component={Profile}/>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
