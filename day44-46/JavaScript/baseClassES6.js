class Restaurant {
    constructor(obj){
        this.money = obj.money;
        this.seats = obj.seats;
        this.staff = obj.staff;
    }
    hire(newStaff){
        this.staff.push(newStaff);
    };
    fire(badStaff) {
        let index = this.staff.indexOf(badStaff);
        if (index !== -1){
            this.staff.splice(index,1);
        }
    };
}

class Staff {
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    work(){
        console.log("完成一次工作");
    }
}

// class Waiter extends Staff{
//     constructor(id,name,salary){
//         super(id,name,salary);
//     }
//     work(task){
//         if (Array.isArray(task)){
//             console.log("记录客人点菜");
//         } else{
//             console.log("上菜");
//         }
//     }
// }

class SingleWaiter extends Staff{
    constructor(id,name,salary){
        if (SingleWaiter.prototype.Instance) {
            return SingleWaiter.prototype.Instance;
        }
        super(id,name,salary);
        SingleWaiter.prototype.Instance = this;
    }
    welcome(){
        console.log(this.id+"号服务员"+this.name+":欢迎光临");
    }
   work(task){
       if (Array.isArray(task)){
           console.log(this.id+"号服务员"+this.name+":大厨，做一个"+task[0].name);
       }else{
           console.log(this.id+"号服务员"+this.name+":您好，你要的"+task+"来了，请慢用");
       }
   }
   collectMoney(dish){
       let sum = dish[0].price;
       console.log(this.id+"号服务员"+this.name+":您好，一共"+sum+"元");
   }
   sayBay(){
       console.log(this.id+"号服务员"+this.name+":欢迎下次光临");
   }
}

// class Cooker extends Staff{
//     constructor(id,name,salary){
//         super(id,name,salary);
//     }
//     work(){
//         console.log("烹饪出菜品");
//     }
// }

class SingleCooker extends Staff{
    constructor(id,name,salary){
        super(id,name,salary);
        this.instance = null;
    }
    work(dish){
        console.log(this.id+"号厨师"+this.name+":"+dish+"出锅啦！");
    }
    static getInstance(id,name,salary){
        if (!this.instance){
            this.instance = new SingleCooker(id,name,salary)
        }
        return this.instance;
    }
}

class Customer {
    constructor(id,orders){
        this.id = id;
        this.orders = orders;
    }
    orderDish(){
        let index = Math.floor(Math.random()*menu.length),
            dish = menu[index];
        this.orders.push(dish);
        console.log("顾客"+this.id+":我要"+dish.name);
    }
    eat(){
        console.log("顾客"+this.id+":(吃吃吃)");
        console.log("顾客"+this.id+":(吃完了)服务员，结账！");
    }
    leave(){
        console.log("顾客"+this.id+":付账，离开");
    }
}

class Dishes {
    constructor(name,cost,price) {
        this.name = name;
        this.cost = cost;
        this.price = price;
    }
}
