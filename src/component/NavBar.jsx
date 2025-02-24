export default function NavBar({ inputValue, setInputValue, search }) {
  return (
    <div className="NavBar">
      <span className="Heading">MOVIE DB</span>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={search}
        className="search-bar"
        type="text"
        value={inputValue} // To maintain input value
        placeholder="Search Movies"
      />
    </div>
  );
}