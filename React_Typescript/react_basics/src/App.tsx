import { useState } from "react";
import Box from "./components/Box";
import FormGenerics from "./components/FormGenerics";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Box
        heading={"React with Typescript"}
        count={count}
        addCount={(num: number) => setCount((prev) => prev + num)}
      >
        <p>Hello I am a child</p>
      </Box>

      {/* generics form */}
      <FormGenerics label="Search" value={""} onChange={() => {}} />
    </div>
  );
}

export default App;
