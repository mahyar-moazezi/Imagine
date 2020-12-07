import React, { useContext } from "react";
import { ImageContext } from "../../Context/ImageContext";
import JungleItem from "./JungleItem";
function Jungle() {
  const { jungle } = useContext(ImageContext);
  return (
    <div className="card-group">
      {jungle.map((card) => {
        return (
          <JungleItem
            key={card.id}
            source={card.src}
            name={card.name}
            alt={card.alt}
          />
        );
      })}
    </div>
  );
}
export default Jungle;
