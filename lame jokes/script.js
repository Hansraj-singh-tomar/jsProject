const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// 1: promise ka use kar ke ham data ko fetch karenge 

// const generateJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json",
//         }
//     }
//     fetch(" https://icanhazdadjoke.com/", setHeader)
//         .then((res) =>
//             // console.log(res.json());  // isse mujhe html format me data mil rha hai 
//             res.json()
//         )
//         .then((data) => {
//             jokes.innerHTML = data.joke
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// jokeBtn.addEventListener('click', generateJokes);
// generateJokes(); // ye generateJokes() me khud se bhi call karna chahunga taki bydefault pehli bar koi page ko refresh karega to ye function call ho jayega
// // atleast ek na ek joke mujhe yha par dikhai de rha hoga



// 2: async_await ka use karenge ab

const generateJokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json",
            }
        }
        const res = await fetch(" https://icanhazdadjoke.com/", setHeader)
        const data = await res.json()
        jokes.innerHTML = data.joke;
    } catch (error) {
        console.log(`The error is ${error}`);
    }
}
jokeBtn.addEventListener('click', generateJokes);
generateJokes();