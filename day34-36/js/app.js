//初始化
// 点击创建表格
let regionPart = document.querySelector("#region-select");
let productPart = document.querySelector("#product-select");
let tablePart = document.querySelector("#table-wrapper");


checkBox(regionPart,itemsR,"allRegion");
checkBox(productPart,itemsP,"allProduct");
choose(regionPart,"allRegion");
choose(productPart,"allProduct");
createTable(getData());

createSVG(getData());
createCanvas(getData());



regionPart.addEventListener('click',function () {
    createTable(getData());
    exchange12();
    mergeTr(1,0);
    createSVG(getData());
    createCanvas(getData());
},false);
productPart.addEventListener('click',function () {
    createTable(getData());
    exchange12();
    mergeTr(1,0);
    createSVG(getData());
    createCanvas(getData());
},false);
tablePart.addEventListener('mouseover',function (event) {
    var e = event || window.event,
        target = e.target || e.srcElement;
    let datas = getData(),
        data=[];
    if (target.tagName.toLowerCase() === "td"){
        let tr = target.parentNode;
        data.push(datas[tr.rowIndex-1]);
    }
   createCanvas(data);
    createSVG(data);
},false);
tablePart.addEventListener('mouseout',function () {
    createSVG(getData());
    createCanvas(getData());
})