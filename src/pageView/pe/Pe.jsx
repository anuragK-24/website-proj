import "./pe.css"
import Contact from "./../../logo/contact.png"
import Chat from "./../../logo/chat.png"
import Message from "./../../logo/message.png"
import Star from "./../../itemImg/star.png"
import P2 from "./../../itemImg/plan2.png"

export default function Pe() {
  return (<>
  <div className="review-header">
    <h1>Don’t take our words for it - listen to our clients</h1>
    <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
  </div>
  <div className="wrapper-reviews">
    <div className="review">
      <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
      <div className="stars">
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
      </div>
      <h3>Anurag Kumar</h3>
      <p>CEO</p>
    </div>
    <div className="review">
      <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
      <div className="stars">
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
      </div>
      <h3>Anurag Kumar</h3>
      <p>CEO</p>
    </div>
    <div className="review">
      <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
      <div className="stars">
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
      </div>
      <h3>Anurag Kumar</h3>
      <p>CEO</p>
    </div>
  </div>
  <div className="wrapper-reviews">
    <div className="review">
      <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
      <div className="stars">
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
      </div>
      <h3>Anurag Kumar</h3>
      <p>CEO</p>
    </div>
    <div className="review">
      <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
      <div className="stars">
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
      </div>
      <h3>Anurag Kumar</h3>
      <p>CEO</p>
    </div>
    <div className="review">
      <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
      <div className="stars">
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
      </div>
      <h3>Anurag Kumar</h3>
      <p>CEO</p>
    </div>
  </div>

    <div className='wrapper-pe'>
      <div className="pe-elem">
        <h1>Building a powerful website for your startup</h1> 
        <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
       <br />
        <button className="get-started">Read more</button>
      </div>
      <div className="pe-elem">
        <div className="pe-box1">
            <div className="box1-elem">
              <img style={{marginTop:"15px",marginLeft:"15px", height:'35px',width:'35px'}} src={Contact} alt="" />
              <h3>7000 Happy users</h3>
              <p>Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac</p>        
            </div>
            <div className="box1-elem">
              <img style={{marginTop:"15px",marginLeft:"15px", height:'35px',width:'35px'}} src={Chat} alt="" />
              <h3>24/7 Support</h3>
              <p>Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac</p>        
            </div>
                
        </div>
      </div>
      <div className="pe-elem">
        <div className="pe-box2">
         <div className="box2-elem">
              <img style={{marginTop:"15px",marginLeft:"15px", height:'35px',width:'35px'}} src={Message} alt="" />
              <h3>7000 Happy users</h3>
              <p>Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac</p>        
            </div>
        </div>        
      </div>
      
    </div>
    <center  style={{marginBottom:"100px"}}>
     <div className="overview">
        <div className="overview-h">
          <h1>Focus on the </h1>
          <h1>anaylytics that matter.</h1>
        </div>
    
        <div className="overview-p">
          <p> Grow faster with a website that helps you convert more customers.</p>
        </div>
        <div className="overview-items-other">
            <button style={{width:"200px"}} className="get-started-now"> Get started now</button>
          
            <button className="plans">Compare plans</button>
          
        </div>
        <img src={P2} style={{marginTop:"22px", marginLeft:"730px",height:"100px", width:"70px"}} alt="" />
        {/* <img src={Ove} style={{marginTop:"-600px", marginLeft:"740px",height:"100px", width:"70px"}} alt="" /> */}
    </div>
    </center>
  </>)
}
