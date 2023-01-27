const container = document.querySelector('#container');
const redStuff = document.createElement('p');
const blueHeader = document.createElement('h3');
const newStuff = document.createElement('div');
const divHeader = document.createElement('h1');
const meToo = document.createElement('p');

const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

redStuff.style.color = 'red';
redStuff.textContent = 'Hey, I\'m red!';

blueHeader.style.color = 'blue';
blueHeader.textContent = 'BLUE HEADER';

newStuff.style.backgroundColor = 'pink';
newStuff.style.border = '10px';
newStuff.style.borderColor = 'black';

divHeader.textContent = 'I\'m a header! in the div';

meToo.textContent = 'me too!!';

newStuff.appendChild(divHeader);
newStuff.appendChild(meToo);


container.appendChild(redStuff);

container.appendChild(blueHeader);

container.appendChild(newStuff);



