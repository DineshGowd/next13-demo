const search = async (searchTerm) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
//   throw new Error('Error thrown')
  const data = await res.json();
  return data;
};

const SearchResults = async ({ params: { searchTerm } }) => {
  const searchResults = await search(searchTerm);
  console.log(searchResults.organic_results);
  return (
    <div>
      {searchResults.organic_results?.map((result) => (
        <>
          <p>{result.position}</p>
          <p>{result.title}</p>
        </>
      ))}
    </div>
  );
};

export default SearchResults;
