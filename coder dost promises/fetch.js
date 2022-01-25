// point: 1
// fetch(), Ajax ki tarah hi work karta hai updated feature hai ek tarah se
// fetch(URL, optionsObject)
// fetch("http://google.com/")  // ye hame promise return karega

// point:2
fetch("http://cricket.com/", {   // ye method and body hamare option object hai 
    "method": "POST",   // bydefault method get rehta hai 
    "body": "match score"
})  // ye hame lastly return karega promise

// point:3
// fetch("http://cricket.com/", {
//     "method": "POST",   // bydefault method get rehta hai
//     "body": "match score"
//     })
//     .then(function (HTTPResponse) {
//                                 // isme All Status (even 404)
//     }).catch(function (ErrorResponse) {
//                                 // ONly network errors
//     })

// point:4  with example
// console.log('start');
// fetch('http://localhost:8080/')
//     // .then(response => console.log(response))  // yha par hame ek response milega
//     // actual kya return hua hai uske liiye hame isse ek bar or iss response ko parse karna padega
//     .then(response => response.json())  // json ki jagah response.text() likhne par hame html code milega and respose.ok bhi ek method hoti hai jisme ham check karte hai ki server se response shi shi aaya ya hi it will return true/false isme ham consition lga sakte hai ki server se response nhi aane par ye karun else kuch or
//     .then(response => console.log(response))


// point:5
console.log('start');

// ab ham form data structure use karenge
// FormData bydefault js me ek form api hoti hai jo hamare html form jaisa hi kam karti hai 
const formData = new FormData();
formData.append('username', 'abc')

fetch('http://localhost:8080/user', {
    method: 'post',
    headers: {
        // 'Content-Type':'application/json'
        'Content-Type': 'application/x-www-form-urlencoded',
        // custom hearder bhi bhej sakte hai 
        'custom': 'hello' // but iska koi meaning nhi hai 
    },
    // body:JSON.stringify({name:"coderdost"})
    // body:formData // ye error dega pehle reason ye hai ki hamne application/json kiya hua hai content-type and formData json data to hai nhi to isse ham encode karenge jo hai URLSearchParams iska use karenge or 
    // content-type ko application/x-www-form-urlencoded likhenge
    body: new URLSearchParams(formData)  // ab ye url format me change ho gya hai 

})
    .then(response => response.json())
    .then(response => console.log(response))