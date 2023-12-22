const UserDetails = ({data}) => (
  <div className="user-details">
    <p className="name">{data.name.title} {data.name.first} {data.name.last}</p>
    <p className="country">{data.location.country}</p>
    <p className="email">{data.email}</p>
    <figure>{/* Place image tag here */}</figure>
    <button>Fetch Another</button>
  </div>
);

export default UserDetails;
