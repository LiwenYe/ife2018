//修改表格尺寸
function mergeTr(startPos,col) {
    let table = document.querySelector("table");
    for (let i=startPos;i<table.rows.length-1;i++){
        if (table.rows[startPos].cells[col].innerHTML === table.rows[i+1].cells[col].innerHTML){
            table.rows[i+1].cells[col].style.display = 'none';
            table.rows[startPos].cells[col].rowSpan += 1;
        } else {
            mergeTr(i+1,col);
        }
    }
}
//当只有一个地区被选择，多于一个产品被选择时，交互第一、二列
function exchange12() {
    let regionChecked = regionPart.querySelectorAll("input[type='checkbox']:checked");
    let productChecked = productPart.querySelectorAll("input[type='checkbox']:checked");
    let table = document.querySelector("table");
    if (regionChecked.length === 1 && productChecked.length > 1){
        for (let i=1;i<table.rows.length;i++) {
            let item = table.rows[i].cells[0].textContent;
            table.rows[i].cells[0].textContent = table.rows[i].cells[1].textContent;
            table.rows[i].cells[1].textContent = item;
        }
    }
}