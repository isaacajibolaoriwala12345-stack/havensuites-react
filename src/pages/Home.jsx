import { Link } from "react-router-dom";
import RoomCard from "../components/RoomCard";
import rooms from "../roomsData";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO HAVEN SUITES</p>
          <h1>
            Find Your Perfect
            <br />
            Place to Stay.
          </h1>
          <p>
            Experience exceptional hospitality, beautiful spaces and
            unforgettable comfort.
          </p>
          <Link to="/rooms" className="primary-button">
            Explore Our Rooms
          </Link>
        </div>
      </section>

      <section className="intro section">
        <p className="eyebrow">A BETTER HOTEL EXPERIENCE</p>
        <h2>Relax. Recharge. Feel at Home.</h2>
        <p>
          At Haven Suites, we combine modern luxury with genuine hospitality to
          make every stay special.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR ACCOMMODATION</p>
            <h2>Rooms Made for You</h2>
          </div>
          <Link to="/rooms" className="text-link">
            View all rooms →
          </Link>
        </div>

        <div className="room-grid">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      <section className="feature-banner">
        <div>
          <p className="eyebrow">YOUR NEXT GETAWAY STARTS HERE</p>
          <h2>
            Make Every Stay
            <br />
            Worth Remembering.
          </h2>
          <Link to="/rooms" className="primary-button">
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
