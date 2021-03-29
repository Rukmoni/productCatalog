import React from "react";
import { useSelector } from "react-redux";

//import Phone from "../Phone/Phone";

import "./shop.css";

const Shop = ({ phones }) => {
    const globalState = useSelector((state) => state);
    console.log("globalState",globalState)
  return (
    <div className="phones">
    <h1>ShopPage</h1> </div>
  );
};

export default Shop;

