// 1:
// const p1 = new Object();  // const p1 = {}
// const a1 = new Array();  // const a1 = []
// const f1 = new Function();
// console.log(p1)  // {}
// console.log(Object.prototype)
// console.log(a1)  // []
// console.log(Array.prototype)
// console.log(f1)  // ƒ anonymous(){ }
// console.log(Function.prototype)
// inn teeno ka apna prototype hai

// 2:
// person object hai yha par
// const person = {
//     name: 'john',
//     getName: function () {
//         return this.name
//     },
//     getRollNo: function () {
//         return this.rollNo
//     }
// }

// const student = {
//     rollNo: 1,
//     __proto__: person
// }

// const primaryStudent = {
//     rollNo: 2,
//     __proto__: student
// }
// console.log(student.person);
// console.log(person.name); // john
// console.log(student.student);
// console.log(student.name); // john
// console.log(student.getName());   // john
// console.log(student.getRollNo());   // 1
// console.log(primaryStudent.getRollNo()); // 2

// 3:
// Array.prototype.show = function () {
//     console.log(this)   // ['delhi']
//     console.log(this.length) // 1
// }

// const cities = ['delhi'];
// cities.show();

// 4: kisi bhi array ko object me convert karne ke liye ham hamara khud ka code likhne vale hai
// Array.prototype.convertToObject = function () {
//     let obj = {}
//     this.forEach(elm => {
//         obj[elm] = elm
//     })
//     return obj;
// }

// const cities = ['delhi'];
// console.log(cities.convertToObject());  // {delhi: 'delhi'}

// 5: Ab ham khud ka prototype bhi bna sakte hai

// 5.1
// function MyProto(name) {
//     this.name = name;
// }
// const p2 = new MyProto('jack');  // jab bhi new keyword ke sath call karunga iss constructor ko to ek object ban jayega MyProto type ka
// console.log(p2);

// 5.2
// function MyProto(name) {
//     this.name = name;
// }

//  __proto__ : person(p2)
// MyProto.prototype = person;  // jo person object banya tha uska data milega, jo hamne upar create kiya tha

//  ! iss prototype ko change karne ke liye isme me inbuilt function ka use karunga, jo iss prototype ko change karne ka ek or tarika hai
// console.log(Object.getPrototypeOf(p2)); // yha ham sidhe object ke object ka prototype dekh rhe hai   // jack


// const p2 = new MyProto('jack');  // jab bhi new keyword ke sath call karunga iss constructor ko to ek object ban jayega MyProto type ka

// console.log(Object.setPrototypeOf(p2, Object));
// Object.setPrototypeOf(p2, Array); // niche ke do console iske liye likhe hai
// console.log(p2);  // MyProtot {name: 'jack'} iske andar __proto__ : f Array() milega
// console.log(p2.legth); // 1


// console.log(p2);
// console.log(p2.getName()); // jack

//  ! p2 to uska output object hai vo new keyword se bna hai to uss par __proto__ use karna padega
//  ! agar hame iss p2 ka parent pta hai jisse ye hamesha bante hai to uss par ham .prototype use kar sakte hai 