import React, { useContext } from "react";
import SeaItem from "./SeaItem";
import { ImageContext } from "../../Context/ImageContext";
function Sea() {
  const { sea } = useContext(ImageContext);
  return (
    <div>
      <div className="card-group">
        {sea.map((card) => {
          return (
            <SeaItem
              key={card.id}
              source={card.src}
              name={card.name}
              alt={card.alt}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Sea;
