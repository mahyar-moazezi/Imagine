import React, { useState } from "react";
export const ImageContext = React.createContext();
const ImageContextProvider = (props) => {
  const [jungle, setJungle] = useState([
    {
      id: 1,
      name: "Diana Stoyanova",
      alt: "jungle1",
      src:
        "https://static.dribbble.com/users/3619723/screenshots/7564022/media/529a8042ee2669c74fe44da44be5fc64.png",
    },
    {
      id: 2,
      name: "Anastasia Golub",
      alt: "jungle2",
      src:
        "https://static.dribbble.com/users/1312159/screenshots/10770935/media/9f22371aa8cf59198e99c1702e86b2a3.png",
    },
    {
      id: 3,
      name: "Andrey Rudin",
      alt: "jungle3",
      src:
        "https://static.dribbble.com/users/992274/screenshots/6146107/jungle_kit8-net.png",
    },
  ]);
  const [mountain, setMountain] = useState([
    {
      id: 4,
      name: "Febin_Raj ",
      alt: "mountain1",
      src:
        "https://static.dribbble.com/users/1803663/screenshots/10977530/media/f7fc61a62d953a220dc8b12ddcee6f09.png",
    },
    {
      id: 5,
      name: "Eric Nyffeler",
      alt: "mountain2",
      src:
        "https://static.dribbble.com/users/45541/screenshots/9940729/media/a7129108b78c4faed322231997cdc5b5.jpg",
    },
    {
      id: 6,
      name: "Febin_Raj ",
      alt: "mountain3",
      src:
        "https://static.dribbble.com/users/1803663/screenshots/11621256/media/6baa8d91d958c85ed3290e0a35e6c3cb.jpg",
    },
  ]);
  const [sea, setSea] = useState([
    {
      id: 7,
      name: "Captain Atlas ",
      alt: "sea1",
      src:
        "https://static.dribbble.com/users/2066214/screenshots/7189122/media/5235873877d8ecf4cb96976d5377656a.jpg",
    },
    {
      id: 8,
      name: " Ana Miminoshvili ",
      alt: "sea2",
      src:
        "https://static.dribbble.com/users/371094/screenshots/6793394/_bbb-dribble_4x.jpg?compress=1&resize=1200x900",
    },
    {
      id: 9,
      name: "MUTI",
      alt: "sea3",
      src:
        "https://static.dribbble.com/users/59947/screenshots/5894179/muti_dribbble-800x600.jpg",
    },
  ]);
  return (
    <ImageContext.Provider
      value={{
        jungle,
        mountain,
        sea,
        setJungle,
        setMountain,
        setSea,
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};
export default ImageContextProvider;
