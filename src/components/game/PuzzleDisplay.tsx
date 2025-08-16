type PuzzleDisplayProps = {
  text: string;
};

const PuzzleDisplay = ({ text }: PuzzleDisplayProps) => {
  return (
    <div className="text-green-500 font-mono text-lg whitespace-pre-wrap">
      {text}
    </div>
  );
};

export default PuzzleDisplay;