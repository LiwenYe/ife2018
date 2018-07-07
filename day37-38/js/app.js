let regionPart = document.getElementById("region");
let productPart = document.getElementById("product");

init(regionPart,productPart);
let data = getData(sourceData);
createTable(data);
exchangeTd();

createSVG(data);
createCanvas(data);

regionPart.addEventListener('change',function (event) {
    checkAll(regionPart,event);
    createTable(getData(sourceData));
    exchangeTd();
    createSVG(getData(sourceData));
    createCanvas(getData(sourceData));
},false);
productPart.addEventListener('change',function (event) {
    checkAll(productPart,event);
    createTable(getData(sourceData));
    exchangeTd();
    createSVG(getData(sourceData));
    createCanvas(getData(sourceData));
},false);
table.addEventListener("mouseover",function (event) {
    let e = event || window.event,
        target = e.target || window.srcElement;
    let data = getData(sourceData),
        newData = [];
    while (target.tagName !== "TR" && target != table){
        if (target.tagName.toLowerCase() === 'td'){
            let tr = target.parentNode;
            newData.push(data[tr.rowIndex-1]);
            break;
        }else if (target.tagName.toLowerCase() === 'th') {
            newData = data;
        }
        target = target.parentNode;
    }
    createSVG(newData);
    createCanvas(newData);
},false);
table.addEventListener("mouseout",function (event) {
    let data = getData(sourceData);
    createSVG(data);
    createCanvas(data);
},false);
