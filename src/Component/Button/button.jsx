import getButtonStyling from "./getBtnStyleType";


function Button({ text, type = "button", styleType }) {
  return (
    <button
      type={type}
      className={`px-3 py-2 rounded-md text-white ${getButtonStyling(styleType)}`}
    >
      {text}
    </button>
  );
}


export default Button;
