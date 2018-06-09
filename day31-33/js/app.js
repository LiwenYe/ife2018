//初始化
// 点击创建表格
let regionPart = document.querySelector("#region-select");
let productPart = document.querySelector("#product-select");
choose(regionPart,"allRegion");
choose(productPart,"allProduct");
regionPart.addEventListener('click',function () {
    createTable();
    exchange12();
    mergeTr(1,0)
},false);
productPart.addEventListener('click',function () {
    createTable();
    exchange12();
    mergeTr(1,0);
},false);
checkBox(regionPart,itemsR,"allRegion");
checkBox(productPart,itemsP,"allProduct");