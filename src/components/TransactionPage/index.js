import {Component} from 'react'
import Header from '../Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

class TransactionPage extends Component {
  state = {
    transactionId: '',
    owner: '',
    blockno: '',
    timestamp: '',
  }

  componentDidMount() {
    this.onTransaction()
  }

  onTransaction = async () => {
    const options = {
      method: 'GET',
    }

    const url11 = 'https://projectdatabase1.onrender.com/blockchainpart'
    const response11 = await fetch(url11, options)
    const data11 = await response11.json()

    const url = `http://localhost:8085/api/querypropertybyid/${data11.iD}`
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    this.setState({
      transactionId: data.TransactionID,
      owner: data.Owner,
      blockno: data.ID,
      timestamp: data.Timestamp,
    })

    const {transactionId} = this.state
    const url2 =
      'https://projectdatabase1.onrender.com/storeTD?translog=' +
      `${transactionId}`
    const response1 = await fetch(url2, options)
    await response1.text()
  }

  render() {
    const {transactionId, owner, blockno, timestamp} = this.state

    return (
      <div>
        <Header />
        <div className="mt-5">
          <div className="container shadow-lg">
            <div className="inner-container">
              <p className="heading2">status:completed</p>
              <h1 className="heading1">BlockChain Transactions</h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-backspace-fill m-3 back"
                viewBox="0 0 16 16"
              >
                <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
              </svg>
            </div>
            <div className="inner">
              <div className="table-container">
                <h1 className="heading">Network Broadcast</h1>
                <div>
                  <table border="1" className="in-table">
                    <tr>
                      <th>Transaction ID</th>
                      <td>{transactionId}</td>
                    </tr>
                    <tr>
                      <th>Block No</th>
                      <td>{blockno}</td>
                    </tr>
                    <tr>
                      <th>timestamp</th>
                      <td>{timestamp}</td>
                    </tr>
                    <tr>
                      <th>Owner</th>
                      <td>{owner}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="table-container">
                <h1 className="heading">Private Chats</h1>
                <div>
                  <table border="1" className="in-table">
                    <tr>
                      <th>Transaction ID</th>
                      <td>{transactionId}</td>
                    </tr>
                    <tr>
                      <th>Block No</th>
                      <td>{blockno}</td>
                    </tr>
                    <tr>
                      <th>timestamp</th>
                      <td>{timestamp}</td>
                    </tr>
                    <tr>
                      <th>Owner</th>
                      <td>{owner}</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="table-container">
                <h1 className="heading">KYC ScoreCard</h1>
                <div>
                  <table border="1" className="in-table">
                    <tr>
                      <th>Transaction ID</th>
                      <td>{transactionId}</td>
                    </tr>
                    <tr>
                      <th>Block No</th>
                      <td>{blockno}</td>
                    </tr>
                    <tr>
                      <th>timestamp</th>
                      <td>{timestamp}</td>
                    </tr>
                    <tr>
                      <th>Owner</th>
                      <td>{owner}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TransactionPage
