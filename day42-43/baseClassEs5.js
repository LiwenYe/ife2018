function Restaurant(obj) {
    this.money = obj.money;
    this.seats = obj.seats;
    this.staff = obj.staff;
}
Restaurant.prototype.hire = function (newStaff) {
    this.staff.push(newStaff);
};
Restaurant.prototype.fire = function (badStaff) {
    let index = this.staff.indexOf(badStaff);
    if (index !== -1){
        this.staff.splice(index,1);
    } 
};

function Staff(id,name,salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
Staff.prototype.work = function () {
    console.log("完成一次工作");
};

function Waiter(id,name,salary) {
    Staff.call(this,id,name,salary);
}
Waiter.prototype = Object.create(Staff.prototype);
Waiter.prototype.constructor = Waiter;
Waiter.prototype.work = function (task) {
    if (Array.isArray(task)){
        console.log("order" + task);
    }else {
        console.log("上菜");
    }
};

function Cooker(id,name,salary) {
    Staff.call(this,id,name,salary);
}
Cooker.prototype = new Staff();
Cooker.prototype.constructor = Cooker;
Cooker.prototype.work = function(dishes){
    console.log("烹饪出：" + dishes);
};

function Customer() {
    
}
Customer.prototype.order = function (dish) {
  console.log("点：" + dish);
};
Customer.prototype.eat = function () {
    console.log("吃");
};

function Dishes(name,cost,price) {
    this.name = name;
    this.cost = cost;
    this.proce = price;
}

var ifeRestaurant = new Restaurant({
    money:1000000,
    seats:20,
    staff:[]
});
var newCooker = new Cooker('002','Tony',1000);
ifeRestaurant.hire(newCooker);

console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCooker);
console.log(ifeRestaurant.staff);