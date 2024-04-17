function Search() {
  return (
    <div>
      <input
        value="s"
        placeholder="search"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
