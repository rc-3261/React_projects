function Card(props) {
  return (
    <div className="card">
      
      <img src={props.props.item} alt="temp" />
      <h3>
        {props.props.item} are one of the most popular fast foods around the world
      </h3>
    </div>
  );
}

export default Card;
