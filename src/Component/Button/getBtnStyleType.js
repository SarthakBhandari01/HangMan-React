function getButtonStyling(styleType) {
  const primaryBtn =
    "bg-blue-700 border border-blue-700 hover:bg-blue-800 transition-all";
  const secondaryBtn =
    "bg-gray-600 border border-gray-200 hover:bg-gray-700 transition-all";
  const errorBtn =
    "bg-red-700 border border-red-700 hover:bg-red-800 transition-all";
  const warningBtn =
    "bg-yellow-400 border border-yellow-700 hover:bg-yellow-500 ";

  if (styleType === "primary") {
    return primaryBtn;
  } else if (styleType === "secondary") {
    return secondaryBtn;
  } else if (styleType === "warning") {
    return warningBtn;
  } else if (styleType === "error") {
    return errorBtn;
  } else {
    return primaryBtn;
  }
}

export default getButtonStyling;
