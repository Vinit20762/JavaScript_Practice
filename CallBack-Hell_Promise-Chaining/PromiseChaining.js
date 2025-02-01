/* Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2 */ //

// Using Promise Chaining

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
      setTimeout(resolve, duration);
    });
}

setTimeoutPromisified(1000).then(function(){
    console.log("hi");

    setTimeoutPromisified(3000).then(function(){
        console.log("hello");

        setTimeoutPromisified(5000).then(function(){
            console.log("hello there")
        })
    })
})


// cleaner way of promise chaining

// setTimeoutPromisified(1000).then(function(){
//     console.log("Hi")
//     return setTimeoutPromisified(3000)
// }).then(function(){
//     console.log("hello")
//     return setTimeoutPromisified(5000)
// }).then(function(){
//     console.log("hello there")
// })


