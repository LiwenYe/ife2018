let ifeRestaurant = new Restaurant({
    money:100000,
    seats:1,
    staff:[]
});

let waiter = new SingleWaiter("001","Tony",2000);
let cooker = SingleCooker.getInstance("001","Dave",5000);
ifeRestaurant.hire(waiter);
ifeRestaurant.hire(cooker);

let menu = [new Dishes("凉拌黄瓜",3,8),
            new Dishes("辣椒炒肉",8,15),
            new Dishes("糖醋里脊",10,25),
            new Dishes("西湖牛肉羹",5,15)];

let customers = new Array();
for (let i=0;i<4;i++){
    let customer = new Customer(i+1,[]);
    customers.push(customer);
}

for (let i=0;i<customers.length;i++){
    waiter.welcome();
    customers[i].orderDish();
    waiter.work(customers[i].orders);
    cooker.work(customers[i].orders[0].name);
    waiter.work(customers[i].orders[0].name);
    customers[i].eat();
    waiter.collectMoney(customers[i].orders);
    customers[i].leave();
    waiter.sayBay();
    console.log("--------------------------------------");
}
