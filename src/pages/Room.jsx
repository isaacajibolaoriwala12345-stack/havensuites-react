import { useState } from "react";
import RoomCard from "../components/RoomCard";
import rooms from "../roomsData";

function Rooms() {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    room: "Classic Comfort",
    checkin: "",
    checkout: "",
    guests: "1",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  }

  function handleBooking(e) {
    e.preventDefault();

    if (new Date(booking.checkout) <= new Date(booking.checkin)) {
      setMessage("Check-out date must be after check-in date.");
      return;
    }

    const bookings = JSON.parse(localStorage.getItem("havenBookings") || "[]");

    bookings.push({ ...booking, id: Date.now() });

    localStorage.setItem("havenBookings", JSON.stringify(bookings));

    setMessage("Your booking request has been saved successfully!");

    setBooking({
      name: "",
      email: "",
      room: "Classic Comfort",
      checkin: "",
      checkout: "",
      guests: "1",
    });
  }

  return (
    <section className="page-section">
      <p className="eyebrow">STAY YOUR WAY</p>
      <h1>Explore Our Rooms</h1>
      <p className="page-description">
        Choose the perfect space for your next visit.
      </p>

      <div className="room-grid">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      <div className="booking-container">
        <div>
          <p className="eyebrow">RESERVE YOUR ROOM</p>
          <h2>Make a Booking</h2>
          <p>Complete the form to submit your booking request.</p>
        </div>

        <form onSubmit={handleBooking} className="booking-form">
          <label>Full Name</label>
          <input
            name="name"
            value={booking.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={booking.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />

          <label>Select Room</label>
          <select name="room" value={booking.room} onChange={handleChange}>
            {rooms.map((room) => (
              <option key={room.id} value={room.name}>
                {room.name}
              </option>
            ))}
          </select>

          <div className="form-row">
            <div>
              <label>Check-in</label>
              <input
                type="date"
                name="checkin"
                value={booking.checkin}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>

            <div>
              <label>Check-out</label>
              <input
                type="date"
                name="checkout"
                value={booking.checkout}
                onChange={handleChange}
                min={booking.checkin || new Date().toISOString().split("T")[0]}
                required
              />
            </div>
          </div>

          <label>Number of Guests</label>
          <select name="guests" value={booking.guests} onChange={handleChange}>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </select>

          <button type="submit" className="primary-button">
            Submit Booking
          </button>

          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </section>
  );
}

export default Rooms;
