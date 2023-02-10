import { gameUrl } from './URL.js';

const Game = async () => {
  const game = {
    name: 'Suliman-Game',
  };
  const response = await fetch(gameUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });
  const data = await response.json();
  return data;
};

export default Game;
