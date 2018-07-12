function storage(data) {
    if (window.localStorage){
        let storage = window.localStorage;
        if (storage.getItem("newData")){
            let newData = storage.getItem("newData"),
                json = JSON.parse(newData);
            for (let i=0;i<json.length;i++){
                if (json[i].product === data.product && json[i].region === data.region){
                    json[i].sale = data.sale;
                    let d2 = JSON.stringify(json);
                    storage.setItem("newData",d2);
                    return true;
                }
            }
        } else {
            let newSourceData = [];
            newSourceData.push(data);
            let d = JSON.stringify(newSourceData);
            storage.setItem("newData",d);
        }
    }
}