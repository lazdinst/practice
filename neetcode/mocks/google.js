"use strict";
// Design a class that implmenets the golowing
// 1. Inserting a value without duplicates
// 2. Removing a value
// 3. Getting a random value that is in the list (with equal probability)
class Store {
    constructor() {
        this.values = new Map();
    }
    getValues() {
        return this.values.entries();
    }
    insertValue(value) {
        if (!this.values.has(value)) {
            this.values.set(value, value);
        }
        else {
            console.log("Value already exists");
        }
    }
    remnoveValue(value) {
        if (this.values.has(value)) {
            this.values.delete(value);
        }
        else {
            console.log("Value does not exist");
        }
    }
    getRandomValue() {
        const randomIndex = Math.floor(this.values.size * Math.random());
        const randomValue = this.values.get(randomIndex);
        return randomValue;
    }
}
const store = new Store();
store.insertValue(1);
store.insertValue(2);
store.insertValue(3);
store.insertValue(4);
store.remnoveValue(3);
const values = store.getValues();
console.log(values);
console.log(store.getRandomValue());
