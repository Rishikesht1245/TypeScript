import { FormEvent, useState } from "react";
import Box from "./components/Box";
import FormGenerics from "./components/FormGenerics";
import PersonForm from "./components/PersonForm";
import { ThemeProvider } from "./context/ThemeContext";
import UseContext from "./components/UseContext";
import UseReducer from "./components/UseReducer";

interface Person {
  name: string;
  age: number;
}

function App() {
  const [count, setCount] = useState(0);
  // for form
  const [value, setValue] = useState<string>("");
  // person
  const [user, setUser] = useState<Person>({ name: "", age: 0 });

  const onPersonFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };
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
      <FormGenerics label="Search" value={value} onChange={setValue} />

      {/* person form */}
      <PersonForm
        user={user}
        setUser={setUser}
        onPersonFormSubmit={onPersonFormSubmit}
      />

      {/* Theme Provider */}
      <ThemeProvider>
        <UseContext />
      </ThemeProvider>

      {/* useReducer hook */}
      <UseReducer />
    </div>
  );
}

export default App;
