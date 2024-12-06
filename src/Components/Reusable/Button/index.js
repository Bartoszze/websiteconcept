import "./index.sass";

const Button = ({ text, margin, href }) => {
  const buttonStyle = {
    margin: margin,
  };

  return (
    <a className="custom-link" href={href} target="_blank" rel="noreferrer">
      <button className="custom-button" style={buttonStyle}>
        {text}
      </button>
    </a>
  );
};

export default Button;
