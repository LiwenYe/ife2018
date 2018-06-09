/*获取多选列表选中部分的表格内容*/
let list=[];
function getData() {
    let checks = document.querySelectorAll("input[type='checkbox']:checked");
    list = [];

    let arr=Array.prototype.slice.call(checks,0);
    for (let i=0;i<arr.length;i++){
        if (arr[i].id === "全选"){
            continue;
        }
        arr[i] = arr[i].id;
    }

    for (let i=0;i<sourceData.length;i++){
        if (arr.indexOf(sourceData[i].region) !== -1 && arr.indexOf(sourceData[i].product) !== -1){
            list.push(sourceData[i]);
        }
    }
    return list;
}