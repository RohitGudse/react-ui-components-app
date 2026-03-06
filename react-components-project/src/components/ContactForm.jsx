import React from "react";

function ContactForm() {
  return (
    <div>
      <h2>Contact Us</h2>
      <input type="text" placeholder="Name" />
      <br/>
      <input type="email" placeholder="Email" />
      <br/>
      <button>Submit</button>
    </div>
  );
}

export default ContactForm;