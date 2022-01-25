// 1:
// const p = new Promise(function (res, rej)
// })
// const data = await p // await uske aage likhenge jo promise return kar rhi hai ya promise it self to vo uska data return kar dega
// // await will sleep at this line lekin js me execution chalta rehta hai callBack baad me chalte hai, ek tarah se ham yha pose ho jayenge or await chalta rhega
// // jaise hi resolve hoga isme await hokar sara data aa jayega
// console.log(p);  // this line runs after resolve


//2:
// const p = new Promise(function (res, rej) {
//     resolve(data);
// })
// async function() {
//     const data = await p
//     console.log(p);
// }


//3: Using Promise
console.log('Start');

//3.1
// const p1 = new Promise((resolve, reject) => {
//     resolve(1);
// });
// p1.then(data => console.log(data));

//3.2
// fetch('https://jsonplaceholder.typicode.com/posts')  // ye ek alag promise return kar rha hai
// .then((response) => response.json())
// .then((data) => console.log(data));

//3.3
// const p1 = new Promise((resolve, reject) => {
//     resolve('1');
// });
// // const value = await p1;
// // console.log(value);  // ye await abhi  work nhi karega hame isse ek function me wrap kar ke uss function ko async banana padega
// async function getValue1() {
//     const value = await p1;
//     console.log(value);  // 1   // ab ye work karega
// }  // ye ek dam lenear program ho jata hai
// getValue1();


// async function getValue2() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await response.json();
//     console.log(posts);  // 1   // ab ye work karega
// }  // fetch method me hame 2 process lagte hai ek bar ham json resolve karte hai iss karan se hame response me response.json() lgana padega

// getValue2();

//3.4
// async function getValue3() {
//     return 3;
// }
// getValue3.then(data => console.log(data));  // 3  // iska mtlb ye hua ki async function hai ye apne aap hi ek promise put kar deta hai
// // agar async hta denge to ye promise chal hi nhi sakta
// // to async function apne aap return ko ek promise me wrap kar deta hai agar vo simple value ho to

// // ab agar simple value return na ho tab kya hoga
// async function getValue4() {
//     // return await p1; // yha await ka use karna unnessasery hai async ham vese bhi put kar rhe hai isko ht kar bhi same output milega agar direct retruneable hai to await lgana jaruri nhi hai
//     return p1;
// }
// getValue4().then(data => console.log('await', data));  // p1 se 1 milega ooutput me
// p1.then(data => console.log('promise', data)); // pehle iska output aayega
// getValue().then(data => console.log(data));  // second par iska and third par await ka output milega kynoki vo do bar promise me wrap ho rha hai


// 4: now we will see error handling
// const p1 = new Promise((resolve, reject) => {
//     reject("ERROR");
// });
// async function getValue5() {
//     // const value = await p1;  // yha await use karenge kyonki await uski value nikalne ka try karega
//     // console.log(value)   //  Uncaught (in promise) err
//     // // error to mili hai but ham usse handle nhi kar pa rhe hai to ham try_catch block ka use karenge
//     try {
//         const value = await p1;  // yha await use karenge kyonki await uski value nikalne ka try karega
//         console.log(value)
//     } catch (err) {
//         console.log('error', err) // error ERROR
// ab hamne yha error ko handle kar liiya hai
//     }
// }
// getValue5()

// 5: Second way to error handling
const p1 = new Promise((resolve, reject) => {
    reject("ERROR");
});
async function getValue6() {
    const value = await p1;
    console.log(value)
}
getValue6().catch(err => console.log("error", err)) // error ERROR 
// but yha par mene async ke promise vale part se mix kar liya hai catch vala block

console.log('End');


