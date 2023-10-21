import { Dispatch, FormEvent, SetStateAction } from "react";

interface Person {
  name: string;
  age: number;
}
type PersonFormProps = {
  user: Person;
  setUser: Dispatch<SetStateAction<Person>>;
  onPersonFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const PersonForm = ({ user, setUser, onPersonFormSubmit }: PersonFormProps) => {
  return (
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
        onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default PersonForm;
