import PuzzleDisplay from "./PuzzleDisplay";
import UserInput from "./UserInput";
import { useGameLogic } from "../../hooks/useGameLogic";

const Terminal = () => {
  const { gameState, currentPuzzle, timeLeft, handleAnswerSubmit } = useGameLogic();

  return (
    <div className="w-full max-w-4xl min-h-[600px] bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-2xl border border-green-500/20 flex flex-col">

      <div className="bg-gray-800 h-10 flex items-center px-4 border-b border-green-500/20 flex-shrink-0">
        <div className="flex space-x-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
        </div>
        <p className="text-gray-400 font-mono text-center flex-1">
          -- HACKER-TERMINAL --
        </p>
        <p className="text-yellow-400 font-mono">TIME: {timeLeft}s</p>
      </div>

      <div className="p-4 flex-1">
        {gameState === "playing" && (
          <>
            <PuzzleDisplay text={currentPuzzle.text} />
            <UserInput onSubmit={handleAnswerSubmit} isDisabled={false} />
          </>
        )}
        {gameState === "won" && (
          <PuzzleDisplay text="ACCESS GRANTED.\n\nAll systems bypassed. You are in.\n\nCongratulations, Agent." />
        )}
        {gameState === "lost" && (
          <PuzzleDisplay text="ACCESS DENIED.\n\nSystem lockout initiated. Traces wiped.\n\nTry again." />
        )}
      </div>
    </div>
  );
};

export default Terminal;