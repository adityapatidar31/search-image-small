import { useGlobalContext } from "../hooks/globalContext";

function SearchForm() {
  const { setSearchQuery } = useGlobalContext();
  function handleSubmit(e) {
    e.preventDefault();
    const searchedValue = e.target.elements.search.value;
    if (!searchedValue) return;
    setSearchQuery(searchedValue);
  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button className="btn">search</button>
      </form>
    </section>
  );
}

export default SearchForm;
