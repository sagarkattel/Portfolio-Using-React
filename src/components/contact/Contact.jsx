import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fl10m97', 'template_znlyr1j', form.current, 'IyLwbDniiDinKU622')
    .then(()=>{
      alert("Message Successfully Sent")
      window.location.reload(false)
    },
    ()=>{
      alert("Failed to send")
    }
    )
    // e.target.reset()

  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>kattelsagar1117@gmail.com</h5>
          <a href="mailto:kattelsagar1117@gmail.com" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
        <RiMessengerLine className='contact__option-icon'/>
          <h4>Messanger</h4>
          <h5>Sagar Kattel</h5>
          <a href="https://m.me/sagar.kattel.58" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
        <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+977-9825266009</h5>
          <a href="https://api.whatsapp.com/send?phone=009825266009" target='_blank'>Send a message</a>
        </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact