import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
};

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.02, 
    },
  },
};
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedText = ({ text }: AnimatedTextProps) => {
  return (
    <motion.h3
      className="whitespace-pre-wrap text-green-500 font-mono text-lg"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={char + "-" + index} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.h3>
  );
};

export default AnimatedText;