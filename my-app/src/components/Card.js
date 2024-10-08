

// const todoTitle = "Call Family123520";
// const todoDesc =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate delectus provident voluptatum porro debitis vero vel expedita nihil pariatur?";
const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentday = date.getDate();

function Card(props) {
  // console.log(props);
  const{titleText,descText} = props; //destructing
  return <div className="card">
      {/* <h3 className="titleStyle">{todoTitle}</h3>
      <p className="descStyle">{todoDesc}</p> */}
      {/* <h3 className="titleStyle">{props.titleText}</h3>
      <p className="descStyle">{props.descText}</p> */}
      <h3 className="titleStyle">{titleText}</h3>
      <p className="descStyle">{descText}</p>
      <p className="footer">
        {currentday + "/" + currentMonth + "/" + currentYear}
      </p>
    </div>
  
}
export default Card;