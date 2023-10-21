import { useReducer } from "react";

type initialStateType = {
  count: number;
};
const initialState: initialStateType = {
  count: 0,
};

type ActionType = {
  type: "increment" | "decrement";
  payload: number;
};
const reducer = (state: initialStateType, action: ActionType) => {
  switch (action.type) {
    case "decrement":
      // what ever we return inside the reducer function it will update to the state
      return { count: state.count - action.payload };
    case "increment":
      return { count: state.count + action.payload };
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Increment = (): void => {
    dispatch({
      type: "increment",
      payload: 5,
    });
  };

  const Decrement = (): void => {
    dispatch({
      type: "decrement",
      payload: 5,
    });
  };

  return (
    <div>
      <h1>Counter change</h1>
      <p>{state.count}</p>

      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  );
};
export default UseReducer;
