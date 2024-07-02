const gridsizeelem = document.getElementById('gridsize');
const gobutton = document.getElementById('sizebutton');
const mcontainer = document.getElementById('maincontainer');

gobutton.addEventListener('click', () => {
    mcontainer.innerHTML = "";
    let sizer = gridsizeelem.value;
    if (isNaN(sizer)) {
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
                celldiv.style.backgroundColor = '#EA0';
            })
            celldiv.addEventListener('mouseenter', (e) => {
                if (e.buttons === 1) {
                    celldiv.style.backgroundColor = '#EA0';
                }
            })
            rowdiv.append(celldiv);
        }
        mcontainer.append(rowdiv);
    }
})