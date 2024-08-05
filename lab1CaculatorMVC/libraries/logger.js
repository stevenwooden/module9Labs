class Logger{
    constructor(context) {
        this.context = context;
    }

    log(value){
        console.log(`[${this.context}; ${value}]`);
    }
}
module.exports = Logger

