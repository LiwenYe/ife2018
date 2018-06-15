//表格
//获取表格数据
function getData() {
    let checkedReg = regionPart.querySelectorAll("input[type='checkbox']:checked");
    let checkedPro = productPart.querySelectorAll("input[type='checkbox']:checked");
    //将checkAll（nodeList）转换成数组
    let arr1 = Array.prototype.slice.call(checkedReg,0);
    let arr2 = Array.prototype.slice.call(checkedPro,0);
    //将符合限制条件的内容放到数组中，方便生成表格内容
    let items = [];
    for (let i=0;i<arr1.length;i++){
        arr1[i] = arr1[i].id;
    }
    for (let i=0;i<arr2.length;i++){
        arr2[i] = arr2[i].id;
    }
    for (let i=0;i<sourceData.length;i++){
        if (arr2.length === 0) {
            if (arr1.indexOf(sourceData[i].region) !== -1) {
                items.push(sourceData[i]);
            }
        }else if (arr1.length === 0){
            if (arr2.indexOf(sourceData[i].product) !== -1) {
                items.push(sourceData[i]);
            }
        } else {
            if (arr1.indexOf(sourceData[i].region) !== -1 && arr2.indexOf(sourceData[i].product) !== -1){
                items.push(sourceData[i]);
            }
        }
    }
    return items;
}
//创建表格
var tableShow = document.querySelector("#table-wrapper");
var table = document.createElement('table');
function createTable(details){
    //每次创建之前清空一下，防止多次创建表头
    table.innerHTML = "";

    var tr = document.createElement('tr');
    tr.innerHTML = `<th>商品</th>
                            <th>地区</th>
                            <th>1月</th>
                            <th>2月</th>
                            <th>3月</th>
                            <th>4月</th>
                            <th>5月</th>
                            <th>6月</th>
                            <th>7月</th>
                            <th>8月</th>
                            <th>9月</th>
                            <th>10月</th>
                            <th>11月</th>
                            <th>12月</th>`
    table.appendChild(tr);


    for (let i=0;i<details.length;i++){
        let tr = document.createElement('tr');
        for (let key in details[i]) {
            if (Array.isArray(details[i][key])){
                for (let j=0;j<details[i][key].length;j++){
                    let td = document.createElement('td');
                    td.textContent = details[i][key][j];
                    tr.appendChild(td);
                }
            } else {
                let td = document.createElement('td');
                td.textContent = details[i][key];
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }

    tableShow.appendChild(table);
}