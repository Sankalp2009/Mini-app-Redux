function Search({ query, setQuery }) {
  return (
    <div>
      <input
        type="text"
        className="search_input"
        name="search"
        value={query}
        onChange={(e)=>{
          setQuery(e.target.value)
        }}
        placeholder="Enter Search..."
      />
    </div>
  )
}

export default Search
