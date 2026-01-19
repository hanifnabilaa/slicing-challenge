const TestimonialCard = ({ text, name, role }) => {
  return (
    <article className="testimonial">
      <p className="testimonial__text">{text}</p>
      <div className="testimonial__meta">
        <span className="avatar avatar--a" aria-hidden="true"></span>
        <div>
          <div className="testimonial__name">{name}</div>
          <div className="testimonial__role">{role}</div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
