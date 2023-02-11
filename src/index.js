import './style.css';
import { url } from './modules/URL.js';
import getScores from './modules/getScores.js';

const refresh = document.querySelector('#refresh');
const form = document.querySelector('#form');

refresh.addEventListener('click', getScores);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('#name').value;
  const scoreInput = document.querySelector('#score').value;
  const scores = {
    user: nameInput,
    score: scoreInput,
  };
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scores),
  });

  form.reset();
});
getScores();
