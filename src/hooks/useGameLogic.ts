import { useState, useEffect, useCallback } from "react";
import { playSuccessSound, playErrorSound } from "../lib/audio";

export interface Puzzle {
  id: number;
  text: string;
  answer: string;
}

type GameState = "loading" | "playing" | "won" | "lost";

export const useGameLogic = () => {
  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [gameState, setGameState] = useState<GameState>("loading"); 
  const [timeLeft, setTimeLeft] = useState(60);

  const loadPuzzles = useCallback(async () => {
    try {
      const response = await fetch('/puzzles.json');
      const data: Puzzle[] = await response.json();
      setPuzzles(data);
      setGameState("playing"); 
    } catch (error) {
      console.error("Failed to load puzzles:", error);
    }
  }, []);

  useEffect(() => {
    loadPuzzles();
  }, [loadPuzzles]);
  useEffect(() => {
    if (timeLeft <= 0) {
      setGameState("lost");
      return;
    }
    if (gameState !== "playing") {
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, gameState]);

  const handleAnswerSubmit = (submittedAnswer: string) => {
    if (puzzles.length === 0) return;

    const currentPuzzle = puzzles[currentLevel];
    if (submittedAnswer.toLowerCase() === currentPuzzle.answer.toLowerCase()) {
        playSuccessSound();
      if (currentLevel === puzzles.length - 1) {
        setGameState("won");
      } else {
        setCurrentLevel(currentLevel + 1);
      }
    } else {
      playErrorSound();
      setTimeLeft(timeLeft > 10 ? timeLeft - 10 : 0);
    }
  };

    const restartGame = () => {
    setCurrentLevel(0);
    setTimeLeft(60);
    setGameState("playing");
  };

  return {
    gameState,
    currentPuzzle: puzzles[currentLevel],
    timeLeft,
    handleAnswerSubmit,
    restartGame,
  };
};