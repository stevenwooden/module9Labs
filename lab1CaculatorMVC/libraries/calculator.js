const Logger = require('./logger');

class Calculator {
    constructor(){
        this.id = Math.floor(Math.random() * 1_000_000);
        this.logger = new Logger(`Calculator : ${this.id}`);
    }

    add=(num1, num2) => {
        const value = num1 + num2;
        this.logger.log(value);
        return value;
    }
    subtract=(num1,num2) => {
        const value = num1 - num2;
        this.logger.log(value);
        return value
    }
    multiplication=(num1,num2) => {
        const value = num1 * num2;
        this.logger.log(value);
        return value
    }
    division=(num1, num2) => {
        const value = num1 / num2;
        this.logger.log(value);
        return value
    }
}
module.exports = Calculator