import React from "react";
import { Link } from "react-router-dom";

import "./ProductBox.css";

const ProductBox = ({ product }) => {
  let oldPrice = (product.price + 199.99).toFixed(2);

  return (
    <div className="product">
     
      <Link to={`/${product.id}`} className="Link">
        <img
          className="productPic"
          alt="product"
          src={`/images/${product.imageFileName}`}
        />
      </Link>
      <div className="productTitleContainer">
        <Link to={`/${product.id}`} style={{ color: '#000',textDecoration:'none' ,fontSize:20}} >
         
             {product.manufacturer} {product.name} {product.color}{" "}
            {product.processor}
          
        </Link>
      </div>
    
      <div className="productButtonsContainer">
      <p className="productPriceOld "> ${oldPrice}</p>
      <p className="productPrice">${product.price}</p>
      </div>
      <div className="productButtonsContainer">
     
        <Link to={`/${product.id}`} style={{ textDecoration:'none' ,fontSize:20}}>
          <button className="productButtonBuy">ADD TO CART</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductBox;
