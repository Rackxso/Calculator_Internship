//Document Container
const mainContainer = document.querySelector(".mainContainer");

//Header container
const headerContainer = document.createElement("h1");
headerContainer.classList.add("headerContainer");
headerContainer.textContent = "Calculator";

//Calculator Container
const calContainer = document.createElement("div");
calContainer.classList.add("calContainer");

//Display Container
const display = document.createElement("div");
display.classList.add("display");

//Grid Container
const calGridContainer = document.createElement("div");
calGridContainer.classList.add("calGridContainer");

calContainer.appendChild(display);
calContainer.appendChild(calGridContainer);
mainContainer.appendChild(headerContainer);
mainContainer.appendChild(calContainer);

//Calculator buttons
function calcButtons() {
    const calcBtnElements = ["A/C","+/-","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="];
    const buttonGrid = document.querySelector(".calGridContainer");
    
    let gridWidth = 400 / 4;
    let gridHeight = 350 / 5;
    let zeroWidth = gridWidth * 2;

    for (let i = 0; i < calcBtnElements.length; i++ ) {

        //Button creation
        const btn = document.createElement("button");

            if(["A/C","+/-","%"].includes(calcBtnElements[i])){
                btn.classList.add("specOpButton");

            }else if(["/","*","-","=","+"].includes(calcBtnElements[i])) {
                btn.classList.add("operatorButton");

            }else {
                btn.classList.add("button");
            };
            
        btn.textContent = calcBtnElements[i];
        btn.dataset.choice = calcBtnElements[i];

        //Button size     
        if (calcBtnElements[i] == "0") {
            btn.style.width = `${zeroWidth}px`;
            btn.style.height = `${gridHeight}px`;
        }else {
            btn.style.width = `${gridWidth}px`;
            btn.style.height = `${gridHeight}px`;
        };
        buttonGrid.appendChild(btn);
    };
};

calcButtons();
