const gridSizeElem = document.getElementById('gridsize');
const goButton = document.getElementById('sizebutton');
const mcontainer = document.getElementById('maincontainer');
const colorElem = document.getElementById('pickcolor');
let selectColor = colorElem.value;

goButton.addEventListener('click', () => {
    mcontainer.style.borderColor = "rgba(0,0,0,1)"
    mcontainer.innerHTML = "";
    let sizer = gridSizeElem.value;
    if (isNaN(sizer) || sizer < 1 || sizer > 100) {
        console.log('bneis');
        return;
    }
    for (let i = 0; i < sizer; i++) {
        let rowdiv = document.createElement('div');
        rowdiv.classList.add('row');
        for (let h = 0; h < sizer; h++) {

            let celldiv = document.createElement('div');
            celldiv.classList.add('cell');

            celldiv.addEventListener('mousedown', () => {
                celldiv.style.backgroundColor = selectColor;
            })
            celldiv.addEventListener('mouseenter', (e) => {
                if (e.buttons === 1) {
                    celldiv.style.backgroundColor = selectColor;                    
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