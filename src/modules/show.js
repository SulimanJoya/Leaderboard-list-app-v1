const display = async (scores) => {
  const record = document.querySelector('#score-record');
  record.innerHTML = '';
  scores.forEach(({ user, score }) => {
    record.innerHTML += `
         <li>${user}: ${score}</li>
          `;
  });
};

export default display;
