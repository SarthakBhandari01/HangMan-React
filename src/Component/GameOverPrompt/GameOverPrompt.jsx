function GameOverPrompt({ win,restart }) {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-70 text-white inset-0 p-4 absolute">
        <h1 className="text-5xl font-semibold mb-4">Game Over!</h1>
        <div className="text-3xl  text-white mb-6">{win ? `You Win` : `You Lose`}</div>
        <button
        onClick={restart}
         className="py-3 px-8 font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-lg transition-all duration-300">
          Play Again
        </button>
      </div>
    </div>
  );
}
export default GameOverPrompt;
