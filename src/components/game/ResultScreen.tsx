import { motion } from "framer-motion";

type ResultScreenProps = {
  gameState: "won" | "lost";
  onRestart: () => void;
};

// ASCII art untuk tema hacker
const skullArt = `
    .---.
   / ,_  \\
  |\\/ '"'|
  \\ '/, /
   '---'
`;

const checkmarkArt = `
      \\   /
       \\ /
        V
`;

const ResultScreen = ({ gameState, onRestart }: ResultScreenProps) => {
  const isWin = gameState === "won";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.pre
        className={`font-mono text-4xl ${isWin ? 'text-green-400' : 'text-red-500'}`}
        variants={itemVariants}
      >
        {isWin ? checkmarkArt : skullArt}
      </motion.pre>
      
      <motion.h2
        className={`font-mono text-5xl font-bold mt-4 ${isWin ? 'text-green-400' : 'text-red-500'}`}
        variants={itemVariants}
      >
        {isWin ? "ACCESS GRANTED" : "ACCESS DENIED"}
      </motion.h2>
      
      <motion.p className="text-gray-300 font-mono mt-2" variants={itemVariants}>
        {isWin ? "Congratulations, Agent." : "System lockout initiated."}
      </motion.p>
      
      <motion.button
        onClick={onRestart}
        className="mt-8 font-mono px-6 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors duration-300"
        variants={itemVariants}
      >
        RESTART MISSION
      </motion.button>
    </motion.div>
  );
};

export default ResultScreen;