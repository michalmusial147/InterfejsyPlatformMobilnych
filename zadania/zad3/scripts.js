const draggable_list = document.getElementById('draggable-list');
const addElement = document.getElementById('add_element');
const clear = document.getElementById('clear');
const listElements = [1, 2, 3];
const listItems = [];
let dragStartIndex;
createList();
function createList() {
    [...listElements]
        .forEach((person, index) => {
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
function addElementToList(index){
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
function addElementF(){
    addElementToList(listItems.length)
}
