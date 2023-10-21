import { FormEvent, useState } from "react";
import Box from "./components/Box";
import FormGenerics from "./components/FormGenerics";

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

      {/* Person form */}
      <form action="" onSubmit={onPersonFormSubmit}>
        <input
          type="number"
          placeholder="age"
          value={user?.age}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, age: Number(e.target.value) }))
          }
        />
        <input
          type="text"
          placeholder="name"
          value={user?.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
