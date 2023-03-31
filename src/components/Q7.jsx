const Q7 = ({ student }) => {
  const { name, english, maths, computers } = student;

  const total = maths + english + computers;
  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name: {name}</h3>
      <h3>English: {english}</h3>
      <h3>Maths: {maths}</h3>
      <h3>Computers: {computers}</h3>
      <h3>Total Marks: {total}</h3>

      <h3>
        Grade:
        {(() => {
          switch (true) {
            case total >= 225:
              return "A";

            case total >= 180:
              return "B";

            case total >= 150:
              return "C";

            default:
              return "D";
          }
        })()}
      </h3>
    </div>
  );
};

export default Q7;
