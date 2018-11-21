import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:"",


    };
  }
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.username || !this.state.password)

    return

    this.props.onSubmit(this.state)


  }
  render() {
    return (
      <form onSubmit= {this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.handleInputChange}
            name="username" type="text" value= {this.state.value} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
            onChange={this.handleInputChange}
            name="password" type="password"  value= {this.state.value}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
