const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search">
      <img src="./search.svg" alt="search" />
      <input type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  )
}

export default Search;
