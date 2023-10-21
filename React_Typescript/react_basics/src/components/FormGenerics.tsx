import { Dispatch, SetStateAction } from "react";
type InputValProps = string | number;

const FormGenerics = <T extends InputValProps>({
  label,
  value,
  onChange,
}: {
  label: string;
  value: T;
  onChange: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <form action="">
        <label htmlFor="input">{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default FormGenerics;
