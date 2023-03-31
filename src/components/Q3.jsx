const Q3 = ({ header, items }) => {
  return (
    <div>
      <h1>{header}</h1>

      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Q3;
