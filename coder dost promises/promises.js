// JS Promises By code Dost

// function delayedFx() {
//     setTimeout(function(){
//         someAction();
//     }, 3000);
// }
// delayedFx();  // output - Undefined, kyonki iska koi return hi nhi hai to ham iss tarah se isme data pass hi nhi kar sakte hai


// function delayedFx() {
//     setTimeout(function () {
//         someAction();
//     }, 3000);
//     return Promise;  // promise nam ka dataStructure hai usse ham return kar rhe hai mtlb ye promise jaisa nhi hai but ham ese hi isse return kar rhe hai
// }
// delayedFx();   // ye 3sec wait nhi karega or ussi vakt return ho jayega


// Promise : States
// // 1: ye abhi ek pending state me hai, jab bydefault esa banega to
//   new Promise(function(resolve,rejected){  // resolve and reject ham callback ki tarah use kar rhe hai
//   })

// // 2: ye abhi ek Resolved state me hai
// new Promise(function (resolve, rejected) {
//     resolve(data);  // resolve and reject ko ek sath call nhi kar sakte ek baar me ek hi state me jayega
// });   // maybe ye data resolve karne me time le rha hai but hamari state resolve ho chuki hogi or sath me ek data aa chuka hoga jo hamne rosolve me pass kiya tha

// // 3: ye ab resolve ki jagah reject state me ho ya hamne reject ko call kiya tab
// new Promise(function (resolve, rejected) {
//     rejected(data);
// });


// Promise : .then() & .catch() => promise ko receive karne ke liye .then() and .catch() method ka use karenge
// const p = new Promise(function (resolve, reject) {

// })
// p.then(function (data) {  // then will run but callback waits, jaise hi promise banega uske turant baad hi .then() vali line chal jayegi

// }).catch(function (data) {   // same .catch() will run but callback waits

// })
// // so promise ke banne ke turant baad hi .then and .catch chal jate hai but unke andar ke callBack function baad me chalte hai


// Promise : Resolved, Reject
// const p = new Promise(function (resolve, reject) {
//     resolve(data);   // issme hamara .then() vala portion chalega
//     reject(data);  // issme hamara .catch() vala portion chalega
// })
// p.then(function (data) {   // callback runs after resolve()

// }).catch(function (data) {  // callback runs after reject()

// })
// // to isme ham ek tarah se callBack ko tad rhe hai ek sender part hai jo promise hai and receiver part .then ya .catch vale part me se kisi ek me ho sakta hai


// Now we will learn Promise using code

// 1: first example
console.log("Start");
const p1 = new Promise((resolve, reject) => {
    // setTimeOut ka use kar ke ham delay create karenge
    setTimeout(() => {
        // resolve("1");
        reject("1");     // yha ham resolve and reject ko ek sath call nhi kar sakte hai
    }, 2000);
})
p1.then(data => {
    console.log(data);
})

console.log("End");
// output - pehle start -> end -> 1                         // resolve ko call karne par
// output - pehle start -> end -> uncaught (in promise) 1   // reject ko call karne par
// so ye chij asynchronously chal rhi hai



// 2: Second example, isme ham reject ki error ko handle karenge
// console.log("Start");
// const p1 = new Promise((resolve, reject) => {
//     // setTimeOut ka use kar ke ham delay create karenge
//     setTimeout(() => {
//         // resolve("1");
//         reject("1");     // yha ham resolve and reject ko ek sath call nhi kar sakte hai
//     }, 2000);
// })
// p1.then(data => {
//     console.log(data);
// }).catch((err)=> {
//     console.log(err);
// })
// console.log("End");
// // output - pehle start -> end -> 1      // resolve ko call karne par
// // output - pehle start -> end -> 1      // reject ko call karne par
// // inne dono me se ek output milega resolve ko call karne par upar vala code and reject ko call karne par niche vala code



// 3: ab iss example me ham dekhenge ki ye promises chain ho sakte hai inki ham chainning dekhenge
// console.log("Start");
// const p1 = new Promise((resolve, reject) => {
//     // setTimeOut ka use kar ke ham delay create karenge
//     setTimeout(() => {
//         resolve("1");
//         // reject("1");     // yha ham resolve and reject ko ek sath call nhi kar sakte hai
//     }, 2000);
// })
// p1.then(data => {
//     console.log("then 1 : ", data);
//     return data;
// }).then(data => {
//     console.log("then 2 : ", data);
// })
// console.log("End");
// // output -
// //  Start
// //  End
// //  then 1 : 1
// //  then 2 : undefined, yha hame first then vale part se data ko return karna padega tab hame second then vale part me 1 milega
// // isliye yha hame undefined aa rha tha yha mene promise return nhi kiya hai ek vlaue return ki hai but then ki property kuch aisi hai ki vo chij ko promise me inclose kar deta hai
// // issi karan ham dusra then bhi lga pate hai


// 4: Ab ham 2 promises bna rhe hai
// console.log("Start");
// const p1 = new Promise((resolve, reject) => {
//     // setTimeOut ka use kar ke ham delay create karenge
//     setTimeout(() => {
//         resolve("1");
//         // reject("1");     // yha ham resolve and reject ko ek sath call nhi kar sakte hai
//     }, 1000);
// })
// const p2 = new Promise((resolve, reject) => {
//     // setTimeOut ka use kar ke ham delay create karenge
//     setTimeout(() => {
//         resolve("2");
//         // reject("1");     // yha ham resolve and reject ko ek sath call nhi kar sakte hai
//     }, 2000);
// })
// p1.then(data => {
//     console.log("then 1 : ", data);
//     return p2;
// }, (err) => console.log('catch', err)) // yha hamne specific iss then ke liiye catch lgaya hai
//     .then(data => {
//         console.log("then 2 : ", data);
//     }).catch(err => console.log('err', err))  // ye catch dono then ko catch kar sakta hai mtlb jis bhi promise se reject call hoga vo uske error ko catch kar lega
//     .finally(() => console.log('completed p1 p2'));   // .finally ka ye kam hai ki then hua catch kuch bhi hua ho ye chalega hi chalega
//     // .finally ka use ye hai ki sara promise ka kam ho chuka hai
// console.log("End");
// output -
//  Start
//  End
//  then 1 : 1
//  then 2 : 2  // ye hame p2 return karne par mila hai 2
// yha mene 2 return kiya hai then 2 me
// dono .then() to usi wakt chal jate hai lekin resolve hone ke baad print hote hai


// 5: Ab ham Promise.all ka use dekhenge
// console.log("Start");
// const p1 = new Promise((resolve, reject) => {
//     // setTimeOut ka use kar ke ham delay create karenge
//     setTimeout(() => {
//         resolve("1");
//         // reject("1");     // yha ham resolve and reject ko ek sath call nhi kar sakte hai
//     }, 1000);
// })
// const p2 = new Promise((resolve, reject) => {
//     // setTimeOut ka use kar ke ham delay create karenge
//     setTimeout(() => {
//         resolve("2");
//         // reject("1");     // yha ham resolve and reject ko ek sath call nhi kar sakte hai
//     }, 2000);
// })
// p1.then(data => {
//     console.log("then 1 : ", data);
//     return p2;
// }, (err) => console.log('catch', err)) // yha hamne specific iss then ke liiye catch lgaya hai
//     .then(data => {
//         console.log("then 2 : ", data);
//     }).catch(err => console.log('err', err))  // ye catch() method dono .then() method ko catch kar sakta hai mtlb jis bhi promise se reject call hoga vo uske error ko catch kar lega
//     .finally(() => console.log('completed p1 p2'))

// // Promise.all se ham kafi sare promises ko combine kar sakte hai
// Promise.all([p1, p2]).then(data => {
//     console.log("All", data); // yha hamne p1 and p2 ko combine kar sarke dono ke data ko ek sath access kar liya hai
// })
// // Promise.all jab kam aata hai jab hame bhut sari chije chahiye ho or ek sath chahiye jaise hamne 2 se 3 web request bhej di or hame sari ki sari ek sath aa jaye taki me next line me inn sab ka data combine kar saku
// //

// console.log("End");
// // output -
// //  Start
// //  End
// //  then 1 : 1
// //  All(2)['1', '2']  // ye Promise.all() method hai
// //  then 2 : 2
// //  completed p1 p2  // ye .finally() method hai



// 6 : yha ham fetch ka use kar ke promise ko dekhenge

// fetch('https://jsonplaceholder.typicode.com/posts')  // ye hame promise return karta hai
//     // .then(response => console.log(response));   // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
//     .then(response => response.json()) // output- Promise {<pending>} // response.json() method data ko json me converrt karega, iss tarah se ye json ek or promise return karta hai
//     .then(data => console.log(data)) // isko me vapis change kar deta hu kyonki ye promise hai to console me data vapas kar deta hu

// const posts = fetch('https://jsonplaceholder.typicode.com/posts')
// const users = fetch('https://jsonplaceholder.typicode.com/users')
// // yha ek user ne 10 posts ki hui hai to ab ham ye data combine karenge
// // or combine karne ke liye dono data hame ek sath chahiye to ham Promise.all() method ka use karenge
// Promise.all([posts, users])
//     .then(([postResponse, userResponse]) => {  // // yha hamne destructuring use ki hai [postResponse,userResponse], ye ek array hai jisme apne aap hi ham response ko two part me tod rhe hai, agar me data put karta to ye array return hoti to usi me destructure karke alag alag varibale me put kar rha hu
//         return Promise.all([postResponse.json(), userResponse.json()]) // ab jo destructured array aayega upar se usse me vapas se ek or promise.all() me put kar rha hu kyonki inme direct data nhi hota hai isme json hota hai
//     })
//     .then(data => console.log(data)) // to ab ham yha direct data abstract kar sakte hai
//     // to ab hamare pass dono array ek sath hai, yha par ham kuch logic for_loop lga kar ham inko combine kar sakte hai har user ke sath post combine kar sakte hai
//     .catch(err => console.log('Sommething Wrong:', err)); // isse jo error aa rhi hai ya aayegi, to ye jo fetch hai vo 404 error ko catch nhi karta hai, 404 ko vo error man hi nhi rha hai


// 7: Promise.any() and Promise.resolve() method ko dekhenge
// agar hame multiple promise me se koi bhi ek resolve ho jaye to de do
// inn dono promise me jo fastest hai ya jo bhi pehle success hota hai vo hame mil jayega
// Promise.any([p1, p2]).then(data => console.log('any', data)) // ye wait nhi karta ek dam se print kar deta hai

// const p3 = Promise.resolve('3'); // ye ek shortcut hai promise banane ka jisme ham kah rhe hai ki Promise already resolved hai  mtlb vo jaise hi aaye or resolved ho jaye
// const p4 = Promise.reject('4');
// p3.then(data => console.log('then', data)).catch((err) => console.log('catch', err))  // then 3
// p4.then(data => console.log('then', data)).catch((err) => console.log('catch', err))  // catch 4