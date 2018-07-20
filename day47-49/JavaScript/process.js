let moneyPart = document.getElementsByTagName('span')[0];
let queenPart = document.getElementById("queen");
let customerDiv = queenPart.getElementsByTagName('div');
let waiterDiv = document.getElementById("waiter");

let ifeRestaurant = new Restaurant({
    money:500000,
    seats:1,
    staff:[]
});
moneyPart.textContent += ifeRestaurant.money;

let t = 1000;

let waiter = new SingleWaiter("001","Tony",2000);
let cooker = SingleCooker.getInstance("001","Dave",5000);
ifeRestaurant.hire(waiter);
ifeRestaurant.hire(cooker);

let menu = [new Dishes("凉拌黄瓜",3,8,2*t),
            new Dishes("辣椒炒肉",8,15,5*t),
            new Dishes("糖醋里脊",10,25,7*t),
            new Dishes("西湖牛肉羹",5,15,5*t),
            new Dishes("猪肉白菜水饺",10,20,10*t)];

let customer;
let customers = new Array();
for (let i=0;i<4;i++){
    let customer1 = new Customer(i+1,[]);
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src','image/customer.jpg');
    div.appendChild(img);
    let p = document.createElement('p');
    p.textContent = (i+1)+"号客人";
    div.appendChild(p);
    queenPart.appendChild(div);
    customers.push(customer1);
}

orderDiv.style.display = 'none';
waiterDiv.setAttribute('class','waiter_cooker');

setTimeout(function () {
    comeACustomer();
},1000);

