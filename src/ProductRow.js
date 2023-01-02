const ProductRow = ({ productName, productPrice, productStocked }) => {
  return (
    <tr>
      {!productStocked ? (
        <td className="text-danger">{productName}</td>
      ) : (
        <td>{productName}</td>
      )}
      <td>{productPrice}</td>
    </tr>
  );
};
export default ProductRow;
