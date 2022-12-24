function parentFn(callback) {
    console.log('I am parentFn');
    if(callback) {
        callback();
    }
}

// function childFn() {
//     console.log('I am childFn');
// }

// parentFn(childFn);

// parentFn(function(){
//     console.log('I am an anonymous function passed as callback')
// });

const intervalId = setInterval(function(){
    console.log('i am being called every 2 seconds')
}, 2000);

setTimeout(function(){
    clearInterval(intervalId);
}, 10000);