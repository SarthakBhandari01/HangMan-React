import getButtonStyling from "./getBtnStyleType";


function Button({ text, buttonType = "button", styleType,onclick }) {
  return (
    <button
      type={buttonType}
      onClick={onclick}
      className={`px-4 py-2 rounded-lg text-white ${getButtonStyling(styleType)}`}
    >
      {text}
    </button>
  );
}


export default Button;
