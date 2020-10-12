// Sync operations
console.log("---- 1 Sync operations ----");
console.log("1 Plant Corn");
console.log("1 Water Plants");
console.log("1 Add fertilizer");



// Async operation
console.log("---- 2 Async operations ----");
console.log("2 Plant maize");

    // Anonymous function that waits 3 seconds before watering plants
setTimeout(function(){
    console.log("2 Water plants");
}, 3000);

console.log("2 Add fertilizer");

// The Async properties of setTimeout makes the watering of plants happen last, after 3 seconds of delay



// Callbacks
console.log("---- 3 callbacks ----");
// in this case, the anonymous function "function" is the callback.
// Every second hello world will be printed, because the interval is set to 1000 ms
// setInterval(function(){
//     console.log('hello world');
// }, 1000);



// This is a named callback

// we are sending the greeting function as a callback when calling the introduction function.
// Step 1) run through the introduction function
// Step 2) fullName is created as a const
// Step 3) the callback is called which we say should be the greeting function.
// Step 4) the greeting callback then logs out the display
function greeting(name){
    console.log(`3 Hello, ${name}, welcome to Scotland!`);
}

function introduction(firstName, lastName, callback){
    const fullName = `${firstName} ${lastName}`;

    callback(fullName);
}

introduction('John', 'Snow', greeting);


// Promises
console.log("---- 4 Promises ----");

const weather = true;
const date = new Promise(function(resolve, reject){

    if(weather){
        const dateDetails = {
            name: 'Cubana Restaurant',
            location: '55th Street',
            table: 5
        };

        // If weather is true, we want to resolve, by sending the date details to whichever function called the promise
        resolve(dateDetails);
    }
    else{
        
        // When weather is false, we reject, and send the error back to the function that calls this promise.
        reject(new Error('4 Bad Weather, so no Date'));
    }
});


// Promises can also be chained together
console.log("---- 5 Chained Promises ----")
const orderUber = function(dateDetails){

    return new Promise(function(resolve, reject){
        const message = `5 Get me an Uber ASAP to ${dateDetails.location}, we are going on a date.`;

        resolve(message);
    });
};

// Note this can be shortened to this:
// The only difference is when the message is being created and stored.
const orderUberShorter = function(dateDetails){
    const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going on a date.`;
    return Promise.resolve(message);
}

// we create a new anon function called myDate.
const myDate = function(){

    // myDate uses the date promise, once the promise is completed, it will follow the chain.
    date
        .then(orderUber)                                // This shows the chaining of promises
        // If the promise is resolved
        .then(function(done){
            console.log("4 We're going on a date!");
            console.log(done);                          // The done object holds the date details that were sent from the resolve
        })
        // If the promise returns an error
        .catch(function(error){
            console.log(error.message);                 // The error object holds the error message from the reject 
        })
}

// Display the outcome of myDate
myDate();




// Async and Await
console.log("---- 6 Async and Await ----");

// This is a basic async function
async function myRide(){
    return '2017 Toyota Camary';
}

// Which does the EXACT same thing as this:
function yourRide(){
    return Promise.resolve('2017 Toyota Camary');
}

// The only difference between these two, is that the bottom is in the "promise" format. But, they still complete the same task.
function testemBoth(boolVar){

    if(boolVar){
        return Promise.resolve('6 Promise was resolved');
    }
    //return Promise.reject('6 Can I reject this as well?');
    
}

testemBoth(true);       // This works
testemBoth(false);      // This throws an error saying I'm not handling it right?
