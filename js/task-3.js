class StringBuilder {
    #value;


    constructor(value) {
        //const initialValue = ""; 
        this.#value = value;
    }
    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value = this.#value.concat(str);
    }
    padStart(str) {
        this.#value = str.concat(this.#value);
    }
    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="