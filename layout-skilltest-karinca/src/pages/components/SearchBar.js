import React from "react";

function SearchBar({ users, setSearchResults }) {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(users);

    const resultsArray = users.filter(
      (user) =>
        user.Name.includes(e.target.value) ||
        user.Number.includes(e.target.value)
    );
    setSearchResults(resultsArray);
  };
  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
        <button className="search__button">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
