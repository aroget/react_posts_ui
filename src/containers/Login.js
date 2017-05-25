import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { API } from '../config/api';
import { auth } from '../utils/auth';
import { appStorage } from '../utils/appStorage';

class Login extends Component {
  service;

  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      isRedirect: false
    }
  }

  onPassword = (_, event) => {
    this.setState({ password: event.target.value });
  }

  onUsername = (_, event) => {
    this.setState({ username: event.target.value });
  }

  handleSubmit = () => {
    let options = { headers: { 'Content-Type': 'application/json' }}

    let signin = axios.post(`${API.URL}/${API.RESOURCES.LOGIN}`, JSON.stringify(this.state), options);

    signin
      .then(res => {
        let token = res.data.token;
        appStorage.set(appStorage.keys.TOKEN, token);
        auth.login()
        this.setState({ isRedirect: true });
      })
      .catch(err => console.log(err))
  }
  render() {
    if (this.state.isRedirect) {
      return (
        <Redirect to={
          {
            pathname: '/',
          }
        }/>
      )
    }
    const styles = {
      input: {
        display: 'block',
        marginBottom: '10px'
      }
    }
    return (
      <div>
        <form>
          <TextField
            hintText="Username"
            style={styles.input}
            floatingLabelText="Username"
            onKeyUp={this.onUsername.bind(this, event)} ref="username" />

          <TextField
            ref="password"
            type="password"
            hintText="Password"
            style={styles.input}
            floatingLabelText="Password"
            onKeyUp={this.onPassword.bind(this, event)} />

          <RaisedButton label="Submit" primary={true} onTouchTap={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default Login