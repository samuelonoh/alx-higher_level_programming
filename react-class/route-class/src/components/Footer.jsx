import "../styles/Footer.css"
import logo from '../logo.svg'

function Footer() {
  return (
    <div className="footer">
        <h1>
             <img src={logo} alt="logo"/>React
        </h1>
        <p>All rights reserved | Learnfactory React Route Class 2023</p>
    </div>
  )
}

export default Footer