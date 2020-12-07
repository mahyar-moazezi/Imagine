import React, { useContext } from "react";
import MountainItem from "./MountainItem";
import { ImageContext } from "../../Context/ImageContext";
function Mountain() {
  const { mountain } = useContext(ImageContext);
  return (
    <div>
      <div className="card-group">
        {mountain.map((card) => {
          return (
            <MountainItem
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
export default Mountain;
