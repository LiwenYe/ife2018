class Restaurant {
    constructor(obj){
        this.money = obj.money;
        this.seats = obj.seats;
        this.staff = obj.staff;
    }
    hire(newStaff){
        this.staff.push(newStaff);
    }
    fire(badStaff){
        let index = this.staff.indexOf(badStaff);
        if (index !== -1){
            this.staff.splice(index,1);
        }
    }
}

class Staff {
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    work(){
        console.log("完成");
    }
}

class Waiter extends Staff{
    constructor(id,name,salary){
        super(id,name,salary);
    }
    work(task){
        if (Array.isArray(task)){
            console.log("order" + task);
        } else{
            console.log("上菜");
        }
    }
}

class Cooker extends Staff{
    constructor(id,name,salary){
        super(id,name,salary);
    }
    work(task){
        console.log("烹饪出" + task);
    }
}

class Customer {
    order(dishes){
        console.log("点："+dishes);
    }
    eat(dish){
        console.log("吃：" + dish);
    }
}

class Classishes {
    constructor(name,cost,price){
        this.name = name;
        this.cost = cost;
        this.price = price;
    }
}

var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});

var newCook = new Cooker("Tony", 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff);

//ifeRestaurant.fire(newCook);
//console.log(ifeRestaurant.staff);
