let cus = document.getElementById('hall').getElementsByTagName('img')[0];
let orderPart = document.getElementById('orderList');
let orderDiv = document.getElementById('orderDiv');
let words = document.getElementById('customer_words');
let wordsTime = document.getElementById('cusTime');
let dishes = [],index=0;

function Customer(id,orders) {
    this.id = id;
    this.orders = orders;
    this.eatList = [];
}
Customer.prototype.orderDish = function(orders){
    this.orders = orders;
    let dishes = [];
    for(let i=0;i<this.orders.length;i++){
        dishes.push(this.orders[i].name);
        let li = document.createElement('li');
        li.textContent = this.orders[i].name;
        orderPart.appendChild(li);
    }
    this.eatList = dishes;
    words.textContent = "您好，我要"+dishes.toString();
    waiter.work(this.orders);
    setTimeout(function () {
        words.textContent = "等待";
    },1000);
};
Customer.prototype.eat = function (dish) {
    dishes.push(dish);
    let eatL = this.eatList;
    let orders = this.orders;
    console.log(eatL);
    words.textContent = "正在吃："+dishes.toString();
    new Promise(function (resolve) {
        setTimeout(function () {
            resolve(dish);
        },3000)}).then(function (value) {
            words.textContent = value+"已吃完";
            orderPart.children[index++].textContent += '  √';
            dishes.shift();
            eatL.shift();
            if (eatL.length == 0){
                words.textContent = "吃完了，服务员，结账！";
                index=0;
                waiter.collectMoney(orders);
            }
        });

};
Customer.prototype.pay = function(payMoney){
    setTimeout(function () {
        words.textContent = "支付:" +payMoney + "元";
        ifeRestaurant.updateMoney(payMoney);
        customer.leave();
    },1000);

};
Customer.prototype.leave = function () {
    setTimeout(function () {
        queenPart.removeChild(customerDiv[0]);
        words.textContent = "";
        orderPart.textContent = "";
        orderDiv.style.display = 'none';
        waiter.sayBay();
    },1000);

};

function updateCustomerImg() {
    let customerImg = customerDiv[0];
    customerImg.setAttribute('class','customerPosition');
}

function  comeACustomer(){
    waiter.welcome();
    customer = customers[0];
    updateCustomerImg();
    customers.shift();
    let count = 3;
    let dishesNum = Math.floor(Math.random()*5),
        dishes = [];
    setTimeout(function () {
        waiter.WaiterCustomer();
        console.log("顾客"+customer.id+"想想点什么好呢");
        words.textContent = "想想点什么好呢";
        orderDiv.style.display = 'block';
        for (let i=0;i<dishesNum;i++){
            let index = Math.floor(Math.random()*menu.length),
                dish = menu[index];
            if (dishes.indexOf(dish) === -1) {
                dishes.push(dish);
            }
        }
        if (dishes.length !== 0) {//有时会没有产生点的菜，具体原因不知
            wordsTime.textContent = count;
            new Promise(function (resolve) {
                let t = setInterval(function () {
                    count -= 1;
                    if (count <= 0) {
                        wordsTime.textContent = "";
                        clearInterval(t);
                    } else {
                        wordsTime.textContent = count;
                    }
                }, 1000);
                setTimeout(function () {
                    resolve(dishes);
                }, 3000);
            }).then(function (dishes) {
                customer.orderDish(dishes,customer);
            });
        }else{
            for (let i=0;i<dishesNum;i++){
                let index = Math.floor(Math.random()*menu.length),
                    dish = menu[index];
                if (dishes.indexOf(dish) === -1) {
                    dishes.push(dish);
                }
            }
        }
    },1000);
}