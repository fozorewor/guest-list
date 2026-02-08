export default function GuestList(props) {
  return (
    <div className="guest-container">
      <h1 className="guest-header">Guest List</h1>

      <table className="guest-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {props.guests.map((guest) => (
            <tr
              key={guest.id}
              onClick={() => props.onSelectGuest(guest)}
            >
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="guest-footer">
        Select a guest to see more details.
      </p>
    </div>
  );
}
