import "./Card.css";

const Card = (props) => {
  const { cardData } = props;
  const { title, description, imgUrl, className } = cardData;
  return (
    <div className="main">
      <div className={`${className} card-container`}>
        <div className="img-container">
          <img className="card-img" src={imgUrl} alt={`${title}-img`} />
        </div>
        <div className="child">
          <h1 className="card-title">{title}</h1>
          <p className="card-description">{description}</p>
          <button>Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
   