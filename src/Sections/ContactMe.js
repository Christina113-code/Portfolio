import React from 'react'
import Button from '../Components/Button'

const ContactMe = () => {
  return (
    <div className="contact section" id='contact'>
      <h2>Get in Touch</h2>
      <form>
        <input type="text" placeholder="Your Name" name="name"/>
        <input type="email" placeholder="Email Address" name="email"/>
        <textarea placeholder="Write your message" name="message"/>
      </form>
      <Button text="Send Message" primary={true}/>
    </div>
  )
}

export default ContactMe