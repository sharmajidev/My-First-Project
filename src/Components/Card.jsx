import '../index.css';

const Card = ({ firstName, lastName,children}) => {
  return (
 <div className="card w-75 mb-3 cardContainer">
      <div className="card-body bodyContainer">
        <h5 className="card-title heading">
          {firstName} {lastName}
        </h5>
       {children}
      </div>
    </div>
  );
};

export default Card;
