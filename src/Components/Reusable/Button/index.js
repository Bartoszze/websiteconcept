import "./index.sass";

const Button = ({ text, margin, href }) => {
  const buttonStyle = {
    margin: margin,
  };

  return (
    <a
      className="custom-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      style={buttonStyle}
    >
      <button className="custom-button">{text}</button>
    </a>
  );
};

export default Button;
