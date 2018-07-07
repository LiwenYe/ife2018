function getData(data) {
    let dataShow = [];
    let storage = window.localStorage;

    let regionSelects = document.querySelectorAll("#region input[type=checkbox]:checked");
    let productSelects = document.querySelectorAll("#product input[type=checkbox]:checked");

    let region = Array.prototype.slice.call(regionSelects,0);
    let product = Array.prototype.slice.call(productSelects,0);

    for (let i=0;i<region.length;i++){
        if (region[i].id !== "all1") {
            region[i] = region[i].id;
        }else {
            region.splice(i,1);
        }
    }
    for (let i=0;i<product.length;i++){
        if (product[i].id === "all2") {
            product.splice(i,1);
        }else {
            product[i] = product[i].id;
        }
    }
    for (let i=0;i<data.length;i++){
        if (region.indexOf(data[i].region) !== -1 && product.indexOf(data[i].product) !== -1){
            dataShow.push(data[i]);
        }
    }

    if (storage.getItem("newData")){
        let json = storage.getItem("newData"),
            storageData = JSON.parse(json);
        for (let i=0;i<storageData.length;i++){
            for (let j=0;j<dataShow.length;j++){
                if (storageData[i].product === dataShow[j].product && storageData[i].region === dataShow[j].region){
                    dataShow[j].sale = storageData[i].sale;
                }
            }
        } 
    } 
    
    return dataShow;
}