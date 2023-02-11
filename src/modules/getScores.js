import { url } from './URL.js';
import display from './show.js';

const getScores = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const { result } = data;
  display(result);
};

export default getScores;
