import React from 'react';
import './css/Contact.css';

export const Contact = () => {
  return (
    <div className="contactBox">
      <h1>get in touch</h1>
      <p>Wanna talk business? Shoot me an email and we'll discuss everything in detail.</p>
      
      <div className="contactForm">
        <form action="https://formcarry.com/s/rJG-vkYrM" method="POST" acceptCharset="UTF-8">    
          <div className="form-row">       
            <div className="form-group ">
              <label htmlFor="name"></label>
              <input type="text" name="name" className="form-control" aria-describedby="nameHelp" placeholder="Your name.." required />
            </div>

            <div className="form-group ">
              <label htmlFor="email"></label>
              <input type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Your email.." required />
            </div>       
          </div>   
             
          <div className="form-row">     
            <div className="form-group ">
              <label htmlFor="contactTextarea"></label>
              <textarea type="text" name="message" className="form-control" placeholder="How can I help?"  rows="3" required></textarea>
            </div>
          </div>
          
          <div style={{textAlign: "center"}}>
            <button type="submit" className="btn btn-primary">Submit!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;