import './navbar.css'
import Logo from "../../logo/pepper.png"
import Cart from "../../logo/cart.png"

export default function Navbar() {
  return (<>
  <div className="nav-wrapper">
    <div className="box1">
        <a href=""><img src={Logo} alt="" /></a>
    </div>
    <div className="box2">
        <center>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
        </center>
    </div>
    <div className="box3">
        <a href=""><img src={Cart} alt="" /> Cart</a>
        <button className='login'>Login</button>
        <button className='get-started'>Get Started</button>
    </div>
  </div>
  </>)
}
