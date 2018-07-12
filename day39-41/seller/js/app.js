let regionPart = document.getElementById("regions"),
    productPart = document.getElementById('products');

init();
let data = getData(sourceData);

createTable(data);
createBars(data);
createLines(data);

regionPart.addEventListener('change',function (event) {
    checkAll(regionPart,event);
    let hash = getState();
    window.location.hash = hash;
    // let search = getState();
    // window.history.pushState("state",null,'?'+search);
    let data = getData(sourceData);
    createBars(data);
    createLines(data);
    createTable(data);
},false);
productPart.addEventListener('change',function (event) {
    checkAll(productPart,event);
    let hash = getState();
    window.location.hash = hash;
    // let search = getState();
    // window.history.pushState("state",null,'?'+search);
    let data = getData(sourceData);
    createBars(data);
    createLines(data);
    createTable(data);
},false);