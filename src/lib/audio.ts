import { Howl } from 'howler';

const sounds = {
  typing: new Howl({ src: ['/audio/typing-klik.mp3'], volume: 0.2 }),
  success: new Howl({ src: ['/audio/success.mp3'], volume: 0.7 }),
  error: new Howl({ src: ['/audio/error.mp3'], volume: 0.6 }),
};

export const playTypingSound = () => sounds.typing.play();
export const playSuccessSound = () => sounds.success.play();
export const playErrorSound = () => sounds.error.play();