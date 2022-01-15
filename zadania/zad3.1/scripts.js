const draggable_list = document.getElementById('draggable-list');
const addElement = document.getElementById('add_element');
const listElements = [1, 2, 3];
const listItems = [];
let dragStartIndex;
createList();

function createList() {
    [...listElements]
        .forEach((x, index) => {
            addElementToList(index)
        });
    addEventListeners();
}

function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver(e) {
    console.log('over');
    e.preventDefault();
}

function dragDrop() {
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    });
}

function addElementToList(index) {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-index', index);
    listItem.innerHTML = `
        <div class="draggable" draggable="true">
          <span class="number">${index + 1}</span>
        </div>
      `;
    listItems.push(listItem);
    draggable_list.appendChild(listItem);
    addEventListeners()
}

addElement.addEventListener('click', addElementF);

function addElementF() {
    addElementToList(listItems.length)
}

const generate = document.getElementById('generate');
const generatedBox = document.getElementById('generated-box');
let currentColor;

function generateBox() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    currentColor = randomColor;
    console.log(randomColor);
    generatedBox.addEventListener('drop', dragLeave2);
    generatedBox.innerHTML = `
    <div draggable="true" style="height: 100px; width: 100px; background: #${randomColor}">
    </div>
    `;
}

generate.addEventListener('click', generateBox);
const draggable_list2 = document.getElementById('draggable-list2');

function addElementToList2() {
    const listItem = document.createElement('li');
    listItem.innerHTML = ` <div class="list2-el" draggable="true" style="pointer-events: none;height: 100px; width: 100px; background: #${currentColor}">
    </div>
      `;
    draggable_list2.appendChild(listItem);
}

function dragLeave2(ev) {
    ev.preventDefault();
    console.log('drop')

}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    addElementToList2();
}