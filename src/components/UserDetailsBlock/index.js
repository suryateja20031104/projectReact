import {Component} from 'react'
import Header from '../Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

class UserBlock extends Component {
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

    const url13 = 'https://projectdatabase1.onrender.com/blockchainpart'
    const response11 = await fetch(url13, options)
    const data11 = await response11.json()
    console.log(data11)

    const userDetails = {
      ID: data11.iD,
      Owner: data11.owner,
    }
    const url12 = 'http://localhost:8085/api/addproperty1/'
    const options1 = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const response1 = await fetch(url12, options1)
    const data1 = await response1.text()
    console.log(data1)

    const url11 = `http://localhost:8085/api/queryproperty1byid/${data11.iD}`
    const response12 = await fetch(url11, options)
    const data12 = await response12.json()

    this.setState({
      transactionId: data12.TransactionID,
      owner: data12.Owner,
      blockno: data12.ID,
      timestamp: data12.Timestamp,
    })
  }

  render() {
    const {transactionId, owner, blockno, timestamp} = this.state

    return (
      <div>
        <Header />
        <div className="mt-5">
          <div className="container1 shadow-lg">
            <div className="inner-container">
              <h1 className="heading1">User Info Block Details</h1>
            </div>
            <div className="inner">
              <div className="table-container1">
                <h1 className="heading">User Information</h1>
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

export default UserBlock
