const arr = [
  { Name: 100 },
  { Name: 20 },
  { Name: 50 },
  { Name: 78 },
  { Name: 125 },
  { Name: 77 },
  { Name: 42 },
];

const display = () => {
  const score = document.querySelector('#score-record');
  let item = '';
  for (let i = 0; i < arr.length; i += 1) {
    item += `<li>Name: ${arr[i].Name}</li>`;
  }
  score.innerHTML = item;
};

export default display;
