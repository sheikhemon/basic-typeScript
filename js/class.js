"use strict";
// When We are declare es6 class object
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    // private method declare
    getMillage() {
        const totalMillage = 10000;
        return totalMillage;
    }
    // Declare method
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('Toyota', 500000);
const totalPrice = toyota.getTotalPrice(25);
