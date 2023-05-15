const User = ({ user }) => {
  return (
    <article>
      <h2>{user.Name}</h2>
      <p>{user.Number}</p>
      <p>User ID: {user.EmailAddress}</p>
      <p>User ID: {user.ID}</p>
    </article>
  );
};
export default User;
