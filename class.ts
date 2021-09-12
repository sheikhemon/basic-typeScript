// When We are declare es6 class object
class Car {
    model: string;
    price: number;
    private _millage: number;
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    // private method declare
    getMillage(): number {
        const totalMillage = 10000;
        return totalMillage;
    }
    // Declare method
    getTotalPrice(tax: number): number {
        const taxAmount = this.price * tax / 100
        const total = this.price + taxAmount
        return total;
    }
}
const toyota = new Car('Toyota', 500000)
const totalPrice: number = toyota.getTotalPrice(25)