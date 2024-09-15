import TextInput from "../TextInput/textInput";
import Button from "../Button/button";
import { useState } from "react";
function TextInputForm({ onSubmit }) {
  const [value, setValue] = useState("");
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form Submitted");
    onSubmit?.(value);
  }
  function handleOnChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  return (
    <form className="flex gap-3" onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          onchange={handleOnChange}
          value={value}
          label={"Enter the Word or Phase"}
        />
      </div>
      <div>
        <Button text={"ok"} type="submit" />
      </div>
    </form>
  );
}

export default TextInputForm;
