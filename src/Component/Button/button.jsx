import getButtonStyling from "./getBtnStyleType";


function Button({ text, buttonType = "button", styleType,onclick }) {
  return (
    <button
      type={buttonType}
      onClick={onclick}
      className={`px-3 py-2 rounded-md text-white ${getButtonStyling(styleType)}`}
    >
      {text}
    </button>
  );
}


export default Button;
