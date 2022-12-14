'use strict';

const dataList = ['Petya', 'Dima', 'Yuriy', 'Sergey', 'Maxim', 'Andrey'];

const sortBtn = document.querySelector('#sortBtn');
const list = document.querySelector('#list');


function outputData() {
dataList.forEach(e => {
  let li = document.createElement('li');
  li.innerHTML += e;
  list.append(li);
});
}
outputData();

sortBtn.addEventListener('click', () => {
list.innerHTML = '';

dataList.sort();

outputData();

sortBtn.style.display = 'none';
hr.style.display = 'none';
});