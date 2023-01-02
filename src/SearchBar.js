const SearchBar = ({
  filterText,
  inStockCheck,
  onFilterTextChange,
  onInStockCheckChange,
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <div>
        <input
          type="checkbox"
          checked={inStockCheck}
          onChange={(e) => onInStockCheckChange(e.target.checked)}
        />
        Filter In Stock
      </div>
    </form>
  );
};

export default SearchBar;
