import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    username1: '',
    password1: '',
    confpassword: '',
    showSubmitError: false,
    errorMsg: '',
    isregister: true,
    showSubmitRegister: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeUsername1 = event => {
    this.setState({username1: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangePassword1 = event => {
    this.setState({password1: event.target.value})
  }

  onChangeConfPassword = event => {
    this.setState({confpassword: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitSuccessRegister = () => {
    this.setState({showSubmitRegister: true})
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onRegister = () => {
    this.setState({isregister: false})
  }

  onSign = () => {
    this.setState({isregister: true})
  }

  submitFormRegister = async event => {
    event.preventDefault()
    const {username1, password1} = this.state
    const userDetails = {username1, password1}
    const url = 'https://projectdatabase1.onrender.com/users'
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccessRegister()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    // const userDetails = {username, password}
    const url =
      'https://projectdatabase1.onrender.com/userConformation/?username=' +
      `${username}` +
      '&password=' +
      `${password}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (data === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderPasswordField1 = () => {
    const {password1} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password1">
          PASSWORD
        </label>
        <input
          type="password"
          id="password1"
          className="password-input-field"
          value={password1}
          onChange={this.onChangePassword1}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderUsernameField1 = () => {
    const {username1} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username1">
          USERNAME
        </label>
        <input
          type="text"
          id="username1"
          className="username-input-field"
          value={username1}
          onChange={this.onChangeUsername1}
          placeholder="Username"
        />
      </>
    )
  }

  renderConformPasswordField = () => {
    const {confpassword} = this.state

    return (
      <>
        <label className="input-label" htmlFor="confpassword">
          CONFORM PASSWORD
        </label>
        <input
          type="password"
          id="confpassword"
          className="password-input-field"
          value={confpassword}
          onChange={this.onChangeConfPassword}
          placeholder="Conform Password"
        />
      </>
    )
  }

  render() {
    const {
      showSubmitError,
      errorMsg,
      isregister,
      showSubmitRegister,
    } = this.state
    return (
      <div className="login-form-container">
        {isregister && (
          <form className="form-container" onSubmit={this.submitForm}>
            {/* <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="login-website-logo-desktop-img"
              alt="website logo"
            /> */}
            <h1 className="sign-heading">SIGN IN PAGE</h1>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
            <br />
            <button
              type="button"
              className="reg-button"
              onClick={this.onRegister}
            >
              Register
            </button>
            {showSubmitError && (
              <p className="error-message">*{errorMsg}invalid credentials</p>
            )}
          </form>
        )}
        {!isregister && (
          <form className="form-container" onSubmit={this.submitFormRegister}>
            <h1 className="sign-heading">REGISTER FORM</h1>
            <div className="input-container">{this.renderUsernameField1()}</div>
            <div className="input-container">{this.renderPasswordField1()}</div>
            <div className="input-container">
              {this.renderConformPasswordField()}
            </div>
            <button type="submit" className="login-button">
              REGISTER
            </button>
            <br />
            {showSubmitRegister && <p>Successfully Register</p>}
            <br />
            <button type="button" className="reg-button" onClick={this.onSign}>
              signIn
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default LoginForm
