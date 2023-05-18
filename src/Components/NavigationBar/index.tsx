import { useState } from "react";
import "./styles.css";
const navigationList: string[] = ["Summary", "Details"];

interface NavigationBarProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function NavigationBar(props: NavigationBarProps) {
  const [active, setActive] = useState("Summary");
  function handleToggle(e: React.MouseEvent<HTMLElement>) {
    setActive((e.target as HTMLElement).id);
    props.onClick(e);
  }

  return (
    <div id="navigation-btn-wrapper">
      {navigationList.map(
        (data, index: number): JSX.Element => (
          <button
            className={`${active === data ? "active" : ""} ${data}`}
            id={data}
            key={index}
            onClick={handleToggle}
          >
            {data}
          </button>
        )
      )}
    </div>
  );
}
