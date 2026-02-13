import { FiTool, FiCheckSquare, FiUsers, FiStar } from "react-icons/fi";

function WhyChoose() {
  return (
    <section className="features">
      <h2>Why Choose Advanced Edge?</h2>

      <div className="feature">
        <FiTool className="feature-icon" />
        <div>
          <h4>Craftsmanship Built on Experience</h4>
          <p>
            Specialist groundwork and paving delivered with years of hands-on
            industry experience and meticulous attention to detail.
          </p>
        </div>
      </div>

      <div className="feature">
        <FiCheckSquare className="feature-icon" />
        <div>
          <h4>Uncompromising Standards</h4>
          <p>
            Every stage is carefully planned and executed to ensure durability,
            performance, and a refined finish. We take pride in the details,
            delivering clean, precise workmanship that reflects our reputation
            for quality.
          </p>
        </div>
      </div>

      <div className="feature">
        <FiUsers className="feature-icon" />
        <div>
          <h4>Professional, Transparent Service</h4>
          <p>
            Fully insured with comprehensive public liability cover, giving you
            complete peace of mind throughout your project.
          </p>
        </div>
      </div>

      <div className="feature">
        <FiStar className="feature-icon" />
        <div>
          <h4>Fully Insured</h4>
          <p>
            Rest easy in the knowledge that those of us at Advanced Edge are
            fully insured in accordance with public liabiltiy insurance (TO
            EDIT!!).
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
