import PuzzleDisplay from "./PuzzleDisplay";

const Terminal = () => {
  const currentPuzzleText = "System.Access: Granted\nWelcome, Agent.\nYour first task is to bypass the security layer.\n\nDecode the password: [ HACKTIV8 ]";

  return (
    <div className="w-full max-w-4xl h-[600px] bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-2xl border border-green-500/20 overflow-hidden">
      
      <div className="bg-gray-800 h-10 flex items-center px-4 border-b border-green-500/20">
        <div className="flex space-x-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
        </div>
        <p className="text-gray-400 font-mono text-center flex-1">
          -- HACKER-TERMINAL --
        </p>
      </div>

      <div className="p-4">
        <PuzzleDisplay text={currentPuzzleText} />
      </div>
    </div>
  );
};

export default Terminal;