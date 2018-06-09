function changeTd() {
    var regionCheck = document.querySelector("#region-select").querySelectorAll("input[type='checkbox']:checked");
    var productCheck = document.querySelector("#product-select").querySelectorAll("input[type='checkbox']:checked");

    for (let i=0;i<table.rows.length;i++){
        if (regionCheck.length === 1 && productCheck.length > 1){
            let item = table.rows[i].cells[0].textContent;
            table.rows[i].cells[0].textContent = table.rows[i].cells[1].textContent;
            table.rows[i].cells[1].textContent =item;
        }
    }
}
