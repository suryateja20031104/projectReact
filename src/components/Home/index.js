import {Component} from 'react'
import Header from '../Header'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

class Home extends Component {
  state = {
    inputtext: '',
    selectext: 'passport',
    searchcomp: 0,
    searchproc: 0,
  }

  onChangeInput = event => {
    this.setState({inputtext: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({selectext: event.target.value})
  }

  onChangeButton = async () => {
    const {inputtext, selectext} = this.state
    const url =
      'https://projectdatabase1.onrender.com/searchquery/?inputtext=' +
      `${inputtext}` +
      '&selectext=' +
      `${selectext}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    await response.text()
    const url1 = 'https://projectdatabase1.onrender.com/getCountSearch'
    const response1 = await fetch(url1, options)
    const data2 = await response1.json()
    this.setState({
      searchproc: data2.searchResponse,
      searchcomp: data2.searchComplete,
    })
  }

  render() {
    const {searchcomp, searchproc} = this.state
    return (
      <div>
        <Header />
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-heading">Welcome Back !</h1>
            <p className="home-description mt-5">
              Find KYC records across the cross-institutional network.
            </p>
            <br />
            <div className="d-flex flex-row">
              <input
                type="text"
                className="mt-5 text-box"
                placeholder="what are you looking for?"
                onChange={this.onChangeInput}
              />
              <select className="mt-5 sel-box" onChange={this.onChangeSelect}>
                <option value="Passport">Passport</option>
                <option value="Driving License">Driving License</option>
                <option value="National ID">National ID</option>
                <option value="Birth Certificate">Birth Certificate</option>
                <option value="National Health ID">National Health ID</option>
                <option value="Others">Others</option>
              </select>
              <button
                type="button"
                className="tog-btn mt-5"
                onClick={this.onChangeButton}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="contain ml-5">
          <div className="contain1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              className="bi bi-hourglass-split p-2 check"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
            </svg>
            <div className="contain2">
              <div>
                <h1>{searchproc}</h1>
                <p className="context">search in progress</p>
              </div>
            </div>
          </div>
          <div className="contain1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              fill="currentColor"
              className="bi bi-check-square p-2 check"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
            </svg>
            <div className="contain2">
              <div>
                <h1>{searchcomp}</h1>
                <p className="context">search completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
