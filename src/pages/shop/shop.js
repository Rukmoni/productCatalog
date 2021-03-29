import React from "react";
import { useSelector } from "react-redux";
import ProductsBox from '../../components/ProductBox/ProductBox';
import "./shop.css";

const Shop = ({ phones }) => {
    const globalState = useSelector((state) => state);
  return (
    <div className="products">
  
    {globalState&&!globalState.loading&&globalState.products.length>0?(
       
        <div className="phonesContainer">
            {globalState.products.map((phone, i) => (
              <ProductsBox key={i} product={phone} />
            ))}
          </div>
    ):(<div className="loadingWindow ">
      <div className='loader'></div>
  </div>)

    }
    </div>
  );
};

export default Shop;

