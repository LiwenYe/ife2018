function checkAll(part,event) {
    let e = event || window.event,
        target = e.target || e.srcElement;

    let all = part.querySelector("input[value=all]");
    let selects = part.querySelectorAll("input[type=checkbox]");

    if (target.value === "all"){
        for (let i=0;i<selects.length;i++){
            selects[i].checked = true;
        }
    }else {
        let checkedCount = 0;
        for (let i=0;i<selects.length-1;i++){
            if (selects[i].checked){
                ++checkedCount;
            }
        }
        if (checkedCount === 0){
            target.checked = true;
        } else if (checkedCount === 3){
            all.checked = true;
        }else {
            all.checked = false;
        }
    }
}