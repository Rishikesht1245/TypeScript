import { useState } from "react";
import {
  InitialStateType,
  decrement,
  increment,
  incrementByValue,
} from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
const Redux = () => {
  const [val, setVal] = useState<number>(0);

  const count = useSelector((state: InitialStateType) => state.count);
  const dispatch = useDispatch();

  const IncrementByValue = (): void => {
    dispatch(incrementByValue(val));
  };

  const IncrementHandler = () => {
    console.log("reached");
    dispatch(increment());
  };

  const DecrementHandler = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Redux ToolKit</h1>
      <h2>Count : {count}</h2>
      <button onClick={IncrementHandler}>+</button>
      <button onClick={DecrementHandler}>-</button>
      <input
        type="number"
        placeholder="enter a number"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />
      <button disabled={val < 0} onClick={IncrementByValue}>
        Add
      </button>
    </div>
  );
};
export default Redux;
