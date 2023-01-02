import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ filterText, inStockCheck, data }) => {
  const category = [];
  const rows = [];

  data.forEach((element) => {
    console.log(element);
    if (element.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockCheck && !element.stocked) {
      return;
    }
    if (!category.includes(element.category)) {
      category.push(element.category);
      rows.push(<ProductCategoryRow productCategory={element.category} />);
    }

    rows.push(
      <ProductRow
        productName={element.name}
        productPrice={element.price}
        productStocked={element.stocked}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
