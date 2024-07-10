const gridSizeElem = document.getElementById('gridsize');
const goButton = document.getElementById('sizebutton');
const mcontainer = document.getElementById('maincontainer');
const colorElem = document.getElementById('pickcolor');
const rainCheck = document.getElementById('raincheck');
let selectColor = colorElem.value;

goButton.addEventListener('click', () => {
    let sizer = gridSizeElem.value;
    if (isNaN(sizer) || sizer < 1 || sizer > 100) {
        console.log('bneis');
        alert('Please enter a valid value (integer between 1-100).');
        return;
    }
    mcontainer.style.borderColor = "rgba(0,0,0,1)"
    mcontainer.innerHTML = "";
    for (let i = 0; i < sizer; i++) {
        let rowdiv = document.createElement('div');
        rowdiv.classList.add('row');
        for (let h = 0; h < sizer; h++) {

            let celldiv = document.createElement('div');
            celldiv.classList.add('cell');

            celldiv.addEventListener('mousedown', () => {
                if(rainCheck.checked) {
                    celldiv.style.backgroundColor = randomColorString();
                } else {
                celldiv.style.backgroundColor = selectColor;
                }
            })
            celldiv.addEventListener('mouseenter', (e) => {
                if (e.buttons === 1) {
                    if(rainCheck.checked) {
                        celldiv.style.backgroundColor = randomColorString();
                    } else {
                    celldiv.style.backgroundColor = selectColor;
                    }             
                }
            })

            rowdiv.append(celldiv);
        }
        mcontainer.append(rowdiv);
    }
})

colorElem.addEventListener('input', () => {
    selectColor = colorElem.value;
})

function random8bitDec() {
    return Math.round(Math.random() * 255);
}

function randomColorString() {
    return "#" + random8bitDec().toString(16) + random8bitDec().toString(16) + random8bitDec().toString(16);
}