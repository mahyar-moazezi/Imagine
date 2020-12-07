import React, { useContext, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { ImageContext } from "../../Context/ImageContext";
const Header = (props) => {
  const {
    jungle,
    mountain,
    sea,
    setJungle,
    setMountain,
    setSea,
  } = useContext(ImageContext); //States
  const [valueArry, setValueArry] = useState(""); //value of searchbar
  const [valueCopy, setValueCopy] = useState([]); // a copy from states for searchbar
  useEffect(() => {
    switch (props.location.pathname) {
      case "/jungle":
        setValueCopy(jungle);
        break;
      case "/mountain":
        setValueCopy(mountain);
        break;
      case "/sea":
        setValueCopy(sea);
        break;
      default:
        break;
    }
  }, [props.location.pathname]); //using useEffect for set searchbar state
  const valueHandler = (event) => {
    const arryHolder = valueCopy.filter((item) => {
      const typingValue = event.target.value.toUpperCase();
      const itemValue = item.name.toUpperCase();
      return itemValue.indexOf(typingValue) > -1;
    });
    switch (props.location.pathname) {
      case "/jungle":
        setJungle(arryHolder);
        break;
      case "/mountain":
        setMountain(arryHolder);
        break;
      case "/sea":
        setSea(arryHolder);
        break;
      default:
        break;
    }
    setValueArry(event.target.value);
  }; //searchbar Handler event

  return (
    <div className="my-5 mx-auto">
      <input
        type="text"
        placeholder="SearchBar"
        className="form-control mx-auto w-50"
        value={valueArry}
        onChange={valueHandler}
      />
      <div
        className="bg-light 
             d-flex justify-content-around align-items-center my-5 container"
      >
        <Link to="/jungle">
          <button className="btn btn-success my-3">
            Jungle
          </button>
        </Link>
        <Link to="/mountain">
          <button className="btn btn-secondary my-3">
            Mountain
          </button>
        </Link>
        <Link to="/sea">
          <button className="btn btn-primary my-3">Sea</button>
        </Link>
      </div>
    </div>
  );
};
export default withRouter(Header);
