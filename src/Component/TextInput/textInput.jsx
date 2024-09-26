function TextInput({ label, type = "text", value, onchange }) {
  return (
    <label >
      {label && <span className="text-xl font-semibold">{label} :</span>}
      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={onchange}
        className="w-full rounded-md px-4 py-2 border border-gray-500 "
      />
    </label>
  );
}
export default TextInput;
