import "./Card.css";

function Card({ name, src, status, ...props }) {
  return (
    <div
      {...props}
      className="Card"
      style={{
        background: `${
          status === "Alive" ? "green" : status === "Dead" ? "red" : "grey"
        }`,
      }}
    >
      <img src={src} alt="fail to load"></img>
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
