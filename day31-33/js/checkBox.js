let itemsR = [],itemsP = [];//地区,商品组合

function getItems(arr,strict) {
    for (let i=0;i<sourceData.length;i++){
        if (arr.indexOf(sourceData[i][strict]) === -1){
            arr.push(sourceData[i][strict]);
        }
    }
    arr.push("全选");
    return arr;
}

itemsR = getItems(itemsR,"region");
itemsP = getItems(itemsP,"product");

function createChecks(arr,part) {
    for (let i=0;i<arr.length;i++){
        var input = document.createElement("input");
        input.setAttribute('type','checkbox');
        input.setAttribute('id',arr[i]);
        part.appendChild(input);
        var label = document.createElement('label');
        label.setAttribute('for',arr[i]);
        label.textContent = arr[i];
        part.appendChild(label);
    }
}