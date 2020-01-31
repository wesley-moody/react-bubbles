import React from "react";
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        console.log("login: ", res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type='text'
            name='username'
            placeholder='type login'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='password'
            placeholder='type password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button className='loginButton' type='submit'>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;



