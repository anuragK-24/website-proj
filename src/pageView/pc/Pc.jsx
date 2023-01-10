import React from 'react'
import Photo from "./../../itemImg/b1.png"
import "./pc.css"

export default function Pc() {
  return (<>
  <div className="pc-all">
    
    <div className='wrapper-pc'>
        <div className="pc-elem">
            <img src={Photo} style={{height:"300px", width:"350px"}} alt="" />
        </div>
        <div className="pc-elem">
            <h1>Manage and Track</h1>
            <h1>Your Projects </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p> Suspendisse varius enim in eros elementum tristique.</p>
        </div>
    </div>
    <div className='wrapper-pc'>
        <div className="pc-elem">
            <h1>Manage and Track</h1>
            <h1>Your Projects </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p> Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div className="pc-elem">
            <img src={Photo} style={{height:"300px", width:"350px"}} alt="" />
        </div>
    </div>
    <div className='wrapper-pc'>
        <div className="pc-elem">
            <img src={Photo} style={{height:"300px", width:"350px"}} alt="" />
        </div>
        <div className="pc-elem">
            <h1>Manage and Track</h1>
            <h1>Your Projects </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p> Suspendisse varius enim in eros elementum tristique.</p>
        </div>
    </div>
    </div>
</>)
}
