import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const [stockValue, setStockValue] = useState();
  return (
    <div>
      <h1>Buy a Cake and get a icecream free</h1>
      <h2>Number of Cakes-{numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cakes</button>
      <div>
        <input
          type="number"
          value={stockValue}
          onChange={(e) => setStockValue(parseInt(e.target.value))}
          placeholder="Enter a stock Value"
        />
        <button onClick={() => dispatch(restocked(stockValue))}>
          Restock Cakes
        </button>
      </div>
    </div>
  );
};

export default CakeView;
