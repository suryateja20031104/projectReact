import {Component} from 'react'
import Header from '../Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

class KycPage extends Component {
  state = {
    dobScore: '',
    stateScore: '',
    countryScore: '',
  }

  componentDidMount() {
    this.calculateScore()
  }

  calculateScore = async () => {
    const options = {
      method: 'GET',
    }
    const url = 'https://projectdatabase1.onrender.com/kycScore'
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({
      dobScore: data.dobAvg,
      stateScore: data.stateAvg,
      countryScore: data.countryAvg,
    })
  }

  render() {
    const {dobScore, stateScore, countryScore} = this.state

    return (
      <div>
        <Header />
        <div className="mt-5">
          <div className="container shadow-lg">
            <div className="inner-container">
              <p>status:completed</p>
              <h1 className="">KYC Scorecard</h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-backspace-fill m-3"
                viewBox="0 0 16 16"
              >
                <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
              </svg>
            </div>
            <div className="b shadow-lg">
              <h1 className="heading">Overall KYC Score</h1>
              <div>
                <img
                  src="https://www.shutterstock.com/image-vector/creative-vector-illustration-rating-customer-260nw-1090624820.jpg"
                  className="d"
                  alt="imageA"
                />
              </div>
              <hr className="c" />
              <div className="e">
                <div>
                  <h1 className="heading">DOB</h1>
                  <p>{dobScore}/100</p>
                  <br />
                  <img
                    src="https://www.shutterstock.com/image-vector/creative-vector-illustration-rating-customer-260nw-1090624820.jpg"
                    className="f"
                    alt="imageA"
                  />
                </div>
                <hr className="c" />
                <div>
                  <h1 className="heading">State</h1>
                  <p>{stateScore}/100</p>
                  <br />
                  <img
                    src="https://www.shutterstock.com/image-vector/creative-vector-illustration-rating-customer-260nw-1090624820.jpg"
                    className="f"
                    alt="imageA"
                  />
                </div>
                <hr className="c" />
                <div>
                  <h1 className="heading">Country</h1>
                  <p>{countryScore}/100</p>
                  <br />
                  <img
                    src="https://www.shutterstock.com/image-vector/creative-vector-illustration-rating-customer-260nw-1090624820.jpg"
                    className="f"
                    alt="imageA"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default KycPage
