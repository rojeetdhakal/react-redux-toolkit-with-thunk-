import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { ordered, restocked } from "./icecreamSlice";
import { useState } from "react";

const IcecreamView = () => {
  const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useDispatch();
  const [stockValue, setStockValue] = useState();
  return (
    <div>
      <h2>Number of Icecream-{numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <div>
        <input
          type="number"
          value={stockValue}
          onChange={(e) => setStockValue(parseInt(e.target.value))}
          placeholder="enter a stock value"
        />

        <button onClick={() => dispatch(restocked(5))}>Restock Icecream</button>
      </div>
    </div>
  );
};

export default IcecreamView;
