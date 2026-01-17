const PriceCard = ({ title, desc, price, list1, list2, list3, link }) => {
  return (
    <article className="price-card">
      <h3 className="price-card__title">{title}</h3>
      <p className="price-card__desc">{desc}</p>
      <div className="price-card__price">
        <span className="price-card__currency">$</span>
        <span className="price-card__amount">{price}</span>
        <span className="price-card__period">/mo</span>
      </div>
      <ul className="list list--compact">
        <li className="list__item">
          <span className="check">✓</span> {list1}
        </li>
        <li className="list__item">
          <span className="check">✓</span> {list2}
        </li>
        <li className="list__item">
          <span className="check">✓</span> {list3}
        </li>
      </ul>
      <a className="btn btn--secondary btn--full" href="#">
        {link}
      </a>
    </article>
  );
};

export default PriceCard;
