import TextInput from "../TextInput/textInput";
import Button from "../Button/button";
function TextInputForm({
  handleFormSubmit,
  handleTextInputChange,
  hide,
  setHide,
  value,
}) {
  return (
    <form className="flex gap-3" onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          onchange={handleTextInputChange}
          value={value}
          type={hide ? "password" : "text"}
          label={"Enter the Word or Phase"}
        />
      </div>
      <div>
        <Button
          text={hide ? "show" : "hide"}
          styleType={"secondary"}
          onclick={() => setHide(!hide)}
        />
      </div>
      <div>
        <Button text={"ok"} buttonType="submit" />
      </div>
    </form>
  );
}

export default TextInputForm;
