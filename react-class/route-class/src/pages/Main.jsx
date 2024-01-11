import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div>
        <Header/>
        <div
        style={{
            height: "90vh", backgroundColor: "rgba(0,208,255)",
            color:"white",
            margin: "auto"
            }}>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Main