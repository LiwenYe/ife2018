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
Restaurant.prototype.updateMoney = function (money) {
    this.money += money;
    moneyPart.textContent = this.money;
};

function Dishes(name,cost,price,time) {
    this.name = name;
    this.cost = cost;
    this.price = price;
    this.time = time;
}