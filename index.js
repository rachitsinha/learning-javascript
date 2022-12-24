function myfn(a=90, b=100) {
    console.log('myfn start');
    console.log(`a = ${a} and b = ${b}`);
    console.log('myfn end');
}
// myfn(10,2);
// myfn(21);
// myfn('hello world');
// myfn({fn: 'rachit', ln: 'sinha'});
// myfn();


function mysecondfn(a,b,c) {
    console.log(mysecondfn.caller);
}

function mythirdfn() {
    mysecondfn(10, false, 99);
}

mythirdfn();

