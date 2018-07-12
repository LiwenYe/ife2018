function init() {
    let regions = document.querySelectorAll("#regions input"),
        products = document.querySelectorAll("#products input");
    // if (!window.location.hash) {
    //     let rand1 = Math.floor(Math.random() * 3),
    //         rand2 = Math.floor(Math.random() * 3);
    //     regions[rand1].checked = true;
    //     products[rand2].checked = true;
    //     let hashNum = "";
    //     for (let i = 0; i < 3; i++) {
    //         if (regions[i].checked) {
    //             hashNum = hashNum + '1';
    //         } else {
    //             hashNum = hashNum + '0';
    //         }
    //     }
    //     for (let i = 0; i < 3; i++) {
    //         if (products[i].checked) {
    //             hashNum = hashNum + '1';
    //         } else {
    //             hashNum = hashNum + '0';
    //         }
    //     }
    //     window.location.hash = hashNum;
    // }else{
    //     changeHash();
    // }
    let rand1 = Math.floor(Math.random() * 3),
        rand2 = Math.floor(Math.random() * 3);
    regions[rand1].checked = true;
    products[rand2].checked = true;
    let searchNum = "";
    for (let i = 0; i < 3; i++) {
        if (regions[i].checked) {
            searchNum = searchNum + '1';
        } else {
            searchNum = searchNum + '0';
        }
    }
    for (let i = 0; i < 3; i++) {
        if (products[i].checked) {
            searchNum = searchNum + '1';
        } else {
            searchNum = searchNum + '0';
        }
    }
    window.history.pushState("state", null, '?' + searchNum);
}
