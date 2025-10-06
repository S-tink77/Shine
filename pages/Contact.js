import React from "react";

function Contact() {
  return (
    <section>
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message"></textarea>
        <button type="submit">Send</button>
      </form>
      <p>Email: ____ </p>
      <p>Phone: ____ </p>
      <p>Address: ____ </p>
      <div>
        Social Media: ____ [Links] ____
      </div>
    </section>
  );
}

export default Contact;