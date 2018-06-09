var tablePart = document.querySelector("#table-wrapper");
var table = document.createElement('table');
var details = [];

function createTable() {
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
                   <th>12月</th>`;
    table.appendChild(tr);

    //获取表格内容
    details = getData();
    //向表格内添加内容
    for (let i=0;i<details.length;i++){
        let tr = document.createElement('tr');
        for (let key in details[i]) {
            if (!Array.isArray(details[i][key])) {
                let td = document.createElement('td');
                td.textContent = details[i][key];
                tr.appendChild(td);
            }else {
                for (let j=0;j<details[i][key].length;j++){
                    let td = document.createElement('td');
                    td.textContent = details[i][key][j];
                    tr.appendChild(td);
                }
            }
        }
        table.appendChild(tr);
    }
    tablePart.appendChild(table);
}