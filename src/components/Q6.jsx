const Q6 = ({ products }) => {
  const filteredProducts = products.filter(
    ({ sales, quantity }) => sales > quantity
  );

  return (
    <div>
      <ul>
        {filteredProducts.map(({ name, quantity, sales }) => (
          <li>
            Name: {name}, Quantity: {quantity}, Sales: {sales}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Q6;
