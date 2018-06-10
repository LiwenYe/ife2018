//创建选项列表
let itemsR = [];//区域的选项数组
let itemsP =[];//产品的选项数组
function getItems(strict,arr) {//strict:属性
    for (let i=0;i<sourceData.length;i++){
        if (arr.indexOf(sourceData[i][strict]) === -1){
            arr.push(sourceData[i][strict]);
        }
    }
    return arr;
}

itemsR = getItems("region",itemsR);
itemsP = getItems("product",itemsP);

function checkBox(part,arr,allId) {//part:多选项放置区域
    for (let i=0;i<arr.length;i++){
        let input = document.createElement('input');
        input.setAttribute('id',arr[i]);
        input.setAttribute('type','checkbox');
        part.appendChild(input);
        let label = document.createElement('label');
        label.setAttribute('for',arr[i]);
        label.textContent = arr[i];
        part.appendChild(label);
    }
    //创建全选
    let input = document.createElement('input');
    input.setAttribute('id',allId);
    input.setAttribute('type','checkbox');
    part.appendChild(input);
    let label = document.createElement('label');
    label.setAttribute('for',allId);
    label.textContent = "全选";
    part.appendChild(label);

    //各个部分选中一个做开始的预览
    let reg = part.querySelectorAll("input");
    var r1 = Math.floor(Math.random()*3);
    reg[r1].checked = true;
}
//全选
function choose(part,allId) {
    part.addEventListener('click',function (event) {
        let e = event || window.event,
            target = e.target || e.srcElement;
        let allOptions = part.querySelectorAll("input");
        let all = document.getElementById(allId);
        if (target.id === allId){
            for (let i=0;i<allOptions.length;i++){
                allOptions[i].checked = true;
            }
        } else {
            let checkedArr = [];
            for (let i = 0; i < allOptions.length - 1; i++) {
                if (allOptions[i].checked === true) {
                    checkedArr.push(allOptions[i]);
                }
            }
            if (checkedArr.length === 0){
                target.checked = true
            } else if (checkedArr.length === 3){
                all.checked = true;
            }else {
                all.checked = false;
            }
        }
    },false);
}