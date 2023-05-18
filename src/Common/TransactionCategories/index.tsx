import "./styles.css";
import download from '../../assests/Images/download.png'

interface transaction {
  categoryName: string;
  categorydetails: string | number;
}
export default function index(props: transaction) {
  return (
    <div className="transaction">
      <p className="category-name">{props.categoryName}</p>
      <span
        className="category-detail"
        style={
          props.categorydetails === "Approved"
            ? { color: "green" }
            : props.categorydetails === "Rejected"
            ? { color: "red" }
            : { color: "#232F34" }
        }
      >
        {props.categorydetails ==='download'? <img src={download} alt="download" /> :props.categorydetails}
      </span>
    </div>
  );
}
