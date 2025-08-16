export interface Puzzle {
  id: number;
  text: string;
  answer: string;
}

export const puzzles: Puzzle[] = [
  {
    id: 1,
    text: "System.Access: Granted\nWelcome, Agent.\nYour first task is to bypass the security layer.\n\n> Decode the password: [ HACKTIV8 ]",
    answer: "HACKTIV8",
  },
  {
    id: 2,
    text: "Layer 1 Bypassed. Good.\nNow, decrypt the communication frequency.\nIt's the language of the web, but for styling.\n\n> What is it? [ _ _ _ ]",
    answer: "CSS",
  },
  {
    id: 3,
    text: "Frequency Decrypted. Final challenge.\nTo gain full access, name the core technology that allows for interactive, component-based UIs.\n\n> Identify the library: [ R_ _ _ _ ]",
    answer: "REACT",
  },
];