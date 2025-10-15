import '../index.css';

const Card = ({ firstName, lastName }) => {
  return (
    <div className="card w-75 mb-3 cardContainer">
      <div className="card-body bodyContainer">
        <h5 className="card-title heading">
          {firstName} {lastName}
        </h5>
        <p className="card-text paragraph">
          {firstName} is a professor of Computer Science at the Univercity of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com" className='link'>Email Maria</a>
        </p>
      </div>
    </div>
  );
};

export default Card;
