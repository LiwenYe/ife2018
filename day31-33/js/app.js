var main = document.querySelector("main");
var region = document.querySelector("#region-select");
var product = document.querySelector("#product-select");
createChecks(itemsR,region);
createChecks(itemsP,product);

main.onchange = function () {
    if (event.target.id === "全选"){
        checkAll(event.target);
    }
    changeCheck(event.target);
        createTable();
        changeTd();
        mergeTr(1, 0);
}