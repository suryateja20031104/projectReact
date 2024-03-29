import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

class ProcessPage extends Component {
  state = {
    referenceId: 0,
    stage1: false,
    stage2: false,
    stage3: false,
    stage4: false,
    stage5: false,
  }

  componentDidMount() {
    this.onReference()
  }

  sleep = ms => new Promise(r => setTimeout(r, ms))

  onChangeProcess = async () => {
    const {history} = this.props
    history.push('/userPage')
  }

  onReference = async () => {
    const options = {
      method: 'GET',
    }
    const url1 = 'http://13.201.47.144:3000/getCountSearch'
    const response1 = await fetch(url1, options)
    const data2 = await response1.json()
    this.setState({
      referenceId: data2.searchResponse,
    })

    await this.sleep(1000 * 5)

    const url2 = 'http://13.201.47.144:3000/stage1'
    const response2 = await fetch(url2, options)
    const data3 = await response2.text()
    this.setState({
      stage1: data3,
    })

    await this.sleep(1000 * 3)

    this.setState({
      stage2: data3,
    })

    await this.sleep(1000 * 3)

    this.setState({
      stage3: data3,
    })

    await this.sleep(1000 * 3)

    this.setState({
      stage4: data3,
    })

    await this.sleep(1000 * 3)

    this.setState({
      stage5: data3,
    })
  }

  render() {
    const {referenceId, stage1, stage2, stage3, stage4, stage5} = this.state
    return (
      <div>
        <Header />
        <p className="head_1 text-center mt-5">Searching...</p>
        <p className="text-ref text-center">
          Reference:
          {referenceId}
        </p>
        <div className="main">
          <p className="head_2">
            You can close the window.We will notify when the search is finished
          </p>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="50"
                fill="currentColor"
                className="icon bi bi-router"
                viewBox="0 0 16 16"
              >
                <path d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0 .5.5 0 1 0 .707-.707 4.5 4.5 0 0 0-6.364 0 .5.5 0 0 0 .707.707Z" />
                <path d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0 .5.5 0 0 0 .708-.708 2.5 2.5 0 0 0-3.536 0 .5.5 0 0 0 .707.707ZM2.5 11a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm4.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Z" />
                <path d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86L2.974 2.342ZM14.5 9a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h13Z" />
                <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
              </svg>
              {!stage1 && (
                <div className="progress one">
                  <p>1</p>
                </div>
              )}

              {stage1 && (
                <div className="progress1 text-center mt-3 mb-3">
                  <p>✔</p>
                </div>
              )}
              <Link to="/networkpage">
                <p className="text">Network Broadcasting</p>
              </Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="50"
                fill="currentColor"
                className="icon bi bi-chat-left-dots"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              {!stage2 && (
                <div className="progress one">
                  <p>2</p>
                </div>
              )}

              {stage2 && (
                <div className="progress1 text-center mt-3 mb-3">
                  <p>✔</p>
                </div>
              )}
              <Link to="/privatePage">
                <p className="text">Private Chat</p>
              </Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="50"
                fill="currentColor"
                className="icon bi bi-clipboard2-data"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
                <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z" />
              </svg>
              {!stage3 && (
                <div className="progress one">
                  <p>3</p>
                </div>
              )}

              {stage3 && (
                <div className="progress1 text-center mt-3 mb-3">
                  <p>✔</p>
                </div>
              )}
              <Link to="/kycPage">
                <p className="text">Generate KYC Score</p>
              </Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="50"
                fill="currentColor"
                className="icon bi bi-grid-3x3-gap"
                viewBox="0 0 16 16"
              >
                <path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" />
              </svg>
              {!stage4 && (
                <div className="progress one">
                  <p>4</p>
                </div>
              )}

              {stage4 && (
                <div className="progress1 text-center mt-3 mb-3">
                  <p>✔</p>
                </div>
              )}
              <Link to="/transactionpage">
                <p className="text">BlockChain Commit</p>
              </Link>
            </li>
            <li>
              {!stage5 && <p>.</p>}

              {stage5 && (
                <button
                  type="button"
                  className="button-final"
                  onClick={this.onChangeProcess}
                >
                  final
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ProcessPage
