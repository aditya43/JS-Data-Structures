class User {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
}

User.prototype.getData = function() {
    console.log(this.name + ' ------> ' + this.city)
}

let adi = new User('Aditya Hajare', 'Pune');
adi.getData();

/** Important Concept */
console.log(( new User ).__proto__ === User.prototype);
console.log(( new User ).prototype === undefined);