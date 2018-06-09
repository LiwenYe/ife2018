function checkAll(node){
    let childs = node.parentNode.children;
    for (let i=0;i<childs.length;i++){
        if (childs[i].tagName.toLowerCase() === "input") {
            childs[i].checked = true;
        }else {
            continue;
        }
    }

}

function changeCheck(node) {
    let childs = node.parentNode.children;
    let arr =[];
    for (let i=0;i<childs.length-2;i++){
        if (childs[i].checked === true){
            arr.push(childs[i]);
        }
    }
    if (arr.length === 3){
        for (let i=0;i<childs.length;i++){
            if (childs[i].id === "全选"){
                childs[i].checked = true;
            }
        }
    }else {
        childs[childs.length - 2].checked = false;
    }
}