import User from "./User";

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((user) => (
    <User key={user.ID} user={user} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching User</p>
    </article>
  );

  return <main>{content}</main>;
};
export default ListPage;
