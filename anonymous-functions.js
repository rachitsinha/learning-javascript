const fn = function(a, b) {
    console.log('learning anonymous functions in javascript');
    console.log(arguments);
}
fn();
fn(true);

setTimeout(fn, 2000,11,22,33,44);