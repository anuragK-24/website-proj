import "./pa.css"
import First from "./../../itemImg/first.png"
import Sec from "./../../itemImg/sec.png"
import Ov from "./../../itemImg/overview1.png"
// import Ove from "./../../itemImg/overview2.png"
import Pt from "./../../itemImg/purple.png"
import Gt from "./../../itemImg/green.png"


export default function P1() {
  return (<>
  <center>
    <div className="slogan">
    
      <div className="slogan-header">
      <h1>Save more get your finance right</h1>
      <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
      </div>
      <button className='req-demo'>Request a demo</button>
    </div>
  </center>
  <img className="first-item" src={First} alt="" />
  <center>
    <p className="trusted">Trusted and loved by the world’s best teams</p>
    <img  className="sec"  src={Sec} alt="" />
    <div className="overview">
        <div className="overview-h">
          <h1>A nice and simple financial overview</h1>
        </div>
    
        <div className="overview-p">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div className="overview-items">
          <div className="overview-box1">
            <h1>120+</h1>
            <p className="pp">Useful widgets </p>
          </div>
          <div className="overview-box2">
            <h1>20+</h1>
            <p className="pp">Integrations</p>
          </div>
          <div className="overview-box3">
            <h1>65+</h1>
            <p className="pp">Features out</p>
          </div>
        </div>
        <img src={Ov} style={{marginTop:"-600px", marginLeft:"-740px",height:"100px", width:"70px"}} alt="" />
        {/* <img src={Ove} style={{marginTop:"-600px", marginLeft:"740px",height:"100px", width:"70px"}} alt="" /> */}
    </div>
    <div className="ptick-wrapper">
        <div className="ptick-box">
          <img style={{marginRight:"15px"}} src={Pt} alt="" />
          <span>Public and private chat</span>
        </div>
        <div className="ptick-box">
          <img style={{marginRight:"15px"}} src={Pt} alt="" />
          <span>Event scheduler</span>
        </div>
        <div className="ptick-box">
          <img style={{marginRight:"15px"}} src={Pt} alt="" />
          <span>No prior credit card required</span>
        </div>
        <div className="ptick-box">
          <img style={{marginRight:"15px"}} src={Pt} alt="" />
          <span>Group video calls</span>
        </div>
    </div>
    <div className="gtick-wrapper">
        <div className="gtick-box">
          <img style={{marginRight:"15px"}} src={Gt} alt="" />
          <span>Event scheduler</span>
        </div>
        <div className="gtick-box">
          <img style={{marginRight:"15px"}} src={Gt} alt="" />
          <span>Expert on demad call</span>
        </div>
        <div className="gtick-box">
          <img style={{marginRight:"15px"}} src={Gt} alt="" />
          <span> Email support for 24/7</span>
        </div>
        <div className="gtick-box">
          <img style={{marginRight:"15px"}} src={Gt} alt="" />
          <span>Group video calls</span>
        </div>
        <div className="gtick-box">
          <img style={{marginRight:"15px"}} src={Gt} alt="" />
          <span>Activity Stream</span>
        </div>
    </div>

  </center>
  </>)
}
