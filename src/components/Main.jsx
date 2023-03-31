import Q1 from "./Q1";
import Q10 from "./Q10";
import Q11 from "./Q11";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";
import Q6 from "./Q6";
import Q7 from "./Q7";
import Q89 from "./Q89";

const Main = () => {
  const style = {
    backgroundColor: "lightgreen",
    color: "darkgreen",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer"
  };

  const items = ["pen", "pencil", "ruler", "eraser"];

  const imageLink =
    "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
  const caption = "Spring Flowers";

  const products = [
    { name: "Perk", quantity: 10, sales: 7 },
    { name: "Pepsi", quantity: 10, sales: 20 },
    { name: "Coke", quantity: 18, sales: 50 },
    { name: "Maggi", quantity: 41, sales: 22 },
    { name: "5Star", quantity: 7, sales: 9 }
  ];

  const student = {
    name: "John Doe",
    english: 90,
    maths: 80,
    computers: 70
  };

  return (
    <>
      {/* <Q1
        name={"Sahil Chhabra"}
        designation={"Software Engineer"}
        workexp={"1 year"}
      /> */}

      {/* <Q2 style={style} /> */}

      {/* <Q3 header={"Stationery Items"} items={items} /> */}

      {/* <Q4 imageLink={imageLink} caption={caption} /> */}

      {/* <Q5 products={products} /> */}
      {/* <Q6 products={products} /> */}

      {/* <Q7 student={student} /> */}

      {/* <Q89 /> */}

      {/* <Q10 /> */}

      {/* <Q11 /> */}
    </>
  );
};

export default Main;
