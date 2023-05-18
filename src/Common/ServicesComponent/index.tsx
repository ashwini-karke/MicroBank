import StarRating from "../StarRating";
import "./styles.css";

interface ServiceData {
  serviceCategory?: string;
  img: string;
  serviceName: string;
  displayStarRating?: boolean;
  id: string;
  rating: number;
  image?: string;
}

export default function ServicesComponent(props: ServiceData) {
  return (
    <div className="service-component">
      <img src={`Images/${props.img}.png`} alt=""></img>
      <p>{props.serviceName}</p>
      {props.displayStarRating && (
        <StarRating id={props.id} rating={props.rating}/>
      )}
    </div>
  );
}
