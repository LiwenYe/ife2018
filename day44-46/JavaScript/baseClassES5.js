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
    console.log("完成一次工作！");
};

// function Waiter(id,name,salary) {
//     Staff.call(this,id,name,salary);
// }
// Waiter.prototype = new Staff();
// Waiter.prototype.constructor = Waiter;
// Waiter.prototype.work = function (task) {
//     if (Array.isArray(task)){
//         console.log("记录客人点菜");
//     }else{
//         console.log("上菜");
//     }
// };
//服务员的单例模式
//属性判断
function SingleWaiter(id,name,salary) {
    if (SingleWaiter.prototype.Instance) {
        return SingleWaiter.prototype.Instance;
    }
    Staff.call(this,id,name,salary);
    SingleWaiter.prototype.Instance = this;
}
SingleWaiter.prototype = new Staff();
SingleWaiter.prototype.constructor = SingleWaiter;
SingleWaiter.prototype.work = function (task) {
    if (Array.isArray(task)){
        console.log(this.id+"号服务员"+this.name+":大厨，做一个"+task[0].name);
    }else{
        console.log(this.id+"号服务员"+this.name+":您好，你要的"+task+"来了，请慢用");
    }
};
SingleWaiter.prototype.welcome = function () {
    console.log(this.id+"号服务员"+this.name+":欢迎光临");
};
SingleWaiter.prototype.collectMoney = function (dish) {
    let sum = dish[0].price;
    console.log(this.id+"号服务员"+this.name+":您好，一共"+sum+"元");
};
SingleWaiter.prototype.sayBay = function () {
    console.log(this.id+"号服务员"+this.name+":欢迎下次光临");
};


// function Cooker(id,name,salary) {
//     Staff.call(this,id,name,salary);
// }
// Cooker.prototype = new Staff();
// Cooker.prototype.constructor = Cooker;
// Cooker.prototype.work = function (id,name,salary) {
//   console.log("做了一道菜")
// };
//厨师单例模式
//函数接口
function SingleCooker(id,name,salary) {
    Staff.call(this,id,name,salary);
    this.instance = null;
}
SingleCooker.prototype = new Staff();
SingleCooker.prototype.constructor = SingleCooker;
SingleCooker.prototype.work = function (dish) {
  console.log(this.id+"号厨师"+this.name+":"+dish+"出锅啦！");
};
SingleCooker.getInstance = function (id,name,salary) {
    if (!this.instance){
        this.instance = new SingleCooker(id,name,salary)
    }
    return this.instance;
};


 function Customer(id,orders) {
     this.id = id;
     this.orders = orders;
 }
 Customer.prototype.orderDish = function () {
     let index = Math.floor(Math.random()*menu.length),
         dish = menu[index];
     this.orders.push(dish);
     console.log("顾客"+this.id+":我要"+dish.name);
 };
 Customer.prototype.eat = function () {
     console.log("顾客"+this.id+":(吃吃吃)");
     console.log("顾客"+this.id+":(吃完了)服务员，结账！");
 };
 Customer.prototype.leave = function () {
     console.log("顾客"+this.id+":付账，离开");
 };

 function Dishes(name,cost,price) {
     this.name = name;
     this.cost = cost;
     this.price = price;
 }

