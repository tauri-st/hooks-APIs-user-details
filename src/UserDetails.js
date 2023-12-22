const UserDetails = ({data}) => (
  <div className="user-details">
    <p className="name">{data.name.title} {data.name.first} {data.name.last}</p>
    <p className="country"></p>
    <p className="email"></p>
    <figure>{/* Place image tag here */}</figure>
    <button>Fetch Another</button>
  </div>
);

export default UserDetails;
