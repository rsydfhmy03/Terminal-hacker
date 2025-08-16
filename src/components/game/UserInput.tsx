import { useState } from "react";
import { playTypingSound } from "../../lib/audio";

type UserInputProps = {
  onSubmit: (answer: string) => void;
  isDisabled: boolean;
};

const UserInput = ({ onSubmit, isDisabled }: UserInputProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return; 
    onSubmit(value);
    setValue(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4">
      <span className="text-green-500 font-mono text-lg mr-2">{">"}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => playTypingSound() && setValue(e.target.value)}
        disabled={isDisabled}
        className="bg-transparent border-none text-green-500 font-mono text-lg focus:outline-none flex-1"
        autoFocus 
      />
    </form>
  );
};

export default UserInput;