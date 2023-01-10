import "./footer.css"
import Pepper from "./../../logo/pepper1.png"
import LinkedIn from "./../../logo/linkedin.png"
import Twitter from "./../../logo/twitter.png"
import Email from "./../../logo/email.png"

export default function Footer() {
  return (<>
  <div className="footerT">
        <div className="wrapper-footer">
            <div className="footer-box1">
                <a href=""><img src={Pepper} alt="" /></a>
                <p>Pepper is one of the most reliable </p>
                <p>delievery patlform magement service to </p>
                <p> automate your network.</p>
                <button className='get-started'>Get Started</button><br /><br />
                <a href=""><img src={LinkedIn} alt="" /></a> 
                <a href=""><img src={Twitter} alt="" /></a>
                <a href=""><img src={Email} alt="" /></a>
            </div>
            <div className="footer-box2">
                <div className="box2-ele 1">
                    <h3 >Pages main</h3>
                    <a href="#">Home</a> <br />
                    <a href="#">Blog</a> <br />
                    <a href="#">Blog Template</a> <br />
                    <a href="#">Pricing</a> <br />
                    <a href="#">Pricing Ecommerce</a> <br />
                    <a href="#">About</a> <br />
                    <a href="#">Careers</a> <br /> 
                    <a href="#">Careers Template</a> <br />
                    <a href="#">Contact</a> <br />

                </div>
                <div className="box2-ele 2">
                    <h3>Template pages</h3>
                    <a href="#">Style Guide</a> <br />
                    <a href="#">License</a> <br />
                    <a href="#">Changelog</a> <br />
                </div>
            </div>
        
        </div>
    </div>
</>)
}
