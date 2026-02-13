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
            Precision-led groundwork and paving shaped by years of hands-on,
            professional site experience.
          </p>
        </div>
      </div>

      <div className="feature">
        <FiCheckSquare className="feature-icon" />
        <div>
          <h4>Uncompromising Standards</h4>
          <p>
            Precision planning and execution to achieve long-term performance
            and refinded results.
            <p></p>
          </p>
        </div>
      </div>

      <div className="feature">
        <FiUsers className="feature-icon" />
        <div>
          <h4>Professional, Transparent Service</h4>
          <p>
            Clear communication, honest advice, and transparent pricing from
            initial consultation through to project completion.
          </p>
        </div>
      </div>

      <div className="feature">
        <FiStar className="feature-icon" />
        <div>
          <h4>Fully Insured</h4>
          <p>
            Fully insured with comprehensive public liability cover, giving you
            complete peace of mind throughout your project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
