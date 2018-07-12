let regions = document.querySelectorAll("#regions input"),
    products = document.querySelectorAll("#products input");
function getState() {
    let hashNum = "";
    for (let i = 0; i < 3; i++) {
        if (regions[i].checked) {
            hashNum = hashNum + '1';
        } else {
            hashNum = hashNum + '0';
        }
    }
    for (let i = 0; i < 3; i++) {
        if (products[i].checked) {
            hashNum = hashNum + '1';
        } else {
            hashNum = hashNum + '0';
        }
    }
    return hashNum;
}

function setState() {
    let hash = window.location.hash.slice(1);
    for (let i=0;i<hash.length;i++){
        if (i<3){
            if (hash[i] === '0') {
                regions[i].checked = false;
            }else {
                regions[i].checked = true;
            }
        } else {
            if (hash[i] === '0') {
                products[i-3].checked = false;
            }else {
                products[i-3].checked = true;
            }
        }
    }
}


function changeHash() {
    setState();

    let data = getData(sourceData);
    createBars(data);
    createLines(data);
    createTable(data);
}

window.onhashchange = changeHash;