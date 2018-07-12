let tablePart = document.getElementById("tableWrapper"),
    table = document.createElement('table');

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
                    <th>12月</th>`;
    table.appendChild(tr);

    for(let i=0;i<data.length;i++){
        let tr = document.createElement('tr');
        for (let key in data[i]) {
            if(!Array.isArray(data[i][key])){
                let td = document.createElement('td');
                td.textContent = data[i][key];
                tr.appendChild(td);
            }else {
                for (let j=0;j<data[i][key].length;j++){
                    let td = document.createElement('td'),
                        inputData = document.createElement('input'),
                        inputConfirm = document.createElement('input'),
                        inputCancel = document.createElement('input'),
                        img = document.createElement('img');
                    td.textContent = data[i][key][j];

                    inputData.setAttribute('type','text');
                    inputData.setAttribute('value',data[i][key][j]);
                    inputConfirm.setAttribute('type','button');
                    inputConfirm.setAttribute('value','确认');
                    inputConfirm.setAttribute('class','confirm');
                    inputCancel.setAttribute('type','button');
                    inputCancel.setAttribute('value','取消');
                    inputCancel.setAttribute('class','cancel');
                    img.setAttribute('src','edit.png');
                    img.setAttribute('width','20px');
                    img.setAttribute('height','20px');

                    td.appendChild(inputData);
                    td.appendChild(inputConfirm);
                    td.appendChild(inputCancel);
                    td.appendChild(img);

                    img.onclick = function(event){
                        let e = event || window.event,
                            target = e.target || e.srcElement;
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
                            target = e.target || e.srcElement;
                        let value = target.parentNode.children[0].value,
                            temp = target.parentNode.textContent,
                            tr = target.parentNode.parentNode;
                        if (isNaN(value)){
                            alert("输入不是数字！");
                        } else if (value === temp) {
                            alert("内容未作修改！");
                        }else {
                            let changeData = {},
                                sales = [];
                            if (table.rows[0].cells[0].textContent === "商品" && table.rows[0].cells[1].textContent === "地区"){
                                changeData["product"] = table.rows[1].cells[0].textContent;
                                changeData["region"] = table.rows[1].cells[1].textContent;
                            } else{
                                changeData["region"] = table.rows[1].cells[0].textContent;
                                changeData["product"] = table.rows[1].cells[1].textContent;
                            }
                            for (let i=2;i<14;i++){
                                sales.push(tr.children[i].children[0].value);
                            }
                            changeData["sale"] = sales;
                            storage(changeData);
                        }
                        createTable(getData(sourceData));

                    };
                    inputCancel.onclick = function(event){
                        let e = event || window.event,
                            target = e.target || e.srcElement;
                        target.parentNode.children[0].value = target.parentNode.textContent;
                    };
                    inputData.onkeyup = function(event){
                        let e = event || window.event,
                            target = e.target || e.srcElement;
                        if (e.keyCode === 13){
                            inputConfirm.onclick();
                        } else if (e.keyCode === 27){
                            inputCancel.onclick();
                            target.parentNode.children[0].setAttribute("style", "display:none");
                            target.parentNode.children[1].setAttribute("style", "display:none");
                            target.parentNode.children[2].setAttribute("style", "display:none");
                            target.parentNode.children[3].setAttribute("style", "display:block");
                            target.parentNode.style.textAlign = "center";
                        }
                    }
                    inputData.onblur = function(event){
                        let e = event || window.event,
                            target = e.target || e.srcElement;
                        setTimeout(function () {
                            target.parentNode.children[0].setAttribute("style", "display:none");
                            target.parentNode.children[1].setAttribute("style", "display:none");
                            target.parentNode.children[2].setAttribute("style", "display:none");
                            target.parentNode.children[3].setAttribute("style", "display:block");
                            target.parentNode.style.textAlign = "center";
                        },120);
                    };

                    tr.appendChild(td);
                }
            }
        }
        table.appendChild(tr);
    }

    exchangeTd();
    mergeTd();

    tablePart.appendChild(table)
}

function mergeTd() {
    let startPos = 0;
    for (let i=startPos;i<table.rows.length-1;i++){
        if (table.rows[i].cells[0].textContent === table.rows[i+1].cells[0].textContent){
            table.rows[startPos].cells[0].rowSpan += 1;
            table.rows[i+1].cells[0].style.display = "none";
        }else {
            startPos = i+1;
        }
    }
}

function exchangeTd() {
    let regions = document.querySelectorAll("#regions input[type=checkbox]:checked");
    let products = document.querySelectorAll("#products input[type=checkbox]:checked");

    if (regions.length === 1 && products.length > 1){
        for (let i = 0; i<table.rows.length;i++) {
            let temp = table.rows[i].cells[0].textContent;
            table.rows[i].cells[0].textContent = table.rows[i].cells[1].textContent;
            table.rows[i].cells[1].textContent = temp;
        }
    }
}