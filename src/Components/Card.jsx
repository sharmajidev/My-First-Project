import '../index.css';

const Card = (props) => {
  return (
 <div className="card w-75 mb-3 cardContainer">
      <div className="card-body bodyContainer">
        <h5 className="card-title heading">
          {props.firstName} {props.lastName}
        </h5>
       {props.children}
      </div>
    </div>
  );
};

export default Card;
