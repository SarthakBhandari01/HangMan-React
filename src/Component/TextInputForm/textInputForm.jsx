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
    <form className="p-4" onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <TextInput
          onchange={handleTextInputChange}
          value={value}
          type={hide ? "password" : "text"}
          label={"Enter the Word or Phase"}
        />
      </div>
      <div className="flex gap-3">
        <div>
          <Button
            text={hide ? "Show" : "Hide"}
            styleType={"secondary"}
            onclick={() => setHide(!hide)}
          />
        </div>
        <div>
          <Button text={"Ok"} buttonType="submit" />
        </div>
      </div>
    </form>
  );
}

export default TextInputForm;
