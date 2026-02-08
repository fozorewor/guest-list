export default function GuestDetails(props) {
  return (
    <div className="details-container">
      <div className="details-card">
        <h2>{props.guest.name}</h2>
        <p><strong>Email:</strong> {props.guest.email}</p>
        <p><strong>Phone:</strong> {props.guest.phone}</p>
        <p><strong>Job:</strong> {props.guest.job}</p>
        <p><strong>Bio:</strong> {props.guest.bio}</p>

        <button
          className="back-button"
          onClick={props.onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}
