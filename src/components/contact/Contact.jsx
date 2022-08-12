import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>

      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>alebolivarpdev@gmail.com</h5>
            <a href="mailto:alebolivarpdev@gmail.com" target='_blank' rel='noreferrer'>Send a mail</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Alessandra Bolivar</h5>
            <a href="https://www.linkedin.com/in/alessandra-bolivar-598944242/" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Contact</h5>
            <a href="https://api.whatsapp.com/send?phone=5491123321815" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

        </div>
        {/* {/* ESTO VA A SER EL FOMULARIO PARA MANDAR MENSAJE DESDE LA PAGINA 
        <form action="">
            <input type="text" name='name' placeholder='Your full name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="10" placeholder='Your message' required ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form> */}
      </div>

    </section>
  )
}

export default Contact 