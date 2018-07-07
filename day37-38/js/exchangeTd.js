function exchangeTd() {
    let regionSelects = document.querySelectorAll("#region input[type=checkbox]:checked");
    let productSelects = document.querySelectorAll("#product input[type=checkbox]:checked");

    if (regionSelects.length === 1 && productSelects.length >1){
        for (let i=0;i<table.rows.length;i++){
            let temp = table.rows[i].cells[0].textContent;
            table.rows[i].cells[0].textContent = table.rows[i].cells[1].textContent;
            table.rows[i].cells[1].textContent = temp;
            mergeTd();
        }
    }else {
        mergeTd();
    }
}
function mergeTd() {
    let startPos = 0;
    for (let i = startPos;i<table.rows.length-1;i++){
        if (table.rows[i].cells[0].textContent === table.rows[i+1].cells[0].textContent){
            table.rows[startPos].cells[0].rowSpan += 1;
            table.rows[i+1].cells[0].style.display = "none";
        }else {
            startPos = i + 1;
        }
    }
}