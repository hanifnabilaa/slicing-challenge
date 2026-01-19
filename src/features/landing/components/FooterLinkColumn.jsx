const FooterLinkColumn = ({ title, links }) => {
  return (
    <div className="link-col">
      <div className="link-col__title">{title}</div>
      {links.map((link) => (
        <a className="link" href={link.href}>
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default FooterLinkColumn;
