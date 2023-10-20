import { ReactNode } from "react";

type PropsType = {
  heading: string;
  count: number;
  //function as type
  addCount: (num: number) => void;
  children: ReactNode;
};

//receiving the props
const Box = ({ heading, count, addCount, children }: PropsType) => {
  return (
    <div>
      <h1>{heading}</h1>
      <p onClick={() => addCount(4)}>Count : {count} </p>
      <div>{children}</div>
    </div>
  );
};
export default Box;
