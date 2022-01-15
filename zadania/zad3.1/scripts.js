let xHist = 0;
let yHist = 0;
const centerRectWidth = 50;
const centerRectHeight = 50;



function intersectRect(r1, r2) {
    return !(r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top);
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        xHist = e.clientX;
        yHist = e.clientY;
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        // console.log(xHist);
        // console.log(yHist);
        const object = elements.find(el => el.id === e.target.id)
        console.log(object);
        const doOverlap = false;

        if(elmnt.offsetTop - pos2 > 270) {
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            object.top = (elmnt.offsetTop - pos2);
        }
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        object.left = (elmnt.offsetLeft - pos1);
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

elements = [];

const generate = document.getElementById('generate');
const generatedBox = document.getElementById('generated-box');
let currentColor;

function generateBox() {
    const para = document.createElement("div");
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    currentColor = randomColor;
    console.log(randomColor);
    para.innerHTML = `
    <div id="element${elements.length}" draggable="true" style="top:270px; height: 100px; width: 100px; background: #${randomColor}; position:absolute;">
     <div id="mydivheader"></div>
   ${elements.length}
    </div>
    `;
    generatedBox.appendChild(para);
    dragElement(document.getElementById(`element${elements.length}`));
    elements.push({
        id: `element${elements.length}`,
        top: 0,
        left: 0
    });

}
generate.addEventListener('click', generateBox)
