import TextInputForm from "./Component/TextInputForm/textInputForm";
function App() {
  return (
    <>
      <div className="text-3xl text-center font-semibold">Welcome to HangMan</div>
      <TextInputForm  onSubmit={(value)=>console.log("submitted with the value",value)}/>
    </>
  );
}

export default App;
