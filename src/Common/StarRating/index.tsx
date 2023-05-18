import { updateStar } from "../../MOCKAPI/ApiCalls";
import { useState } from "react";
import filled from "../../assests/Images/filled.png";
import unfilled from "../../assests/Images/unfilled.png";
import "./styles.css";

export default function StarRating(props: { id: string; rating: number }) {
  const { id, rating } = props;
  const ratingCount = 5;
  const [star, setStar] = useState(rating);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    const starId = (e.target as HTMLElement).id.split("-");
    const serviceName = starId[0];
    const categoryNumber = parseInt(starId[1]);
    const starCount = parseInt(starId[2]);
    const imageName = serviceName.split(" ");
    const image = imageName[0];
    updateStar(serviceName, categoryNumber, starCount, image);
    setStar(starCount);
  }

  const stars = [];
  for (let i = 0; i < ratingCount; i++) {
    if (i < star) {
      stars.push(
        <img
          src={filled}
          key={i}
          className="fa fa-star"
          id={id + "-" + (i + 1)}
          alt="filled star"
        />
      );
    } else {
      stars.push(
        <img
          src={unfilled}
          key={i}
          className="fa fa-star"
          id={id + "-" + (i + 1)}
          alt="filled star"
        />
      );
    }
  }

  return <div id="star" data-testid='star' onClick={handleClick}>{stars}</div>;
}
