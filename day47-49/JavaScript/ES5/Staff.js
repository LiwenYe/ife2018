function Staff(id,name,salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
Staff.prototype.work = function () {
    console.log("完成一次工作！");
};

//服务员
let waiterWords = document.getElementById('waiter_words');
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
        let dishes = [];
        for(let i=0;i<task.length;i++){
            dishes.push(task[i].name);
        }
        waiterWords.textContent="好的，请您稍等...";
        setTimeout(function () {
            waiter.WaiterCooker();
            waiterWords.textContent = "大厨，菜单来了！";
            cooker.work(task);
        },1000);
        setTimeout(function () {
            waiterWords.textContent = "等待";
        },2000);
    }else{
        waiter.WaiterCustomer();
        waiterWords.textContent = "您好，你要的"+task+"来了，请慢用";
        setTimeout(function () {
            waiter.WaiterCooker();
            waiterWords.textContent = "等待";
        },1000);
        customer.eat(task);
    }
};
SingleWaiter.prototype.welcome = function () {
    waiterWords.textContent = "欢迎光临";
};
SingleWaiter.prototype.collectMoney = function (dish) {
    let sum = 0;
    for(let i=0;i<dish.length;i++){
        sum += dish[i].price;
    }
    waiter.WaiterCustomer();
    waiterWords.textContent = "您好，一共"+sum+"元";
    customer.pay(sum);
};
SingleWaiter.prototype.sayBay = function () {
    waiterWords.textContent = "欢迎下次光临";
    cooklist.textContent = "";
    if (customers.length !== 0){
        setTimeout(function () {
            comeACustomer();
            waiter.WaiterCooker();
        },1000);
    }else{
        waiterWords.textContent = "顾客已走光，今天结业了";
    }
};

 SingleWaiter.prototype.WaiterCustomer=function() {
     waiterDiv.setAttribute('class', 'waiter_customer');
 };
SingleWaiter.prototype.WaiterCooker=function() {
    waiterDiv.setAttribute('class', 'waiter_cooker');
};

let cookerWords = document.getElementById('cookerState');
let cookTime = document.getElementById('cookTime');
let cooklist = document.getElementById('dishList');
//厨师
function SingleCooker(id,name,salary) {
    Staff.call(this,id,name,salary);
    this.instance = null;
}
SingleCooker.prototype = new Staff();
SingleCooker.prototype.constructor = SingleCooker;
SingleCooker.prototype.work = function (dishes) {
    for (let i=0;i<dishes.length;i++){
        let li = document.createElement('li');
        li.textContent = dishes[i].name;
        cooklist.appendChild(li);
    }
   Promise.all(dishes).then(function () {
       let timeOut = 0;
       let count = dishes[0].time/1000-1;
       cookerWords.textContent = "正在做"+dishes[0].name;
       for (let i=0;i<dishes.length;i++){
           timeOut += dishes[i].time;
           count = dishes[i].time/1000;
           setTimeout(function () {
               cookerWords.textContent = dishes[i].name+"好了";
               cooklist.children[i].textContent += '  √';
               waiter.work(dishes[i].name);
               if (i<dishes.length-1){
                   cookerWords.textContent = "正在做"+dishes[i+1].name;
               }else{
                   cookerWords.textContent = "空闲";
               }
           },timeOut);
       }
   });
};
SingleCooker.getInstance = function (id,name,salary) {
    if (!this.instance){
        this.instance = new SingleCooker(id,name,salary)
    }
    return this.instance;
};
