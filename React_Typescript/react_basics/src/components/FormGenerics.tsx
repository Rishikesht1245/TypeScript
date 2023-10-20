type InputValProps = string | number;

const FormGenerics = <T extends InputValProps>({
  label,
  value,
  onChange,
}: {
  label: string;
  value: T;
  onChange: () => void;
}) => {
  return (
    <div>
      <form action="">
        <label htmlFor="input">{label}</label>
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default FormGenerics;
