import React from 'react';
import './css/Contact.css';

import HexagonGrid from '../../components/Hexagon';

export const Contact = () => {
  return (
    <div className="contact" id="Contact">
      { window.innerWidth <= 1000 ? null : <HexagonGrid /> }
      <span className="toAppear"><h1>get in touch</h1></span>
      <span className="toAppear"><p><em><b>I am open for inquiries.</b></em></p></span>
      <span className="toAppear"><p>Whether you have a project you'd like to discuss or you just want to say <b>hello</b>, shoot me an email right away and I will get back to you soon.</p></span>
      
        <form action="https://formcarry.com/s/WlOMZiyHGVI" method="POST" acceptCharset="UTF-8"> 
          <span className="toAppear">   
            <div className="form-group ">
              <label htmlFor="name"></label>
              <input type="text" name="name" className="form-control" aria-describedby="nameHelp" placeholder="Your name.." required />
            </div>
          </span>

          <span className="toAppear">
            <div className="form-group ">
              <label htmlFor="email"></label>
              <input type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Your email.." required />
            </div>
          </span>    

          <span className="toAppear">
            <div className="form-group ">
              <label htmlFor="contactTextarea"></label>
              <textarea type="text" name="message" className="form-control" placeholder="How can I help?"  rows="3" ></textarea>
            </div>
          </span>
          
          <div className="toAppear">
            <button type="submit" className="btn btn-primary">Submit!</button>
          </div>
        </form>
    </div>
  );
}

export default Contact;