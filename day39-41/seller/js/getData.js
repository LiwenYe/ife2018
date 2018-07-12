
function getData(data) {
  let region = document.querySelectorAll("#regions input:checked");
  let product = document.querySelectorAll("#products input:checked");

  let arr1 = Array.prototype.slice.call(region,0);
  let arr2 = Array.prototype.slice.call(product,0);

  let chooseData = [];
  let storage = window.localStorage;

  for (let i=0;i<arr1.length;i++){
      if (arr1[i].value === "全选"){
          arr1.splice(i,1);
      }else {
          arr1[i] = arr1[i].value;
      }
  }
  for (let i=0;i<arr2.length;i++){
      if (arr2[i].value === "all"){
          arr2.splice(i,1);
      }else {
          arr2[i] = arr2[i].value;
      }
  }

  for (let i=0;i<data.length;i++){
      if (arr1.indexOf(data[i].region)!==-1 && arr2.indexOf(data[i].product)!==-1){
          chooseData.push(data[i]);
      }
  }

  if (storage.getItem("newData")) {
      let newJSONData = storage.getItem("newData"),
          newData = JSON.parse(newJSONData);
      for (let i = 0; i < newData.length; i++) {
          for (let j = 0; j < chooseData.length; j++) {
              if (newData[i].product === chooseData[j].product && newData[i].region === chooseData[j].region) {
                  chooseData[j].sale = newData[i].sale;
              }
          }
      }
  }

  return chooseData;
}
