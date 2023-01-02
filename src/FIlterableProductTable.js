/* eslint-disable no-unused-vars */
import { useState } from "react";
import data from "./data";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = () => {
  const [filterText, setFilterText] = useState("");
  const [inStockCheck, setInStockCheck] = useState(false);
  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockCheck={inStockCheck}
        onFilterTextChange={setFilterText}
        onInStockCheckChange={setInStockCheck}
      />
      <ProductTable
        data={data}
        filterText={filterText}
        inStockCheck={inStockCheck}
      />
    </>
  );
};

export default FilterableProductTable;
