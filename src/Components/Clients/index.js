import "./index.sass";
import reviews from "../../Assets/ClientsReviews";

const Clients = () => {
  return (
    <div className="clients">
      <div className="clients__header">
        <h2>What clients say</h2>
      </div>
      <div className="clients__block">
        {reviews.map((rev, index) => (
          <div className="clients__block--review" key={index}>
            <div className="clients__block--review--info">
              <img
                className="clients__block--gap"
                src={rev.avatar}
                alt={`${rev.name}'s avatar`}
              />
              <div className="clients__block--review--info--headline">
                <h3>{rev.name}</h3>
                <h4>{rev.title}</h4>
              </div>
            </div>
            <div className="clients__block--review--content">
              <div className="clients__block--gap" />
              <p>{rev.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
