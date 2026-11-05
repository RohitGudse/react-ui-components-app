const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2>Contact Us</h2>

      <input type="text" placeholder="Enter your name" />
      <input type="email" placeholder="Enter your email" />

      <button type="submit">Submit</button>
    </section>
  );
};

export default ContactForm;