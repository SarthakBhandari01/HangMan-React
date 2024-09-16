import TextInputForm from "./textInputForm";
import { useState } from "react";

function TextInputFormContainer({ onSubmit }) {
  const [value, setValue] = useState("");
  const [hide, setHide] = useState(true);
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form Submitted");
    onSubmit?.(value);
  }
  function handleTextInputChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  return (
    <TextInputForm
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      hide={hide}
      setHide={setHide}
      value={value}
    />
  );
}

export default TextInputFormContainer;
