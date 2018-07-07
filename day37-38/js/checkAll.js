function checkAll(part,event) {
    let e = event || window.event,
        target = e.target || e.srcElement;

    let all = part.querySelector("input[id *=all]");
    let inputs = part.querySelectorAll("input");

    if (target.id === all.id){
        for (let i=0;i<inputs.length;i++){
            inputs[i].checked = true;
        }
    }else{
        let checkNum = 0;
        for (let i=0;i<inputs.length-1;i++){
            if (inputs[i].checked === true){
                ++checkNum;
            }
        }
        if (checkNum === 0){
            target.checked = true;
        } else if (checkNum === 3){
            all.checked = true;
        }else if (checkNum < 3){
            all.checked = false;
        }
    }
}