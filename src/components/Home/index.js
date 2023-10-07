import Header from '../Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Welcome Back !</h1>
        <p className="home-description mt-5">
          Find KYC records across the cross-institutional network.
        </p>
        <div className="d-flex flex-row">
          <input type="text" className="mt-5 text-box" />
          <select className="mt-5 sel-box">
            <option value="Passport">Passport</option>
            <option value="Driving License">Driving License</option>
            <option value="National ID">National ID</option>
            <option value="Birth Certificate">Birth Certificate</option>
            <option value="National Health ID">National Health ID</option>
            <option value="Others">Others</option>
          </select>
          <button type="button" className="tog-btn mt-5">
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
  </>
)

export default Home
