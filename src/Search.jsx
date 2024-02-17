const Search = ({ onSearchHandler }) => {
  return (
    <div>
      Search:{" "}
      <input
        onChange={onSearchHandler}
        className="border-2 border-black"
        placeholder="fruits"
      />
    </div>
  );
};

export default Search;
