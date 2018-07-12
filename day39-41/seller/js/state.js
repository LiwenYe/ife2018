// let regions = document.querySelectorAll("#regions input"),
//      products = document.querySelectorAll("#products input");
// function getState() {
//     let searchNum = "";
//     for (let i = 0; i < 3; i++) {
//         if (regions[i].checked) {
//             searchNum = searchNum + '1';
//         } else {
//             searchNum = searchNum + '0';
//         }
//     }
//     for (let i = 0; i < 3; i++) {
//         if (products[i].checked) {
//             searchNum = searchNum + '1';
//         } else {
//             searchNum = searchNum + '0';
//         }
//     }
//     return searchNum;
// }
//
// function setState() {
//     let search = window.location.search.slice(1);
//     for (let i=0;i<search.length;i++){
//         if (i<3){
//             if (search[i] === '0') {
//                 regions[i].checked = false;
//             }else {
//                 regions[i].checked = true;
//             }
//         } else {
//             if (search[i] === '0') {
//                 products[i-3].checked = false;
//             }else {
//                 products[i-3].checked = true;
//             }
//         }
//     }
// }
//
// window.onpopstate = function () {
//     setState();
//
//     createTable(getData(sourceData));
//     createBars(getData(sourceData));
//     createLines(getData(sourceData));
// };
