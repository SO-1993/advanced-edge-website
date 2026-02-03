import "../css/App.css";
import "../css/index.css";
import { ContactInformation, ContactForm } from "./Contact";

function CallToAction() {
  return (
    <section
      className="call-to-action"
      id="contact-form"
      tabIndex="-1"
      aria-labelledby="cta-heading"
    >
      <h4 id="cta-heading">Ready to discuss your project?</h4>
      <p>Honest advice. Clear pricing. Lasting results.</p>

      <div className="contact-layout">
        <ContactInformation />
        <ContactForm />
      </div>
    </section>
  );
}

export default CallToAction;
