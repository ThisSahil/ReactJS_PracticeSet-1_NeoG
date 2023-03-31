const Q1 = ({ name, designation, workexp }) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3 style={{ color: "green" }}>Designation: {designation}</h3>
      <h3 style={{ color: "blue" }}>Work Exp: {workexp}</h3>
    </div>
  );
};

export default Q1;
