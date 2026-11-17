import { Link } from "react-router-dom";

function RoomCard({ room }) {
  return (
    <article className="room-card">
      <img src={room.image} alt={room.name} />

      <div className="room-info">
        <h3>{room.name}</h3>
        <p>{room.description}</p>

        <div className="room-bottom">
          <strong>
            ₦{room.price.toLocaleString()} <small>/ night</small>
          </strong>

          <Link to="/rooms" className="text-link">
            Book now →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default RoomCard;
