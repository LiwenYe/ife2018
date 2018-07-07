let tablePart = document.getElementById("table-wrapper")
let table = document.createElement('table');
function createTable(data) {
    table.innerHTML = "";

    let tr = document.createElement('tr');
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

    for (let i=0;i<data.length;i++){
        let tr = document.createElement("tr");
        for (let key in data[i]){
            if (Array.isArray(data[i][key])){
                for (let j=0;j<data[i][key].length;j++){
                    let td = document.createElement('td');
                    let img = document.createElement('img'),
                        inputData = document.createElement('input'),
                        inputConfirm = document.createElement('input'),
                        inputCancel = document.createElement('input'),
                        textCont = document.createTextNode(data[i][key][j]);

                    img.setAttribute('src','edit.png');
                    inputData.setAttribute('type','text');
                    inputData.setAttribute('value',data[i][key][j]);
                    inputConfirm.setAttribute('type','button');
                    inputConfirm.setAttribute('value','确认');
                    inputConfirm.setAttribute('class','confirm');
                    inputCancel.setAttribute('type','button');
                    inputCancel.setAttribute('value','取消');
                    inputCancel.setAttribute('class','cancel');

                    td.appendChild(inputData);
                    td.appendChild(inputConfirm);
                    td.appendChild(inputCancel);
                    td.appendChild(img);
                    td.appendChild(textCont);
                    tr.appendChild(td);

                    img.onclick = function (event) {
                        let e = event || window.event,
                            target = e.target;
                        target.parentNode.children[0].setAttribute("style", "display:block");
                        target.parentNode.children[0].focus();
                        target.parentNode.children[0].select();
                        target.parentNode.children[1].setAttribute("style", "display:block");
                        target.parentNode.children[2].setAttribute("style", "display:block");
                        target.parentNode.children[3].setAttribute("style", "display:none");

                        target.parentNode.style.textAlign = "left";

                    };
                    inputConfirm.onclick = function(event){
                        let e = event || window.event,
                            target = e.target;
                        let val = target.parentNode.children[0].value,
                            temp = target.parentNode.textContent;
                        if (isNaN(val)){
                            alert("请输入数字！");
                            target.parentNode.children[0].value = temp;
                        }else if(val === temp){
                            alert("未作修改！");
                        }else {
                            let changeData = {},
                            sales = [];
                            if (val !== temp) {
                                let tr = target.parentNode.parentNode;
                                if (table.rows[0].cells[0].innerHTML === "商品") {
                                    changeData["product"] = tr.cells[0].textContent;
                                    changeData["region"] = tr.cells[1].textContent;
                                } else {
                                    changeData["region"] = tr.cells[0].textContent;
                                    changeData["product"] = tr.cells[1].textContent;
                                }
                                for (let i = 2; i < tr.cells.length; i++) {
                                    sales.push(tr.cells[i].children[0].value);
                                }
                                changeData["sale"] = sales;
                            }
                            storage(changeData);
                        }
                        createTable(getData(sourceData));
                        exchangeTd();
                    };
                    inputCancel.onclick = function(){
                        let e = event || window.event,
                            target = e.target;
                        target.parentNode.childNodes[0].value = target.parentNode.textContent;
                    }
                    inputData.onkeyup = function(event){
                        let e = event || window.event,
                            target = e.target;
                        if (e.keyCode === 13){
                            inputConfirm.onclick();
                        }else if (e.keyCode === 27){
                            inputCancel.onclick();
                            target.parentNode.children[0].setAttribute("style", "display:none");
                            target.parentNode.children[1].setAttribute("style", "display:none");
                            target.parentNode.children[2].setAttribute("style", "display:none");
                            target.parentNode.children[3].setAttribute("style", "display:block");
                            target.parentNode.style.textAlign = "center";
                        }
                    };
                    inputData.onblur = function (event) {
                        let e = event || window.event,
                            target = e.target;
                        setTimeout(function () {
                            target.parentNode.children[0].setAttribute("style", "display:none");
                            target.parentNode.children[1].setAttribute("style", "display:none");
                            target.parentNode.children[2].setAttribute("style", "display:none");
                            target.parentNode.children[3].setAttribute("style", "display:block");
                            target.parentNode.style.textAlign = "center";
                        },150);
                    };
                }
            }else {
                let td = document.createElement('td');
                td.textContent = data[i][key];
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }



    tablePart.appendChild(table);

}