import AnimatedText from "../ui/AnimatedText";

type PuzzleDisplayProps = {
  text: string;
};

const PuzzleDisplay = ({ text }: PuzzleDisplayProps) => {
  return (
    <div>
      {text.split("\n").map((line, index) => (
        <AnimatedText key={index} text={line || "\u00A0"} /> 
      ))}
    </div>
  );
};

export default PuzzleDisplay;