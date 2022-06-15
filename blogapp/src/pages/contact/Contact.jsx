import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <div>
        <div className="contactPage">


        <div className="contactLeft">
            <h2>Contact</h2>
            <form >
                <p>Name</p>
                <input className='contactInput' placeholder='Enter your name' type="text" />
                <p>Email</p>
                <input  className='contactInput' placeholder='Enter your email' type="email" />
                <p>Message</p>
                <textarea className='contactInput' placeholder='Write your message...' cols="30" rows="8"></textarea>
                
                <br />
                <button className='contactButton'>Contact</button>
                
            </form>
        </div>


        <div className="contactRight">
          <img
            src="https://images.pexels.com/photos/3651577/pexels-photo-3651577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          
        </div>
      </div>
    </div>
  )
}
