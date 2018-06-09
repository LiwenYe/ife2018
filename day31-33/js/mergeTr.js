//当有相同项时，合并
function mergeTr(startPos,col) {
    var table = document.querySelector("table");
    for (let i=startPos;i<table.rows.length-1;i++){
        if (table.rows[startPos].cells[col].innerHTML === table.rows[i+1].cells[col].innerHTML){
            table.rows[i+1].cells[col].style.display = "none";
            table.rows[startPos].cells[col].rowSpan += 1;
        }else {
            mergeTr(i+1,0);
        }
    } 
}
