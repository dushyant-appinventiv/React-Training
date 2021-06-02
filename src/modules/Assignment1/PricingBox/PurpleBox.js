import React from "react";
import "./purplebox.css";

function PurpleBox() {
  return (
    <div className='purpleContainer'>
      <div className='containerHead'>
        <div className='purpleTitle'>
          <h1>Pro</h1>
          <hr />
        </div>
        <div className='purplePayType'>
          <h3>29$</h3>
          monthly
        </div>
      </div>
      <div className='contentBody'>
        All of Lite plus:
        <ul>
          <li>
            <div className='icon'>&#x2714;</div>
            <div className='listItem'>
              Bot with AI that can recognize the user's behaviour and can
              automatize the sentences.
            </div>
          </li>
          <li>
            <div className='icon'> &#x2714; </div>
            <div className='listItem'> Unlimited conversational flows </div>
          </li>
          <li>
            <div className='icon'> &#x2714; </div>
            <div className='listItem'>
              Facebook, Twitter, Instagram and Linkedin integration.
            </div>
          </li>
          <li>
            <div className='icon'> &#x2714; </div>
            <div className='listItem'>Achieved chat without limits.</div>
          </li>
        </ul>
      </div>
      <div className='purpleFooter'>
        <p>View all the features</p>
        <button type='button'> Start 14 days of free Pro plan </button>
      </div>
    </div>
  );
}

export default PurpleBox;
