
import React from "react";

const sampleEvents = [
  { id: 1, title: "Music Concert", location: "Kampala" },
  { id: 2, title: "Tech Meetup", location: "Makerere" },
  { id: 3, title: "Sports Event", location: "Lugogo" }
];

function Events() {
  return (
    <div className="container">
      <h2>Nearby Events</h2>
      {sampleEvents.map((event) => (
        <div key={event.id} className="card">
          <h3>{event.title}</h3>
          <p>{event.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Events;
