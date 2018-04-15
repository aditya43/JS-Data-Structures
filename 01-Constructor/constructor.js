// Basic class
class User {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }

    changeName(newName) {
        this.name = newName;
    }
}

let adi = new User('Aditya Hajare', ' Pune');
console.log(adi);
adi.changeName('John Doe');
console.log(adi); // After changing name.

/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+*/

// Class with static methods
class Topic {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }

    static create(title, body) {
        return new Topic(title, body);
    }

    changeTitle(newTitle) {
        this.title = newTitle;
    }

    static getDate() {
        return new Date().toUTCString();
    }
}

let t = Topic.create('Some topic title', 'Sample topic body..');
console.log(t);
t.changeTitle('Modified title..');
console.log(t); // After changing title.
console.log(Topic.getDate()); // Simple static function to get today's date.