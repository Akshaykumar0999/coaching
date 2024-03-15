import Card from "./Card";
import "./Courses.css";

const cardsData = [
  {
    id: "1",
    title: "React Js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo amet soluta nisi eius sit tempora quos rerum, voluptatum, consequuntur minima quam voluptatibus? Facere, illum!",
    imgUrl: "../r1.png",
    className: "card-1",
  },
  {
    id: "2",
    title: "JavaScript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo amet soluta nisi eius sit tempora quos rerum, voluptatum, consequuntur minima quam voluptatibus? Facere, illum!",
    imgUrl: "../js.png",
    className: "card-2",
  },
  {
    id: "3",
    title: "HTML & CSS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo amet soluta nisi eius sit tempora quos rerum, voluptatum, consequuntur minima quam voluptatibus? Facere, illum!",
    imgUrl: "../html.png",
    className: "card-3",
  },
  {
    id: "4",
    title: "MERN",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo amet soluta nisi eius sit tempora quos rerum, voluptatum, consequuntur minima quam voluptatibus? Facere, illum!",
    imgUrl: "../mern.png",
    className: "card-4",
  },
  {
    id: "5",
    title: "Node js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo amet soluta nisi eius sit tempora quos rerum, voluptatum, consequuntur minima quam voluptatibus? Facere, illum!",
    imgUrl: "../node js.png",
    className: "card-5",
  },
  {
    id: "6",
    title: "Python",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo amet soluta nisi eius sit tempora quos rerum, voluptatum, consequuntur minima quam voluptatibus? Facere, illum!",
    imgUrl: "../node js.png",
    className: "card-6",
  },
];
const Courses = () => {
  return (
    <div className="c-parent">
      <div className="c-main">
        <div className="c-heading">Courses  <hr /></div>
       
        <div className="cards-container">
          {cardsData.map((cardData) => (
            <Card cardData={cardData} key={cardData.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
